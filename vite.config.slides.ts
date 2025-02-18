import path from "path"
import { defineConfig } from "vite"

// import { defineConfig, Plugin } from "vite"
// import {NormalizedOutputOptions, OutputBundle} from "rollup"
//
// const renameIndexPlugin = (newFilename: string): Plugin | undefined => {
//     if (!newFilename) return
//
//     return {
//         name: "renameIndex",
//         enforce: "post",
//         generateBundle: (_: NormalizedOutputOptions, bundle: OutputBundle) => {
//             const indexHtml = bundle["index.html"]
//             indexHtml.fileName = newFilename
//         },
//     }
// }

export default defineConfig({
    root: path.resolve(__dirname, "src/slides"),
    base: "/slides/",
    build: {
        outDir: "../../dist/slides",
        emptyOutDir: true,
    },
    // plugins: [
    //     renameIndexPlugin("slides.html")
    // ]
})