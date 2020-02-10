"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

// constructor
const Student = function (params) {
  //se crea el modelo de Alumno
  this.nombre = params.nombre;
  this.numseguro = params.numseguro;
  this.nivel = params.nivel;
  this.carrera = params.carrera;
  this.sede = params.sede;
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

//Actualizar
Student.updateById = (id, student, result) => {
  sql.query(
    "UPDATE Alumno SET nombre = ?, numseguro = ?, nivel = ?, carrera= ?, sede = ?,estatus= ?, id_asesorin = ?, id_asesoraca = ?, id_proyecto = ? WHERE id_alumno = ?",
    [student.nombre, student.numseguro, student.nivel, student.carrera, student.sede, student.estatus, student.id_asesorin, student.id_asesoraca, student.id_proyecto, id],
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
