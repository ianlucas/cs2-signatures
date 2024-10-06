/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { access } from "fs/promises";
import { resolve } from "path";

export const cwd = process.cwd();
export const root = resolve(cwd, "..");

export async function exists(path: string) {
    try {
        await access(path);
        return true;
    } catch {
        return false;
    }
}
