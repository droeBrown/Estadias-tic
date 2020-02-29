"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

// constructor
const Student = function (params) {
  //se crea el modelo de Alumno
  this.nombres = params.nombres;
  this.apellidoPaterno = params.apellidoPaterno;
  this.apellidoMaterno = params.apellidoPaterno;
  this.matricula = params.matricula;
  this.periodo = params.periodo;
  this.telefono = params.telefono;
  this.correo = params.correo;
  this.carrera = params.carrera;
  this.turno = params.turno;
  this.genero = params.genero;
  this.edad = params.edad;
  this.reingreso = params.reingreso;
  this.estatus = params.estatus;
  this.id_asesorin = params.id_asesorin;
  this.id_asesoraca = params.id_asesoraca;
  this.id_proyecto = params.id_proyecto;
};

///Crear
Student.create = (newStudent, result) => {
  sql.query("INSERT INTO Alumno SET ?", newStudent, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created student: ", {
      id: res.insertId,
      ...newStudent
    });
    result(null, {
      id: res.insertId,
      ...newStudent
    });
  });
};

//CONSULTAR
Student.getAll = result => {
  sql.query("SELECT * FROM Alumno", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Alumnos: ", res);
    result(null, res);
  });
};

//CONSULTAR POR ID
Student.getOne = (id, result) => {
  sql.query("SELECT * FROM Alumno WHERE id_alumno=?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Alumnos: ", res);
    result(null, res);
  });
};


//Actualizar
Student.updateById = (id, student, result) => {
  sql.query(
    "UPDATE Alumno SET nombres = ?, apellidoPaterno=?,apellidoMaterno = ?, matricula = ?, periodo= ?, telefono = ?,correo= ?, carrera = ?, turno = ?, genero = ?,edad=?,reingreso=?,estatus=? WHERE id_alumno = ?",
    [student.nombres, student.apellidoPaterno, student.apellidoPaterno, student.matricula, student.periodo, student.telefono, student.correo, student.carrera, student.turno, student.genero, student.edad, student.reingreso, student.estatus, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({
          kind: "not_found"
        }, null);
        return;
      }

      console.log("updated student: ", {
        id: id,
        ...student
      });
      result(null, {
        id: id,
        ...student
      });
    }
  );
};


//Borar
Student.remove = (id, result) => {
  sql.query("DELETE FROM Alumno WHERE id_alumno = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({
        kind: "not_found"
      }, null);
      return;
    }

    console.log("Alumno borrado con el id: ", id);
    result(null, res);
  });
};


//se exporta el módulo
module.exports = Student;