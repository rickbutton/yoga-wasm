import sucrase from "@rollup/plugin-sucrase";
import commonjs from "@rollup/plugin-commonjs";

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
    ],
}
