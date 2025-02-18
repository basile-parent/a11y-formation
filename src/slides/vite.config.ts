import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

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
    root: __dirname,
    base: "/slides/",
    build: {
        outDir: "../../dist/slides",
        emptyOutDir: true,
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: "js/*",
                    dest: 'js',
                },
                {
                    src: "img/*",
                    dest: 'img',
                },
            ],
        }),
    ]
    // plugins: [
    //     renameIndexPlugin("slides.html")
    // ]
})