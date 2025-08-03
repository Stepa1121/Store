import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  assetsInclude: ['**/*.svg'],
  plugins: [react(),  svgr({
      svgrOptions: {
        // Настройки SVGR (опционально)
      },
    }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      // Добавьте другие алиасы по необходимости
    },
  },
});