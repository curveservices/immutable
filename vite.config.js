import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import purgecss from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase', // makes sure the classes are camelCase, like priceCard
    },
  },
  plugins: [
    react(),
    purgecss({
  content: ['./index.html', './src/**/*.{jsx,js,tsx,ts}', './public/**/*.html',],
      safelist: {
        standard: [
          /^leaflet-/,  
          'leaflet-container', 
          'leaflet-tile', 
          'leaflet-marker-icon', 
          'toast', 
          'toast-container', 
          'toast-success', 
          'toast-error', 
          'fade-in', 
          'fade-out',
          /^toast-.*$/,
          'ReactToastify__toast', 
          'ReactToastify__toast-container', 
          'ReactToastify__toast-body', 
          'ReactToastify__progress-bar',
          'load-spinner'
        ],
      }
    }),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      filter: /\.(js|mjs|json|css|html|svg|ico|png|jpg|webp|woff|woff2)$/,
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024,
      filter: /\.(js|mjs|json|css|html|svg|ico|png|jpg|webp|woff|woff2)$/,
    }),
  ],
  build: {
    minify: 'esbuild',
    modulePreload: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        assetFileNames: '[name].[hash][extname]',
        chunkFileNames: '[name].[hash].js',
        entryFileNames: '[name].[hash].js',
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  define: { "process.env": process.env },
});
