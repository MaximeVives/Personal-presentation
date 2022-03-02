const sqlite3 = require('sqlite3').verbose();

// Connect with SQLite database


const appDatabase = new sqlite3.Database('./db/projects.db', sqlite3.OPEN_READWRITE, err => {
    if (err) {
        console.error(err.message);
    }
    console.log('Successful connected to the database');
});

// Export database object
module.exports = { appDatabase };