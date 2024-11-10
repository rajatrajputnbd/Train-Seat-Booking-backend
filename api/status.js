// // api/status.js
// const express = require('express');
// const db = require('../db'); // Import db connection
// const serverless = require('serverless-http');
// const router = express.Router();

// router.get('/status', (req, res) => {
//     const query = 'SELECT seat_id, seatrow_number, seat_number, is_booked FROM seats';
//     db.query(query, (err, results) => {
//         if (err) {
//             return res.status(500).send('Database query error');
//         } else {
//             res.json(results);
//         }
//     });
// });

// // More routes go here...

// // Exporting the handler function for serverless
// module.exports.handler = serverless(router);





// api/status.js (Don't wrap in serverless-http here)
const express = require('express');
const db = require('../db'); // Import db connection
const router = express.Router();

router.get('/status', (req, res) => {
    const query = 'SELECT seat_id, seatrow_number, seat_number, is_booked FROM seats';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send('Database query error');
        } else {
            res.json(results);
        }
    });
});

// Add more routes as needed

module.exports = router;  // Just export the router here
