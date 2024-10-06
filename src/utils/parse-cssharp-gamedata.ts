/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { parsePattern } from "./parse-pattern";
import { Signature, Source } from "./types";

export function parseCSSharpGamedata(signatures: Signature[], source: Source, gamedata: string) {
    try {
        const parsed = JSON.parse(gamedata) as {
            [name: string]: {
                signatures?: {
                    library: string;
                    windows?: string;
                    linux?: string;
                };
            };
        };
        for (const [name, value] of Object.entries(parsed)) {
            if (value.signatures === undefined) {
                continue;
            }
            const signature: Signature = {
                source,
                name,
                library: value.signatures.library,
                platforms: {}
            };
            for (let [osName, pattern] of Object.entries(value.signatures).filter(([osName]) => osName !== "library")) {
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
