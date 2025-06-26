import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Digital-Business-Card/", // Poprawiona nazwa repozytorium
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
});
