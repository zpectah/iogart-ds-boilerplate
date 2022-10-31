import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        outDir: '../.preview/',
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: '[local]__[hash:base64:5]',
        },
    },
    plugins: [react()],
})