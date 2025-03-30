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

let target = 'http://localhost:3001'; // Default to localhost

// Function to check if localhost is available
const checkLocalhostAvailability = async () => {
  try {
    const response = await fetch('http://localhost:3001/health'); // Check health route on localhost
    if (response.ok) {
      return 'http://localhost:3001'; // Local server available
    } else {
      throw new Error('Local server unavailable');
    }
  } catch (error) {
    return 'https://authentication-3yrc.onrender.com'; // Fallback to remote server
  }
};

// Check localhost availability and set the target before exporting Vite config
checkLocalhostAvailability().then((resolvedTarget) => {
  target = resolvedTarget;
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target,
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

