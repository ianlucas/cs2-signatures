/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export function findByteSequence(buffer: Buffer, sequence: Buffer, mask: Buffer): boolean {
    for (let i = 0; i <= buffer.length - sequence.length; i++) {
        let match = true;
        for (let j = 0; j < sequence.length; j++) {
            if ((buffer[i + j] & mask[j]) !== (sequence[j] & mask[j])) {
                match = false;
                break;
            }
        }
        if (match) {
            return true;
        }
    }
    return false;
}
