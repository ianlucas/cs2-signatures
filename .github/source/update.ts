/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ensure } from "@ianlucas/cs2-lib";
import { mkdir, readdir } from "fs/promises";
import { Binary } from "./binary.js";
import binaries from "./config/binaries.json" assert { type: "json" };
import sources from "./config/sources.json" assert { type: "json" };
import { Depot } from "./depot.js";
import { configdir, docsdir, exists, workdir } from "./filesystem.js";
import { Gamedata } from "./gamedata.js";
import { GitHubSource } from "./github.js";
import { Sigscan } from "./sigscan.js";
import { Subroutine } from "./subroutine.js";
import { Writer } from "./writer.js";

const manifestUrls: string[] = [];
const changes: string[] = [];
const subroutines: Subroutine[] = [];

if (!(await exists(workdir))) {
    await mkdir(workdir);
}

if (!(await exists(docsdir))) {
    await mkdir(docsdir);
}

for await (const filename of await readdir(configdir)) {
    if (filename.endsWith(".depot")) {
        const depot = new Depot(parseInt(ensure(filename.split(".")[0])));
        const { manifestId, hasUpdate } = await depot.validate();
        if (hasUpdate) {
            changes.push(`depot(${depot.depotId})`);
        }
        manifestUrls.push(
            `[${manifestId}](https://steamdb.info/depot/${depot.depotId}/history/?changeid=M:${manifestId})`
        );
    }
}

for await (const data of sources) {
    const source = new GitHubSource(data);
    const { hasUpdate } = await source.validate();
    if (hasUpdate) {
        changes.push(`repo(${source.repo})`);
    }
    for (const subroutine of ensure(await Gamedata.parseFrom(source))) {
        subroutines.push(subroutine);
    }
}

if (changes.length === 0) {
    console.log("No changes detected, skipping signature search.");
    process.exit(0);
}

await Promise.all(
    binaries.map(async ({ filename, library, os }) => {
        const signatures = await Sigscan.findSignatures(
            new Binary(filename, library, os),
            subroutines.filter(
                (subroutine) => subroutine.library === library && subroutine.signatures[os] !== undefined
            )
        );
        const found = signatures.filter((isFound) => isFound).length;
        console.log(`Found ${found} of ${signatures.length} signatures in ${filename}.`);
    })
);

await Writer.writeReadme(manifestUrls, subroutines);

console.log(changes.join(", "));
