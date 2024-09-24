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

//prepared statements som ökar säkerheten
const stmt = db.prepare('INSERT INTO coursers(name, code, progression, syllabus) VALUES(?,?,?,?);');

stmt.run("Webbutveckling I", "DT057G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT057G/");
stmt.run("Introduktion till programmering i JavaScript", "DT084G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT084G/");
stmt.run("Grafisk teknik för webb", "DT200G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT200G/");
stmt.run("Webbanvändbarhet", "DT068G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT068G/");
stmt.run("Databaser", "DT003G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT003G/");
stmt.run("Frontend-baserad webbutveckling", "DT211G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT211G/");
stmt.run("Backend-baserad webbutveckling", "DT207G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/");
stmt.run("Programmering i TypeScript", "DT208G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT208G/");
stmt.run("Projektledning", "IK060G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/IK060G/");
stmt.run("Programmering i C#.NET", "DT071G", "A", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT071G/");
stmt.run("Fullstack-utveckling med ramverk", "DT193G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT193G/");
stmt.run("Webbutveckling för WordPress", "DT209G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT209G/");
stmt.run("Webbutveckling med .NET", "DT191G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT191G/");
stmt.run("Fördjupad frontend-utveckling", "DT210G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT210G/");
stmt.run("Självständigt arbete", "DT140G", "B", "https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT140G/");
stmt.finalize();

db.close();
