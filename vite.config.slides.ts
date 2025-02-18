import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    root: path.resolve(__dirname, "src/slides"),
    base: "/a11y-formation/slides/",
    build: {
        outDir: '../../dist/slides',
        emptyOutDir: true,
    },
})