const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

const hbs = require("hbs");

//Handlebars
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");

//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Charly Gomez",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Charly Gomez",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Charly Gomez",
    titulo: "Curso de Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
