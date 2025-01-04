import { GitHubSource } from "./github.js";

export class Subroutine {
    constructor(
        public name: string,
        public library: string,
        public source: GitHubSource
    ) {}

    signatures: Record<string, Signature | undefined> = {};
}

export class Signature {
    value: number[] = [];
    idaStyle: string;
    codeStyle: string;
    isFound = false;
    isSupported = false;

    constructor(
        value: string,
        public os: string
    ) {
        value = value.trim();
        let codeStyle = value;
        if (value.startsWith("x")) {
            codeStyle = codeStyle.replace(/x/g, "\\x");
            value = value.replace(/x/g, " ").replace(/2A/g, "?").trim();
        } else {
            codeStyle = this.toCodeStyle(value);
        }
        const bytes = value.split(" ");
        for (const byte of bytes) {
            this.value.push(byte === "?" ? 0x00 : parseInt(byte, 16));
        }
        this.idaStyle = value;
        this.codeStyle = codeStyle;
    }

    private toCodeStyle(value: string) {
        return value
            .split(" ")
            .map((byte) => (byte === "?" ? "\\x2A" : `\\x${byte}`))
            .join("");
    }
}
