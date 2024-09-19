//Anslutning för Sqlite

const sqlite3 = require("sqlite3").verbose();
//Skapa databas
const db = new sqlite3.Database("./db/courses.db");
//kör flera kommandon i ordning
db.serialize(() => {
    db.run(
        "DROP TABLE IF EXISTS coursers"
    );
    //Skapar tabell
    db.run(
        `CREATE TABLE IF NOT EXISTS coursers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            code TEXT NOT NULL,
            progression TEXT NOT NULL,
            syllabus TEXT NOT NULL,
            created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
        );`
    );
});
db.close();


/*
db.run(
    `CREATE TABLE IF NOT EXISTS coursers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        code TEXT NOT NULL,
        progression TEXT NOT NULL,
        syllabus TEXT NOT NULL,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
    );`
);

db.close();
*/
