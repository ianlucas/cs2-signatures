/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export async function getLatestCommit(repo: string, file: string) {
    try {
        const url = new URL("https://api.github.com");
        url.pathname = `/repos/${repo}/commits`;
        url.searchParams.append("path", file);
        url.searchParams.append("per_page", "1");
        const response = (await fetch(url).then((response) => response.json())) as {
            sha?: string;
        }[];
        if (response.length > 0) {
            return response[0].sha;
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export async function downloadFromRepo(repo: string, branch: string, file: string) {
    try {
        const url = new URL("https://raw.githubusercontent.com");
        url.pathname = `/${repo}/${branch}/${file}`;
        const response = await fetch(url);
        if (response.ok) {
            return await response.text();
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}
