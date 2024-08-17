/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { assert } from "@ianlucas/cs2-lib";
import { createReadStream } from "fs";
import { mkdir, readdir, readFile, rename, writeFile } from "fs/promises";
import { basename, join } from "path";
import sources from "./config/sources.json";
import { downloadFromDepot, getLatestManifest } from "./utils/depot-downloader";
import { findByteSequence } from "./utils/find-byte-sequence";
import { cwd, exists } from "./utils/fs";
import { downloadFromRepo, getLatestCommit } from "./utils/github";
import { parseCSSharpGamedata } from "./utils/parse-cssharp-gamedata";
import { parseSourcemodGamedata } from "./utils/parse-sourcemod-gamedata";
import { Signature, Source } from "./utils/typings";
import { writeSourceMd } from "./utils/write-source-md";

const workdir = join(cwd, "workdir");
const configdir = join(cwd, "config");
const binaries = {
    linux: join(workdir, "libserver.so"),
    windows: join(workdir, "server.dll")
} as const;
const signatures: Signature[] = [];

async function checkDepot(depot: number) {
    console.log(`Checking depot ${depot}`);
    const filelistPath = join(configdir, `${depot}.depot`);
    const manifestPath = join(workdir, `${depot}.manifest`);
    const manifest = (await exists(manifestPath)) ? parseInt(await readFile(manifestPath, "utf-8")) : 0;
    const latestManifest = await getLatestManifest(depot);
    if (latestManifest === undefined) {
        console.log(`Failed to get latest manifest for depot ${depot}`);
        return false;
    }
    if (manifest === latestManifest) {
        console.log(`Depot ${depot} is up to date`);
        return false;
    }
    const path = await downloadFromDepot(depot, filelistPath);
    if (path === undefined) {
        console.log(`Failed to download depot ${depot}`);
        return false;
    }
    const filename = basename(path);
    await rename(join(cwd, path), join(workdir, filename));
    await writeFile(manifestPath, latestManifest.toString(), "utf-8");
    console.log(`Downloaded ${filename}`);
    return true;
}

async function checkRepository({ id, repo, branch, file }: Source) {
    const commitPath = join(workdir, `${id}.commit`);
    const gamedataPath = join(workdir, `${id}.gamedata`);
    const commit = (await exists(commitPath)) ? await readFile(commitPath, "utf-8") : "";
    const latestCommit = await getLatestCommit(repo, file);
    if (latestCommit === undefined) {
        console.log(`Failed to get latest commit for ${repo}`);
        return false;
    }
    if (commit === latestCommit) {
        console.log(`${repo} is up to date`);
        return false;
    }
    const contents = await downloadFromRepo(repo, branch, file);
    if (contents === undefined) {
        console.log(`Failed to download gamedata from ${repo}`);
        return false;
    }
    await writeFile(commitPath, latestCommit, "utf-8");
    await writeFile(gamedataPath, contents, "utf-8");
    console.log(`Downloaded gamedata from ${repo} (commit: ${latestCommit.slice(0, 7)})`);
    return true;
}

async function checkSource(source: Source) {
    const didWeDownloadGamedata = await checkRepository(source);
    const gamedataPath = join(workdir, `${source.id}.gamedata`);
    if (!(await exists(gamedataPath))) {
        console.log(`Failed to find gamedata for ${source.repo}`);
        return false;
    }
    const gamedata = await readFile(gamedataPath, "utf-8");
    switch (source.type) {
        case "sourcemod":
            parseSourcemodGamedata(signatures, source, gamedata);
            break;
        case "cssharp":
            parseCSSharpGamedata(signatures, source, gamedata);
            break;
    }
    return didWeDownloadGamedata;
}

function findSignatures(binPath: string, platform: NonNullable<Signature["platforms"][string]>) {
    return new Promise((resolve, reject) => {
        const { sequence, mask } = platform.pattern;
        const stream = createReadStream(binPath, {
            highWaterMark: 64 * 1024
        });
        let found = false;
        let previousChunk: Buffer | null = null;

        stream.on("data", (chunk: Buffer) => {
            if (previousChunk) {
                chunk = Buffer.concat([previousChunk, chunk]);
            }
            if (findByteSequence(chunk, sequence, mask)) {
                platform.found = true;
                found = true;
                stream.close();
            }
            previousChunk = chunk.subarray(-sequence.length + 1);
        });

        stream.on("close", () => resolve(found));
        stream.on("error", (err) => reject(err));
    });
}

async function main() {
    let didSomethingChange = false;

    // 0. Create the workdir if it doesn't exist.
    if (!(await exists(workdir))) {
        await mkdir(workdir);
    }

    // 1. Download the latest server binaries.
    for await (const file of await readdir(configdir)) {
        if (file.endsWith(".depot")) {
            const depot = parseInt(file.split(".")[0]);
            if (await checkDepot(depot)) {
                didSomethingChange = true;
            }
        }
    }

    // 2. Download the latest gamedata from the repositories.
    for (const source of sources) {
        if (await checkSource(source)) {
            didSomethingChange = true;
        }
    }

    if (!didSomethingChange) {
        console.log("No changes detected, skipping signature search");
        return;
    }

    // 3. Find the signatures in the binaries.
    for (const [osName, binPath] of Object.entries(binaries)) {
        await Promise.all(
            signatures
                .map(({ platforms }) => platforms[osName])
                .filter((platform) => platform !== undefined)
                .map((platform) => findSignatures(binPath, platform))
        );
        console.log(
            `Found ${signatures.filter(({ platforms }) => platforms[osName]?.found).length} signatures for ${osName}`
        );
    }

    // 4. Write the README.
    const signaturesBySource = Object.groupBy(signatures, (signature) => signature.source.id);
    let readme = `# CS2 Signatures\n\nLast updated: ${new Date().toISOString()}`;
    for (const signatures of sources.map(({ id }) => signaturesBySource[id])) {
        assert(signatures !== undefined);
        await writeSourceMd(signatures[0].source, signatures);
        readme += `\n\n## ${signatures[0].source.id}\n\n`;
        readme += `Repository: https://github.com/${signatures[0].source.repo}`;
        readme += `\n\n### Windows\n\n`;
        for (const { platforms, name, library } of signatures) {
            readme += `* ${library !== "server" ? "❓" : platforms.windows.found ? "✅" : "❌"} ${name}\n`;
        }
        readme += `\n\n### Linux\n\n`;
        for (const { platforms, name, library } of signatures) {
            readme += `* ${library !== "server" ? "❓" : platforms.linux.found ? "✅" : "❌"} ${name}\n`;
        }
    }
    await writeFile(join(cwd, "README.md"), readme, "utf-8");
}

main();
