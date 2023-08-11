import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            components: `${path.resolve(__dirname, "./src/components/")}`,
            features: `${path.resolve(__dirname, "./src/features/")}`,
            pages: `${path.resolve(__dirname, "./src/pages/")}`,
            app: `${path.resolve(__dirname, "./src/app/")}`,
        },
    },
});
