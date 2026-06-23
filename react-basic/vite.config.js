import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HttpsProxyAgent } from "https-proxy-agent";

const proxy = "http://riehl-bln.ivbb.bund.de:8080";
// modul https-proxy-agent muss über npm installiert werden
const agent = new HttpsProxyAgent(proxy);


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        agent: agent,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
