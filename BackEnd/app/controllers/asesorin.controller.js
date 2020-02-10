"use strict";

//import the model
const AsesorIn = require("../models/asesorIn.model");

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create AsesorIN
  const asesorIn = new AsesorIn({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono,
    id_empresa: req.body.id_empresa,
    estatus: req.body.estatus
  });

  // Save enterprise in the database
  AsesorIn.create(asesorIn, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el Asesor Industrial."
      });
    else res.send(data);
  });
};


//Read all the asesors
exports.findAll = (req, res) => {
  AsesorIn.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar los Asesores."
      });
    else res.send(data);
  });
};

//update enterprise
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  AsesorIn.updateById(req.params.id, new AsesorIn(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro el Asesor con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar"
        });
      }
    } else res.send(data);
  });
};


// Delete a enterprise with the specified id in the request
exports.delete = (req, res) => {
  AsesorIn.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar el asesorcon el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar el asesor con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Asesor Borrado`
    });
  });
};
