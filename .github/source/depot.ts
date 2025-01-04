/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { assert, fail } from "@ianlucas/cs2-lib";
import { depotDownloader } from "@ianlucas/depot-downloader";
import { readFile, rename, writeFile } from "fs/promises";
import { basename, join } from "path";
import { configdir, cwd, tryReadFile, workdir } from "./filesystem.js";
import { readProcess } from "./misc.js";

const CS2_APP = 730;

export class Depot {
    public filelistPath: string;
    public manifestPath: string;

    constructor(public depotId: number) {
        this.filelistPath = join(configdir, `${this.depotId}.depot`);
        this.manifestPath = join(workdir, `${this.depotId}.manifest`);
    }

    async fetchLatestManifestId() {
        try {
            const output = await readProcess(
                depotDownloader({
                    app: CS2_APP,
                    depot: this.depotId,
                    manifestOnly: true
                })
            );
            const matches = output.match(/Manifest\s(\d+)/);
            if (matches !== null) {
                return matches[1];
            }
            return undefined;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    async fetchFiles() {
        try {
            const output = await readProcess(
                depotDownloader({
                    app: CS2_APP,
                    depot: this.depotId,
                    filelist: this.filelistPath
                })
            );
            return Array.from(output.matchAll(/% (.*)/g))
                .map((matches) => matches[1])
                .filter((value) => value !== undefined);
        } catch (error) {
            console.error(error);
            return undefined;
        }
    }

    async validate(): Promise<{ manifestId: string; hasUpdate: boolean }> {
        console.log(`Checking depot ${this.depotId}...`);
        const existingManifestId = (await tryReadFile(this.manifestPath)) ?? "";
        const latestManifestId = await this.fetchLatestManifestId();
        assert(latestManifestId !== undefined, `Failed to get latest manifest for depot ${this.depotId}!`);
        if (existingManifestId === latestManifestId) {
            console.log(`Depot ${this.depotId} is up to date.`);
            return { manifestId: latestManifestId, hasUpdate: false };
        }
        const filelist = (await readFile(this.filelistPath, "utf-8")).split("\n");
        const paths = await this.fetchFiles();
        if (paths?.length !== filelist.length) {
            console.log(filelist, paths);
            fail(`Failed to download depot ${this.depotId}!`);
        }
        for (const path of paths) {
            const filename = basename(path);
            await rename(join(cwd, path), join(workdir, filename));
            await writeFile(this.manifestPath, latestManifestId, "utf-8");
            console.log(`Downloaded ${filename}.`);
        }
        return {
            manifestId: latestManifestId,
            hasUpdate: true
        };
    }
}
