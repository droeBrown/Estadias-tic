"use strict";

//import the model
const Project = require("../models/project.model");

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create a enterprise
  const project = new Project({
    nombre: req.body.nombre,
    responsable: req.body.responsable,
    calificacion: req.body.calificacion,
    comentarios: req.body.comentarios,
    estatus: req.body.estatus,
    id_area: req.body.id_area
  });

  // Save enterprise in the database
  Project.create(project, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el proyecto."
      });
    else res.send(data);
  });
};

//Read all the enterprises
exports.findAll = (req, res) => {
  Project.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consulltar los proyectos."
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

  Project.updateById(req.params.id, new Project(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro el proyecto con el id: ${req.params.id}.`
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
  Project.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar el proyecto con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar el proyecto con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Proyecto Borrado`
    });
  });
};
