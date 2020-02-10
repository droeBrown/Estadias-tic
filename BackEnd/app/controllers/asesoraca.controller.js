"use strict";

//import the model
const AsesorAca = require("../models/asesorAca.model");

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create asesorAca
  const asesorAca = new AsesorAca({
    nombre: req.body.nombre,
    correo: req.body.correo,
    telefono: req.body.telefono,
    carrera: req.body.carrera,
    turno: req.body.turno,
    estatus: req.body.estatus
  });

  // Save enterprise in the database
  AsesorAca.create(asesorAca, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el Asesor Academico."
      });
    else res.send(data);
  });
};


//Read all the asesors
exports.findAll = (req, res) => {
  AsesorAca.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar los Asesores."
      });
    else res.send(data);
  });
};

//update asesor
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  AsesorAca.updateById(req.params.id, new AsesorAca(req.body), (err, data) => {
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
  AsesorAca.remove(req.params.id, (err, data) => {
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
