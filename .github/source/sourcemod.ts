import { CS2KeyValues } from "@ianlucas/cs2-lib";
import { GitHubSource } from "./github.js";
import { Signature, Subroutine } from "./subroutine.js";

export class SourceMod {
    static parseGamedata(data: string, source: GitHubSource) {
        try {
            const subroutines: Subroutine[] = [];
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
                }>(data).Games.csgo.Signatures
            )) {
                const subroutine = new Subroutine(name, value.library, source);
                for (let [os, signature] of Object.entries(value).filter(([os]) => os !== "library")) {
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
