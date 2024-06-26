import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // This alias is used to resolve the path to the phantoms.json file.
      // This is necessary because the file is not located in the same directory
      // as the module that imports it.
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
});
