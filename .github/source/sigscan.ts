import { ensure } from "@ianlucas/cs2-lib";
import { createReadStream } from "fs";
import type { Binary } from "./binary.js";
import type { Subroutine } from "./subroutine.js";

export class Sigscan {
    static matchesAtPosition(buffer: Buffer, start: number, signature: number[]): boolean {
        for (let i = 0; i < signature.length; i++) {
            const sigByte = signature[i];
            const fileByte = buffer[start + i];

            // Wildcards: 0x2A or 0x00 match anything
            if (sigByte !== 0x2a && sigByte !== 0x00 && sigByte !== fileByte) {
                return false;
            }
        }
        return true;
    }

    static async findSignatures(binary: Binary, subroutines: Subroutine[], chunkSize = 64 * 1024): Promise<boolean[]> {
        // Keep track of whether each signature was found
        const foundSignatures = Array(subroutines.length).fill(false);

        // Pre-calculate the maximum signature length (used for leftover)
        const maxSigLen = Math.max(...subroutines.map((sub) => ensure(sub.signatures[binary.os]).value.length));

        let leftover = Buffer.alloc(0);

        return new Promise((resolve, reject) => {
            const readStream = createReadStream(binary.path, { highWaterMark: chunkSize });

            readStream.on("error", (err) => reject(err));

            readStream.on("data", (chunk: Buffer) => {
                // Combine leftover + current chunk for searching
                const combined = Buffer.concat([leftover, chunk]);

                // Search for each signature
                for (let sIdx = 0; sIdx < subroutines.length; sIdx++) {
                    // If already found, skip
                    if (foundSignatures[sIdx]) continue;

                    const signature = ensure(subroutines[sIdx]?.signatures[binary.os]);
                    signature.isSupported = true;
                    const sigLen = signature.value.length;

                    // We'll scan up to combined.length - sigLen
                    for (let i = 0; i <= combined.length - sigLen; i++) {
                        if (Sigscan.matchesAtPosition(combined, i, signature.value)) {
                            foundSignatures[sIdx] = true;
                            signature.isFound = true;
                            break;
                        }
                    }
                }

                // If all signatures are found, we can stop reading (early optimization)
                if (foundSignatures.every(Boolean)) {
                    readStream.close();
                    return;
                }

                // Save the tail for leftover: up to (maxSigLen - 1) bytes
                if (combined.length >= maxSigLen - 1) {
                    leftover = combined.slice(combined.length - (maxSigLen - 1));
                } else {
                    leftover = combined;
                }
            });

            readStream.on("close", () => {
                // End of file reached or stream closed
                resolve(foundSignatures);
            });
        });
    }
}
