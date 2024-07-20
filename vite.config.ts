import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: '../dist'
    },
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        }
    },
})