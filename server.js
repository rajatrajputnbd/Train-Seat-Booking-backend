// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const bodyParser = require('body-parser');
// const serverless = require('serverless-http');
// const routes = require('./routes'); // Import routes
// // const routes = require('./api/status'); // Import API routes from /api/status

// const app = express();

// // Middleware setup
// app.use(bodyParser.json());
// app.use(cors({ origin: 'http://localhost:3001' }));  // Enable CORS for React app

// // Use routes
// // app.use(routes);
// app.use('/api', routes); // Prefix routes with '/api' for cleaner paths

// // Start the server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });

// // Export the app wrapped in a serverless handler
// module.exports.handler = serverless(app);





// const express = require('express');
// const app = express();
// const port = 3000;

// // Route for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });





const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Simple route to test
app.get('/', (req, res) => {
    res.send('Hello, World!!');
});

// Wrap the Express app with serverless-http and export as a handler
module.exports.handler = serverless(app);
