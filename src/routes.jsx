import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Убедитесь, что `path` установлен (есть в Node.js по умолчанию)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      // Добавьте другие алиасы по необходимости
    },
  },
});