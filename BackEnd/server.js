"use strict";

//cosnstante para el modulo de express
const express = require("express");
//constante para el módulo de convertir las request a json
const bodyParser = require("body-parser");
//utilización de express
const app = express();

var cors = require('cors');
app.use(cors());

// convertir las request a json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

//ruta de la aplicacon
app.get("/", (req, res) => {
  res.json({
    message: "Estadias funcionando."
  });
});

//**IMPORTACIÓN DE LAS RUTAS */
require("./app/routes/user.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/enterprise.routes")(app);
require("./app/routes/project.routes")(app);
require("./app/routes/asesorin.routes")(app);
require("./app/routes/area.routes")(app);
require("./app/routes/asesoraca.routes")(app);
// set port, listen for requests
app.listen(3700, () => {
  console.log("Servidor funcionando en localhost:3700.");
});

