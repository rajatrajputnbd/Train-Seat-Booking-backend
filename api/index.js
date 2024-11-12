const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Simple route to test
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Wrap the Express app with serverless-http and export as a handler
module.exports.handler = serverless(app);