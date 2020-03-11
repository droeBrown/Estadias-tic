"use strict";

//import the model
const Student = require("../models/student.model");

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  // Create a student
  const student = new Student({
    nombres: req.body.nombres,
    apellidoPaterno: req.body.apellidoPaterno,
    apellidoMaterno: req.body.apellidoPaterno,
    matricula: req.body.matricula,
    periodo: req.body.periodo,
    telefono: req.body.telefono,
    correo: req.body.correo,
    carrera: req.body.carrera,
    turno: req.body.turno,
    genero: req.body.genero,
    edad: req.body.edad,
    reingreso: req.body.reingreso,
    estatus: 'activo',
    id_asesorin: null,
    id_asesoraca: null,
    id_proyecto: null
  });

  //Save student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al crear el alumno."
      });
    else res.send(data);
  });
};

//Read all the students
exports.findAll = (req, res) => {
  Student.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar los Alumnos."
      });
    else res.send(data);
  });
};

//Read one  student
exports.findOne = (req, res) => {
  Student.getOne(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar el Alumno."
      });
    else res.send(data);
  });
};

//retrieve student BY matricula
exports.findByMatricula = (req, res) => {
  Student.getByMatricula(req.params.matricula, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al consultar el Alumno."
      });
    else res.send(data);
  });
};


//update student
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "No puede estar vacio"
    });
  }

  Student.updateById(req.params.id, new Student(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se encontro el alumno con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error al actualizar"
        });
      }
    } else res.send(data);
  });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
  Student.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No se pudo encontrar el alumno con el id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo borrar el alumno con el id:" + req.params.id
        });
      }
    } else res.send({
      message: `Alumno Borrado`
    });
  });
};