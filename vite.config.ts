import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import lightningcss from 'vite-plugin-lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-app/',
  plugins: [
    // react
    react(),
    // lightningcss
    // lightningcss({
    //   browserslist: '>= 0.25%',
    // })
  ],
})
