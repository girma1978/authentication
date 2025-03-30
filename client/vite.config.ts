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

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://authentication-1-oqwb.onrender.com' 
          : 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://authentication-1-oqwb.onrender.com' 
          : 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

