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

// Set the target URL based on environment variable or fallback to Render URL
const target = 'https://authentication-1-oqwb.onrender.com' // Default to render URL if not set

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy for /api requests
      '/api': {
        target, // Use the dynamic target (local or remote)
        changeOrigin: true,
        secure: false,
      },
      // Proxy for /auth requests
      '/auth': {
        target, // Use the dynamic target (local or remote)
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
