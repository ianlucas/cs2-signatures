/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CS2KeyValues } from "@ianlucas/cs2-lib";
import type { Signature, Source } from "../index";
import { parsePattern } from "./parse-pattern";

export function parseSourcemodGamedata(signatures: Signature[], source: Source, gamedata: string) {
    try {
        for (const [name, value] of Object.entries(
            CS2KeyValues.parse<{
                Games: {
                    csgo: {
                        Signatures: {
                            [name: string]: {
                                library: string;
                                windows?: string;
                                linux?: string;
                            };
                        };
                    };
                };
            }>(gamedata).Games.csgo.Signatures
        )) {
            const signature: Signature = {
                source,
                name,
                library: value.library,
                platforms: {}
            };
            for (let [osName, pattern] of Object.entries(value).filter(([osName]) => osName !== "library")) {
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
