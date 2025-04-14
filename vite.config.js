import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    host: true, // Permite conexões externas
    port: process.env.PORT || 10000, // Usa a porta definida pelo Render
    allowedHosts: ["https://news-explorer-front-final-project.onrender.com"], // Permite esse domínio
  }
});
