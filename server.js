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

//Routing index
app.get('/', (req, res) => {
  //lista kurser
  db.all("SELECT * FROM coursers;", (err, rows) => {
    if(err) {
      console.error(err.message);
    }

    res.render("index", {
      error: "",
      rows: rows
    });

  });
});

//Routing add
app.get('/add', (req, res) => {

  res.render("add", {
    error: "",
    message: "",
  });

});

//Routing about
app.get('/about', (req, res) => {

  res.render("about", {
    error: "",
  });

});

//Routing edit
app.get('/edit', (req, res) => {

  res.render("edit", {
    error: "",
  });

});

//skapa ny kurs
app.post("/add", (req, res) => {
  let name = req.body.name;
  let code = req.body.code;
  let progression = req.body.progression;
  let syllabus = req.body.syllabus;
  let error = "";
  let message = "";

  //Kontroll av input ny kurs
  if(name != "" && code != "" && progression != "" && syllabus != "") {
    const stmt = db.prepare('INSERT INTO coursers(name, code, progression, syllabus) VALUES(?,?,?,?);');
    stmt.run(name, code, progression, syllabus);
    stmt.finalize();
    message = "Kursen är tillagd";
    res.render("add", {
      message: message,
      error: "",
    });
  }else{
    error = "Alla fält måste fyllas i!";
  }
  
  res.render("add", {
    error: error,
    message: "",
  });

});

//Ta bort kurs
app.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  //ta bort kurs från databasen
  db.run("DELETE FROM coursers WHERE ID=?;", id, (err) => {
    if(err) {
      console.error(err.message);
    }

    //skicka till startsidan
    res.redirect("/");
  });

});

//Ändra kurs
app.get("/edit/:id", (req, res)  => {
  let id = req.params.id;

  //Hämta kurs i databasen
  db.get("SELECT * FROM coursers WHERE ID=?;", id, (err, row) => {
    if(err) {
      console.error(err.message);
    }
    //visa edit sidan
    res.render("edit", {
      row: row,
      error: ""
    });
  });
});

app.post("/edit/:id", (req, res)  => {
  let id = req.params.id;
  let name = req.body.name;
  let code = req.body.code;
  let progression = req.body.progression;
  let syllabus = req.body.syllabus;
  let error = "";

  if(name != "" && code != "" && progression != "" && syllabus != "") {
    const stmt = db.prepare('UPDATE coursers SET name=?, code=?, progression=?, syllabus=? WHERE id=?');
    stmt.run(name, code, progression, syllabus, id);
    stmt.finalize();
    res.redirect("/");
  }else{
    error = "Alla fält måste vara ifyllda, försök igen";
  }
  
//Hämta kurs i databasen
db.get("SELECT * FROM coursers WHERE ID=?;", id, (err, row) => {
  if(err) {
    console.error(err.message);
  }
  //visa edit sidan
  res.render("edit", {
    row: row,
    error: error
  });
});
    
});
//Start av applikationen
app.listen(port, () => {
  console.log("Started on port: " + port);
})





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

