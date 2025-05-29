import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0, // Prevent inlining small assets
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure entry points are defined
      },
      preserveEntrySignatures: 'strict', // Preserve unused assets
    },
  },
});
