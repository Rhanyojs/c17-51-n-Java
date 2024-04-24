/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src/",
      "@pages": "/src/pages/",
      "@components": "/src/components/",
      "@lib": "/src/lib/",
      "@ui": "/src/components/ui",
      "@hooks": "/src/hooks/",
      "@utils": "/src/utils/",
      "@context": "/src/context/",
    },
  },
  server: {
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
