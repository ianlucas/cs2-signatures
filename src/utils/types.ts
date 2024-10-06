/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface Source {
    id: string;
    repo: string;
    type: string;
    branch: string;
    file: string;
}

export interface Pattern {
    mask: Buffer;
    codeStyle: string;
    idaStyle: string;
    sequence: Buffer;
}

export interface Signature {
    source: Source;
    name: string;
    library: string;
    platforms: {
        [name: string]: { pattern: Pattern; found: boolean };
    };
}

export const platformLabel: Record<string, string> = {
    linux: "Linux",
    windows: "Windows"
};
