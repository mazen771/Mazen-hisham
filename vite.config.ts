import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use repo subpath only for production builds (GitHub Pages).
  // Dev and Lovable preview keep serving from root.
  base: mode === "production" ? "/Mazen-hisham/" : "/",
=======

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Mazen-hisham/",
>>>>>>> c1d0dc62f4891357352b7c02ddd78af8f6191c9c
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
<<<<<<< HEAD
    mode === 'development' &&
    componentTagger(),
=======
>>>>>>> c1d0dc62f4891357352b7c02ddd78af8f6191c9c
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
