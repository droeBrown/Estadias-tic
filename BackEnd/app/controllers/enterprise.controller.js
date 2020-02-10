"use strict";

//import the model
const Enterprise = require("../models/enterprise.model");

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create an enterprise
  const enterprise = new Enterprise({
    nombrecomercial: req.body.nombrecomercial,
    razonsocial: req.body.razonsocial,
    numempleados: req.body.numempleados,
    domicilio: req.body.domicilio,
    giro: req.body.giro,
    calificacion: req.body.calificacion,
    descripcion: req.body.descripcion,
    estatus: req.body.estatus
  });

  // Save enterprise in the database
  Enterprise.create(enterprise, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear la empresa."
      });
    else res.send(data);
  });
};

//Read all the enterprises
exports.findAll = (req, res) => {
  Enterprise.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consulltar las empresas."
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

  Enterprise.updateById(req.params.id, new Enterprise(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro la empresa con el id: ${req.params.id}.`
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
  Enterprise.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar la empresa con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar la empresa con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Empresa Borrada`
    });
  });
};
