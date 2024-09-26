import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@Components': '/src/ComponentsPage',
      '@Productos': '/public/Productos',
      '@Layouts': '/src/Layouts',
      '@Icons': '/src/Icons',
      '@lib': '/src/lib',
      '@store': '/src/store',
    },
  },
   server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',  // Asegúrate de que los archivos de salida estén en 'dist'
  },
});