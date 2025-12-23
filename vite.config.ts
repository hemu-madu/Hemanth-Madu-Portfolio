import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/Hemanth-Madu-Portfolio/",   // ⭐ VERY IMPORTANT
  root: path.resolve(__dirname, "client"),

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: path.resolve(__dirname, "docs"), // ⭐ GitHub Pages folder
    emptyOutDir: true,
  },
});
