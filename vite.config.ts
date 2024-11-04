import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import type { UserConfig } from "vitest/node"
import type { InlineConfig } from 'vitest/node'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    include: ['src/**/*.spec.tsx'],  // Inclui todos os arquivos de teste .spec.tsx
  },
} as UserConfig & {
  test: InlineConfig
})
