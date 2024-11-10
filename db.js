const mysql = require('mysql2');

// Create and export the MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jsr@1234',
    database: 'train_booking'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});

module.exports = db;
