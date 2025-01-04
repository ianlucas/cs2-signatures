/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { assert, ensure } from "@ianlucas/cs2-lib";
import { writeFile } from "fs/promises";
import { join } from "path";
import { osLabels } from "./binary.js";
import sources from "./config/sources.json" assert { type: "json" };
import { docsdir, rootdir } from "./filesystem.js";
import type { GitHubSource } from "./github.js";
import { formatDate } from "./misc.js";
import type { Subroutine } from "./subroutine.js";

export class Writer {
    static async writeSource(manifestUrls: string[], source: GitHubSource, subroutines: Subroutine[]) {
        let text = `# ${source.id} \n\nLast updated: ${formatDate(new Date())}\n\n`;
        text += `* Manifests: ${manifestUrls.join(", ")}\n`;
        text += `* Repository: https://github.com/${source.repo}\n`;
        text += `* Gamedata: https://github.com/${source.repo}/blob/${source.branch}${source.filepath}\n\n`;
        text += `## Signatures\n\n`;
        for (const { name, library, signatures } of subroutines) {
            text += `### ${name}\n\n`;
            text += `<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>`;
            for (const [os, signature] of Object.entries(signatures)) {
                assert(signature !== undefined);
                text += `<tr><td>${!signature.isSupported ? "❓" : signature.isFound ? "✅" : "❌"}</td><td>${osLabels[os]}</td>`;
                text += `<td>${library}</td>`;
                text += `<td>\n<pre>\n${signature.codeStyle}\n</pre>\n</td>`;
                text += `<td>\n<pre>\n${signature.idaStyle}\n</pre>\n</td>`;
                text += `</tr>`;
            }
            text += `</table>\n\n`;
        }
        await writeFile(join(docsdir, `${source.id}.md`), text, "utf-8");
    }

    static async writeReadme(manifestUrls: string[], subroutines: Subroutine[]) {
        const subroutinesBySource = Object.groupBy(subroutines, (subroutine) => subroutine.source.id);
        let text = `# CS2 Server Signatures Tracker\n\n* **Last updated:** ${formatDate(new Date())}\n* **Manifests:** ${manifestUrls.join(", ")}\n\n`;
        text += `<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr>`;
        const brokenSubroutinesDetails: string[] = [];
        for (const subroutines of sources.map(({ id }) => subroutinesBySource[id])) {
            assert(subroutines !== undefined);
            assert(subroutines.length > 0);
            const { source } = ensure(subroutines[0]);
            await Writer.writeSource(manifestUrls, source, subroutines);
            const foundAll: Record<string, boolean> = { linux: true, windows: true };
            const brokenSubroutines = subroutines.filter((subroutine) => {
                return Object.entries(subroutine.signatures).some(([os, signature]) => {
                    if (signature?.isSupported && !signature.isFound) {
                        foundAll[os] = false;
                        return true;
                    }
                    return false;
                });
            });
            if (brokenSubroutines.length > 0) {
                let details = `<details>\n  <summary>${source.id} broken signatures</summary>\n\n`;
                for (const { signatures, name } of brokenSubroutines) {
                    const win = signatures.windows?.isFound ? "✅" : "❌";
                    const lin = signatures.linux?.isFound ? "✅" : "❌";
                    details += `* <sub>${lin}Linux ${win}Windows</sub> ${name}\n`;
                }
                details += `\n</details>`;
                brokenSubroutinesDetails.push(details);
            }
            text += `<tr><td>${foundAll.linux ? "✅" : "❌"}</td>`;
            text += `<td>${foundAll.windows ? "✅" : "❌"}</td>`;
            text += `<td><a href="https://github.com/${source.repo}">${source.id}</a></td>`;
            text += `<td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/${source.id}.md">View signatures →</a></td></tr>`;
        }
        text += `</table>\n\n`;
        text += brokenSubroutinesDetails.join("\n\n");
        await writeFile(join(rootdir, "README.md"), text, "utf-8");
    }
}
