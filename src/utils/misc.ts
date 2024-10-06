/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ChildProcessWithoutNullStreams } from "child_process";

export function formatDate(date: Date): string {
    return date.toLocaleString("en-US", { timeZone: "GMT", dateStyle: "long", timeStyle: "long" });
}

export function readProcess(ps: ChildProcessWithoutNullStreams) {
    return new Promise<string>((resolve, reject) => {
        let data = "";
        ps.stdout.on("data", (chunk) => (data += chunk));
        ps.stderr.on("data", (chunk) => (data += chunk));
        ps.on("close", (code) => {
            if (code === 0) {
                resolve(data);
            } else {
                reject(data);
            }
        });
    });
}
