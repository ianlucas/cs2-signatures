/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as JSONC from "jsonc-parser";
import { GitHubSource } from "./github.js";
import { Signature, Subroutine } from "./subroutine.js";

const PLUGIFY_OS_MAP: Record<string, string> = {
    win64: "windows",
    linuxsteamrt64: "linux"
};

export class Plugify {
    static parseGamedata(data: string, source: GitHubSource) {
        try {
            const subroutines: Subroutine[] = [];
            for (const [name, value] of Object.entries(
                (
                    JSONC.parse(data) as {
                        csgo: {
                            Signatures: {
                                [name: string]: { library: string; win64?: string; linuxsteamrt64?: string };
                            };
                        };
                    }
                ).csgo.Signatures
            )) {
                const subroutine = new Subroutine(name, value.library, source);
                for (let [os, signature] of Object.entries(value).filter(([os]) => os !== "library")) {
                    os = PLUGIFY_OS_MAP[os] ?? os;
                    signature = signature.trim();
                    if (signature.length === 0) {
                        continue;
                    }
                    subroutine.signatures[os] = new Signature(signature, os);
                }
                subroutines.push(subroutine);
            }
            return subroutines;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}
