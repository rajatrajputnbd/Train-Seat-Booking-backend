// const mysql = require('mysql2');

// // Create and export the MySQL connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Jsr@1234',
//     database: 'train_booking'
// });

// db.connect(err => {
//     if (err) throw err;
//     console.log('Connected to MySQL database.');
// });

// module.exports = db;



const mysql = require('mysql2');

// Create and export the MySQL connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

module.exports = db;
