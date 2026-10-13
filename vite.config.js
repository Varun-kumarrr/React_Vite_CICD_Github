import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
  plugins: [react()],
  base: "/React_Vite_CICD_Github_Varun/",
  server : {
    open:true,
    port:3001,
  },
});
