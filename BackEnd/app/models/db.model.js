"use strict";
//constante para el modulo de mysql
const mysql = require("mysql");
//cargando el modulo de la bd
const dbConfig = require("../config/db.config.js");

// Conexión con la bd
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Estableciendo la conexión
connection.connect(error => {
  if (error) throw error;
  console.log("BD funcionando...");
});

//se exporta la conexión
module.exports = connection;
