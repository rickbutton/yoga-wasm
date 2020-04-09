import sucrase from "@rollup/plugin-sucrase";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";

export default {
    input: "src/index.js",
    output: [
        {
            file: "build/index.cjs.js",
            format: "cjs",
        },
        {
            file: "build/index.esm.js",
            format: "esm"
        },
    ],
    plugins: [
        sucrase({
            transforms: ["flow"],
        }),
        commonjs(),
        copy({
            targets:[
                { src: "src/index.d.ts", dest: "build/", rename: "index.cjs.d.ts" },
                { src: "src/index.d.ts", dest: "build/", rename: "index.esm.d.ts" },
            ],
        }),
    ],
}
