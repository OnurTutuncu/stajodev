import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React eklentisini buraya ekleyin
  ],
  optimizeDeps: {
    include: ["*.html"], // HTML dosyalarını dahil et
  },
  server: {
    // Sunucu yapılandırması
    proxy: {
      "/static": {
        target: "http://localhost:3000", // React uygulamanızın çalıştığı yerel sunucunun adresini buraya ekleyin
      },
    },
  },
});
