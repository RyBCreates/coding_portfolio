import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/coding_portfolio",
  plugins: [react()],
  server: {
    port: 1118,
    open: true,
  },
});
