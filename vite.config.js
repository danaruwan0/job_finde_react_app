import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // <- මෙන්න මෙය දැමිය යුතුය
    port: 5175         // <- port එක දීලා තියෙන්න ඕන
  }
})
