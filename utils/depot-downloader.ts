/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { depotDownloader } from "@ianlucas/depot-downloader";

const APP = 730;

export async function getLatestManifest(depot: number) {
    try {
        const output = await depotDownloader({
            app: APP,
            depot,
            manifestOnly: true
        });
        const matches = output.match(/Manifest\s(\d+)/);
        if (matches !== null) {
            return matches[1];
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}

export async function downloadFromDepot(depot: number, filelist: string) {
    try {
        const output = await depotDownloader({
            app: APP,
            depot,
            filelist
        });
        const matches = output.match(/100(\.|,)00% (.*)/);
        if (matches !== null) {
            return matches[2];
        }
        return undefined;
    } catch (error) {
        console.error(error);
    }
    return undefined;
}
