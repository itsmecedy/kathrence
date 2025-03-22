import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Fixes relative path issues
  plugins: [react()],
});
