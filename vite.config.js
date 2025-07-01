import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["09b8-103-120-51-102.ngrok-free.app"],
    mimeTypes: {
      woff2: "font/woff2",
    },
  },
});
