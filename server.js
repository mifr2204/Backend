/**
 * Kurslista
 * Av Mikaela Frendin
 */

const express = require('express');
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

//Anslutning till databasen
const db = new sqlite3.Database("./db/courses.db");

//inställningar för databasen
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Routing
app.get('/', (req, res) => {
  //const coursers = ["jaws", "dfsf"];
  res.render('index', {
    error: ""
  });
});

//skapa ny kurs
app.post("/", (req, res) => {
  let name = req.body.name;
  let code = req.body.code;
  let progression = req.body.progression;
  let syllabus = req.body.syllabus;
  let error = "";

  //Kontroll

  if(name != "" && code != "" && progression != "" && syllabus != "") {
    
  }else{
    error = "Alla fält måste fyllas i";
  }

  res.render("index", {
    error: error
  });

});

//Start av applikationen
app.listen(port, () => {
  console.log("Started on port: " + port);
})

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



/*
const port = 3000;




app.get('/', (req, res) => {
  //const coursers = ["jaws", "dfsf"];
  res.render('index', {
    coursers : coursers,
    title : "Startsida"
  });
});
//res.render('index', { 
 // coursers : coursers });


app.get('/about', (req, res) => {
  const movies = ["jaws", "dfsf"];
  
  res.render('about', { 
    movies : movies });
});


*/

