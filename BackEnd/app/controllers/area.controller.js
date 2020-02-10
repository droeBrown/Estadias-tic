"use strict";

//import the model
const Area = require("../models/area.model");

//create the routes

//create Area
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create an area
  const area = new Area({
    nombre: req.body.nombre,
    id_empresa: req.body.id_empresa
  });

  // Save user in the database
  Area.create(area, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el Area."
      });
    else res.send(data);
  });
};

//Read all the areas
exports.findAll = (req, res) => {
  Area.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar las Areas."
      });
    else res.send(data);
  });
};

//update user
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  Area.updateById(req.params.id, new Area(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro el area con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar"
        });
      }
    } else res.send(data);
  });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
  Area.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar el area con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar el area con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Area Borrada`
    });
  });
};
