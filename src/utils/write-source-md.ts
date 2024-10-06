/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { writeFile } from "fs/promises";
import { join } from "path";
import { root } from "./fs";
import { formatDate } from "./misc";
import { platformLabel, Signature, Source } from "./types";

export async function writeSourceMd(source: Source, signatures: Signature[]) {
    let readme = `# ${source.id} \n\nLast updated: ${formatDate(new Date())}\n\n`;
    readme += `* Repository: https://github.com/${source.repo}\n`;
    readme += `* Gamedata: https://github.com/${source.repo}/blob/${source.branch}${source.file}\n\n`;
    readme += `## Signatures\n\n`;
    for (const { name, library, platforms } of signatures) {
        readme += `### ${name}\n\n`;
        readme += `<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr>`;
        for (const [osName, { found, pattern }] of Object.entries(platforms)) {
            readme += `<tr><td>${library !== "server" ? "❓" : found ? "✅" : "❌"}</td><td>${platformLabel[osName]}</td>`;
            readme += `<td>${library}</td>`;
            readme += `<td>\n<pre>\n${pattern.codeStyle !== pattern.idaStyle ? pattern.codeStyle : "N/A"}\n</pre>\n</td>`;
            readme += `<td>\n<pre>\n${pattern.idaStyle}\n</pre>\n</td>`;
            readme += `</tr>`;
        }
        readme += `</table>\n\n`;
    }
    await writeFile(join(root, `docs/${source.id}.md`), readme, "utf-8");
}
