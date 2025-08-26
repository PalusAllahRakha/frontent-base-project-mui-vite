import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ag-grid-react', 'ag-grid-community', 'ag-grid-enterprise']
  },
  server: {
    port: 3000
  }
});
