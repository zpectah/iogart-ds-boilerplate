import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-dts';

export default defineConfig({
  build: {
    outDir: '../../dist/utils/',
    lib: {
      name: '@iogart-ds-boilerplate/utils',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        sourcemapExcludeSources: true,
      },
    },
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [react(), dts()],
});
