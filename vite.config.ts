/// <reference types="vite/client" />

import checker from 'vite-plugin-checker'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({typescript: true})],
})
