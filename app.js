const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estático
app.use(express.static("public"));

// app.get("/", (req, res) => {
// 	res.render("home", {
// 		nombre: "Matias Straface",
// 		titulo: "Practicas curso NodeJS",
// 	});
// });

// app.get("/generic", (req, res) => {
// 	res.render("generic", {
// 		nombre: "Matias Straface",
// 		titulo: "Practicas curso NodeJS",
// 	});
// });

// app.get("/elements", (req, res) => {
// 	res.render("elements", {
// 		nombre: "Matias Straface",
// 		titulo: "Practicas curso NodeJS",
// 	});
// });

//cambio para probar actualización de datos...

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/back/index.html");
});

app.listen(port, () => {
	console.log(`Escuchando en http://localhost:${port}`);
});
