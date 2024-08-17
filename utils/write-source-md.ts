/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { writeFile } from "fs/promises";
import { join } from "path";
import { cwd } from "./fs";
import { platformLabel, Signature, Source } from "./typings";

export async function writeSourceMd(source: Source, signatures: Signature[]) {
    let readme = `# ${source.id} \n\nLast updated: ${new Date().toISOString()}\n\n`;
    readme += `## Signatures\n\n`;
    readme += `Repository: https://github.com/${signatures[0].source.repo}\n\n`;
    for (const { name, library, platforms } of signatures) {
        readme += `### ${name}\n\n`;
        readme += `<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr>`;
        for (const [osName, { found, pattern }] of Object.entries(platforms)) {
            readme += `<tr><td>${library !== "server" ? "❓" : found ? "✅" : "❌"}</td><td>${platformLabel[osName]}</td>`;
            readme += `<td>${library}</td>`;
            readme += `<td>\n<pre>\n${pattern.original !== pattern.idaStyle ? pattern.original : "N/A"}\n</pre>\n</td>`;
            readme += `<td>\n<pre>\n${pattern.idaStyle}\n</pre>\n</td>`;
            readme += `</tr>`;
        }
        readme += `</table>\n\n`;
    }
    await writeFile(join(cwd, `docs/${source.id}.md`), readme, "utf-8");
}
