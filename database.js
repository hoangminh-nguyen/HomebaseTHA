var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "test.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) { 
        console.log(err.message)
        return 
    }
    console.log('Connected to the SQLite database.')

    // Drop table if exists
    var sql = `DROP TABLE IF EXISTS users`;
    db.run(sql, (err) => {
        if (!err) { 
            // table exist
            console.log("DROP TABLE users...")

            // Create table and insert data
            sql = `CREATE TABLE users (
                id      INTEGER PRIMARY KEY AUTOINCREMENT,
                name    text, 
                age     integer
            )`
            
            db.run(sql, (err) => {
                if (err) { 
                    // table exist
                    console.log("Table exists.")
                }
                else {
                    // create and inseart data
                    console.log("Create Table users...")
                    var insert = 'INSERT INTO users (name, age) VALUES (?,?)'
                    db.run(insert, ["Tom", 20])
                    db.run(insert, ["Jerry", 15])
                    db.run(insert, ["Mickey", 34])
                    db.run(insert, ["Donald", 52])
                    
                    console.log("Data inserted to Table users...")
                }
            });
        }
    });
    
});


module.exports = db