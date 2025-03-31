// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import cors from 'cors';
// import { sequelize } from './models/index.js'; // Ensure your models are correctly imported
// import routes from './routes/index.js'; // Ensure routes are correctly imported
// import { seedUsers } from './seeds/user-seeds.js'; // Import user seed function
// import { seedTickets } from './seeds/ticket-seeds.js'; // Import ticket seed function

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Set the `forceDatabaseRefresh` flag based on environment variables (careful with force in production)
// const forceDatabaseRefresh = process.env.FORCE_DB_REFRESH === 'true' ? true : false;

// // Detect the environment (production or development)
// const isProduction = process.env.NODE_ENV === 'production';

// // CORS middleware configuration (with dynamic origin based on environment)
// const corsOptions = {
//   origin: isProduction
//     ? 'https://authentication-1-oqwb.onrender.com' // Production URL when app is deployed
//     : ['http://localhost:3000', 'http://localhost:5173'], // Local development URLs
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// };

// app.use(cors(corsOptions)); // Use CORS middleware
// app.use(express.json()); // Parse JSON data in requests

// // Serve static files for client-side assets (ensure path is correct)
// app.use(express.static('client/dist')); // Assuming your 'client' folder is at the root

// // Run the seed functions before starting the server
// const initializeApp = async () => {
//   try {
//     // Conditionally seed users and tickets based on the environment or a specific flag
//     const shouldSeedData = process.env.SEED_DATA === 'true'; // Check for a SEED_DATA environment variable
//     if (shouldSeedData) {
//       await seedUsers(); // Seed the users
//       await seedTickets(); // Seed the tickets (if relevant)
//     }

//     // Sync Sequelize models and start the server (don't force sync in production unless needed)
//     if (isProduction && !forceDatabaseRefresh) {
//       await sequelize.sync();
//     } else {
//       await sequelize.sync({ force: forceDatabaseRefresh });
//     }

//     // Start the Express server
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Error during app initialization:', error);
//   }
// };

// // Redirect client-side routes to the production URL if in production
// if (isProduction) {
//   app.get('*', (_req, res) => {
//     res.sendFile('client/dist/index.html');  // Serve your front-end entry point in production
//   });
// }

// // Use API routes
// app.use(routes);

// // Initialize the application and start the seeding process
// initializeApp();


import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './models/index.js';
import routes from './routes/index.js';
import { seedUsers } from './seeds/user-seeds.js';
import { seedTickets } from './seeds/ticket-seeds.js';

// Setup __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Set the `forceDatabaseRefresh` flag based on environment variables (careful with force in production)
const forceDatabaseRefresh = process.env.FORCE_DB_REFRESH === 'true' ? true : false;

// Detect the environment (production or development)
const isProduction = process.env.NODE_ENV === 'production';

// CORS middleware configuration (with dynamic origin based on environment)
const corsOptions = {
  origin: isProduction
    ? 'https://authentication-1-oqwb.onrender.com' // Production URL when app is deployed
    : ['http://localhost:3000', 'http://localhost:5173'], // Local development URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions)); // Use CORS middleware
app.use(express.json()); // Parse JSON data in requests

// Serve static files for client-side assets (ensure path is correct)
app.use(express.static(path.join(__dirname, 'client/dist')));

// IMPORTANT: Define API routes BEFORE the catch-all route
app.use(routes);

// AFTER routes, add the catch-all for client-side routing in production
if (isProduction) {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
  });
}

// Run the seed functions before starting the server
const initializeApp = async () => {
  try {
    // Conditionally seed users and tickets based on the environment or a specific flag
    const shouldSeedData = process.env.SEED_DATA === 'true'; // Check for a SEED_DATA environment variable
    if (shouldSeedData) {
      await seedUsers(); // Seed the users
      await seedTickets(); // Seed the tickets (if relevant)
    }
    
    // Sync Sequelize models and start the server (don't force sync in production unless needed)
    if (isProduction && !forceDatabaseRefresh) {
      await sequelize.sync();
    } else {
      await sequelize.sync({ force: forceDatabaseRefresh });
    }
    
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error during app initialization:', error);
  }
};

// Initialize the application and start the seeding process
initializeApp();