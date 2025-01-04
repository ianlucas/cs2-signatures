import { GitHubSource } from "./github.js";
import { Signature, Subroutine } from "./subroutine.js";

export class CounterStrikeSharp {
    static parseGamedata(data: string, source: GitHubSource) {
        try {
            const subroutines: Subroutine[] = [];
            for (const [name, value] of Object.entries(
                JSON.parse(data) as {
                    [name: string]: { signatures?: { library: string; windows?: string; linux?: string } };
                }
            )) {
                if (value.signatures === undefined) {
                    continue;
                }
                const subroutine = new Subroutine(name, value.signatures.library, source);
                for (let [os, signature] of Object.entries(value.signatures).filter(([os]) => os !== "library")) {
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
