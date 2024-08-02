import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "Recyclr",
        short_name: "recyclr",
        description: "Let’s save the world TOGETHER.",
        start_url: "/",
        theme_color: "#ffffff",
      },
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
      },
    }),
  ],
});
