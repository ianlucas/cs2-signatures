/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Ian Lucas. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { join } from "path";
import { workdir } from "./fs";

export const binPaths = {
    linux: {
        server: join(workdir, "libserver.so"),
        engine2: join(workdir, "libengine2.so")
    },
    windows: {
        server: join(workdir, "server.dll"),
        engine2: join(workdir, "engine2.dll")
    }
} as const;

export const supportedBinaries = Object.keys(binPaths.linux);
