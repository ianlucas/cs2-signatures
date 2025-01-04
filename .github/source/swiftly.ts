import { GitHubSource } from "./github.js";
import { Signature, Subroutine } from "./subroutine.js";

export class Swiftly {
    static parseGamedata(data: string, source: GitHubSource) {
        try {
            const subroutines: Subroutine[] = [];
            for (const [name, value] of Object.entries(
                JSON.parse(data) as {
                    [name: string]:
                        | {
                              lib: string;
                              windows?: string;
                              linux?: string;
                          }
                        | undefined;
                }
            )) {
                if (value === undefined) {
                    continue;
                }
                const subroutine = new Subroutine(name, value.lib, source);
                for (let [os, signature] of Object.entries(value).filter(([os]) => os !== "lib")) {
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
