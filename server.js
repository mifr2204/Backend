const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', { name: "Mikaela" });
});

app.listen(port, () => {
  console.log("server started on port: " + port);
})

/*
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000);
*/

//npm run dev känner av ändringar osv 