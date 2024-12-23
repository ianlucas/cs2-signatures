/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { writeFile } from "fs/promises";
import { join } from "path";
import { supportedBinaries } from "./binaries";
import { root } from "./fs";
import { formatDate } from "./misc";
import { platformLabel, Signature, Source } from "./types";

export async function writeSourceMd(manifests: string[], source: Source, signatures: Signature[]) {
    let readme = `# ${source.id} \n\nLast updated: ${formatDate(new Date())}\n\n`;
    readme += `* Manifests: ${manifests.join(", ")}\n`;
    readme += `* Repository: https://github.com/${source.repo}\n`;
    readme += `* Gamedata: https://github.com/${source.repo}/blob/${source.branch}${source.file}\n\n`;
    readme += `## Signatures\n\n`;
    for (const { name, library, platforms } of signatures) {
        readme += `### ${name}\n\n`;
        readme += `<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>`;
        for (const [osName, { found, pattern }] of Object.entries(platforms)) {
            readme += `<tr><td>${!supportedBinaries.includes(library) ? "❓" : found ? "✅" : "❌"}</td><td>${platformLabel[osName]}</td>`;
            readme += `<td>${library}</td>`;
            readme += `<td>\n<pre>\n${pattern.codeStyle}\n</pre>\n</td>`;
            readme += `<td>\n<pre>\n${pattern.idaStyle}\n</pre>\n</td>`;
            readme += `</tr>`;
        }
        readme += `</table>\n\n`;
    }
    await writeFile(join(root, `docs/${source.id}.md`), readme, "utf-8");
}
