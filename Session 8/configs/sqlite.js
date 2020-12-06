const sqlite = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, "data", "product.db");

var db;

exports.connect = () => {
    db = new sqlite.Database(dbPath, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to Sqlite db");
        }
    });
}

exports.getDB = () => {
    return db;
}