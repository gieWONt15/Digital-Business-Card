import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/Digital-Businness-Card/", // Poprawiona nazwa repozytorium
    build: {
        outDir: "dist",
        assetsDir: "assets",
    },
});
