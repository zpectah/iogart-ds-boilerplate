import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    outDir: '../../dist/components/',
    lib: {
      name: '@iogart-ds-boilerplate/components',
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
  plugins: [
    react(),
    dts(),
    /**
     * This plugin automatically handles "injecting" <style> to view with component
     * more: https://www.npmjs.com/package/vite-plugin-css-injected-by-js
     */
    cssInjectedByJsPlugin({ styleId: '@iogart-ds-boilerplate/components' }),
  ],
});
