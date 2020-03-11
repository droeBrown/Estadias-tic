"use strict";

//import the model
const User = require("../models/user.model");

//create the routes

//create user
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create a user
  const user = new User({
    usuario: req.body.usuario,
    contrasena: req.body.contrasena,
    tipo: req.body.tipo,
    estatus: req.body.estatus
  });

  // Save user in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el usuario."
      });
    else res.send(data);
  });
};

//Read all the users
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consulltar los usuarios."
      });
    else res.send(data);
  });
};

//Read by user and pass 
exports.findOne = (req, res) => {
  User.getOne(req.params.usuario, req.params.contrasena, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consulltar los usuarios."
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

  User.updateById(req.params.id, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro el usuario con el id: ${req.params.id}.`
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
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar el usuario con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar el usuario con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Usuario Borrado`
    });
  });
};