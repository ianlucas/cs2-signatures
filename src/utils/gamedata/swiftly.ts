/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { parsePattern } from "../parse-pattern";
import { Signature, Source } from "../types";

export function parseSwiftlyGamedata(signatures: Signature[], source: Source, gamedata: string) {
    try {
        const parsed = JSON.parse(gamedata) as {
            [name: string]: {
                lib: string;
                windows?: string;
                linux?: string;
            };
        };
        for (const [name, value] of Object.entries(parsed)) {
            if (value === undefined) {
                continue;
            }
            const signature: Signature = {
                source,
                name,
                library: value.lib,
                platforms: {}
            };
            for (let [osName, pattern] of Object.entries(value).filter(([osName]) => osName !== "lib")) {
                pattern = pattern.trim();
                if (pattern.length === 0) {
                    continue;
                }
                signature.platforms[osName] = {
                    pattern: parsePattern(pattern),
                    found: false
                };
            }
            signatures.push(signature);
        }
    } catch (error) {
        console.error(error);
    }
}
