import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Replace with your actual backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
}));
