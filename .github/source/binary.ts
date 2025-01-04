import { join } from "path";
import { workdir } from "./filesystem.js";

export const osLabels: Record<string, string> = {
    linux: "Linux",
    windows: "Windows"
};

export class Binary {
    public path: string;

    constructor(
        public filename: string,
        public library: string,
        public os: string
    ) {
        this.path = join(workdir, filename);
    }
}
