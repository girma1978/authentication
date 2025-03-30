// const forceDatabaseRefresh = false;

// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import routes from './routes/index.js';
// import { sequelize } from './models/index.js';

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Serves static files in the entire client's dist folder
// app.use(express.static('../client/dist'));

// app.use(express.json());
// app.use(routes);

// sequelize.sync({force: forceDatabaseRefresh}).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });


import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 3001;

// Set the `forceDatabaseRefresh` flag (set this according to your needs)
const forceDatabaseRefresh = process.env.FORCE_DB_REFRESH === 'true' ? true : false; // Example of setting based on environment variable

// Middleware
import cors from 'cors';
app.use(cors());
app.use(express.json());

// Static file serving for client-side assets (for production)
app.use(express.static('../client/dist'));

// API Routes
app.use(routes);

// Sequelize sync with the database
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error syncing the database:", err);
});
