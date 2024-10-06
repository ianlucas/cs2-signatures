/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { Pattern } from "./types";

export function parsePattern(pattern: string): Pattern {
    let codeStyle = pattern;
    pattern = pattern.trim();
    if (pattern.startsWith("x")) {
        codeStyle = codeStyle.replace(/x/g, "\\x");
        pattern = pattern.replace(/x/g, " ").replace(/2A/g, "?").trim();
    }
    const parts = pattern.split(" ");
    const sequence: number[] = [];
    const mask: number[] = [];
    for (const part of parts) {
        if (part === "?") {
            sequence.push(0x00);
            mask.push(0x00);
        } else {
            const byte = parseInt(part, 16);
            sequence.push(byte);
            mask.push(0xff);
        }
    }
    return {
        mask: Buffer.from(mask),
        codeStyle,
        idaStyle: pattern,
        sequence: Buffer.from(sequence)
    };
}
