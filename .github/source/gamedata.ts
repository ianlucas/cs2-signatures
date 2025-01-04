import { CounterStrikeSharp } from "./counterstrikesharp.js";
import { GitHubSource } from "./github.js";
import { SourceMod } from "./sourcemod.js";
import { Swiftly } from "./swiftly.js";

export class Gamedata {
    static async parseFrom(source: GitHubSource) {
        const data = await source.readGamedata();
        if (data === undefined) {
            return [];
        }
        switch (source.framework) {
            case "counterstrikesharp":
                return CounterStrikeSharp.parseGamedata(data, source);

            case "sourcemod":
                return SourceMod.parseGamedata(data, source);

            case "swiftly":
                return Swiftly.parseGamedata(data, source);
        }
        throw new Error(`Unknown framework ${source.framework}`);
    }
}
