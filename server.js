const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import routes

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' }));  // Enable CORS for React app

// Use routes
app.use(routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
