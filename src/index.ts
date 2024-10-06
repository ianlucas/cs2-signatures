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
import { cwd, exists, root } from "./utils/fs";
import { downloadFromRepo, getLatestCommit } from "./utils/github";
import { formatDate } from "./utils/misc";
import { parseCSSharpGamedata } from "./utils/parse-cssharp-gamedata";
import { parseSourcemodGamedata } from "./utils/parse-sourcemod-gamedata";
import { Signature, Source } from "./utils/types";
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
    const manifest = (await exists(manifestPath)) ? await readFile(manifestPath, "utf-8") : "";
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

    if (!didSomethingChange && false) {
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
    let readme = `# CS2 Server Signatures\n\nLast updated: ${formatDate(new Date())}`;
    readme += `<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr>`;
    const brokenSignaturesDetails: string[] = [];
    for (const signatures of sources.map(({ id }) => signaturesBySource[id])) {
        assert(signatures !== undefined);
        assert(signatures.length > 0);
        const { source } = signatures[0];
        await writeSourceMd(source, signatures);
        let foundAllInWindows = true;
        let foundAllInLinux = true;
        const brokenSignatures: Signature[] = [];
        for (const signature of signatures) {
            if (signature.library === "server") {
                if (!signature.platforms.windows.found) {
                    foundAllInWindows = false;
                }
                if (!signature.platforms.linux.found) {
                    foundAllInLinux = false;
                }
                if (!signature.platforms.windows.found || !signature.platforms.linux.found) {
                    brokenSignatures.push(signature);
                }
            }
        }
        if (brokenSignatures.length > 0) {
            let details = `<details>\n  <summary>${source.id} broken signatures</summary>\n\n`;
            for (const { platforms, name } of brokenSignatures) {
                const win = platforms.windows.found ? "✅" : "❌";
                const lin = platforms.linux.found ? "✅" : "❌";
                details += `* <sub>${lin}Linux ${win}Windows</sub> ${name}\n`;
            }
            details += `\n</details>`;
            brokenSignaturesDetails.push(details);
        }

        readme += `<tr><td>${foundAllInLinux ? "✅" : "❌"}</td>`;
        readme += `<td>${foundAllInWindows ? "✅" : "❌"}</td>`;
        readme += `<td><a href="https://github.com/${source.repo}">${source.id}</a></td>`;
        readme += `<td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/docs/${source.id}.md">View signatures →</a></td></tr>`;
    }
    readme += `</table>\n\n`;
    readme += brokenSignaturesDetails.join("\n\n");
    await writeFile(join(root, "README.md"), readme, "utf-8");
}

main();
