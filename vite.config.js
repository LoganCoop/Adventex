import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/Adventex/', // Set base for GitHub Pages
  plugins: [vue()],
})
