import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    host: true, // Permite conexões externas
    allowedHosts: ["https://news-explorer-front-final-project.onrender.com"], // Permite esse domínio
  }
});
