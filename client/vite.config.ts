// import { defineConfig } from 'vite';

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     port: 3000,
//     open: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         secure: false,
//       },
//       '/auth': {
//         target: 'http://localhost:3001',
//         changeOrigin: true,
//         secure: false
//       },
//     },
//   },
// });
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'https://authentication-1-oqwb.onrender.com', // Render URL
        changeOrigin: true,
        secure: true, // Use true for HTTPS
      },
      '/auth': {
        target: process.env.VITE_API_URL || 'https://authentication-1-oqwb.onrender.com', // Render URL
        changeOrigin: true,
        secure: true, // Use true for HTTPS
      },
    },
  },
});