import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    root: path.resolve(__dirname, "src"),
    base: "/a11y-formation/",
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
        }
    },
})