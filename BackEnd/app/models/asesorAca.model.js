"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

//crete the constructor

const Asesoraca = function (params) {
  //se crear el modelo de asesor
  this.nombre = params.nombre;
  this.correo = params.correo;
  this.telefono = params.telefono;
  this.carrera = params.carrera;
  this.turno = params.turno
  this.estatus = params.estatus;
}

//crear
Asesoraca.create = (newAsesor, result) => {
  sql.query("INSERT INTO AsesorAcademico SET ?", newAsesor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Asesor: ", {
      id: res.insertId,
      ...newAsesor
    });
    result(null, {
      id: res.insertId,
      ...newAsesor
    });
  });
};

//CONSULTAR
Asesoraca.getAll = result => {
  sql.query("SELECT * FROM AsesorAcademico", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Asesores Academicos: ", res);
    result(null, res);
  });
};

//Actualizar
Asesoraca.updateById = (id, asesoraca, result) => {
  sql.query(
    "UPDATE AsesorAcademico SET nombre = ?, correo= ?, telefono= ?, carrera= ?,turno= ?,estatus= ? WHERE id_asesoraca = ?",
    [asesoraca.nombre, asesoraca.correo, asesoraca.telefono, asesoraca.carrera, asesoraca.turno, asesoraca.estatus, id],
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

      console.log("updated Asesor : ", {
        id: id,
        ...asesoraca
      });
      result(null, {
        id: id,
        ...asesoraca
      });
    }
  );
};

//Borar
Asesoraca.remove = (id, result) => {
  sql.query("DELETE FROM AsesorAcademico WHERE id_asesoraca = ?", id, (err, res) => {
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

    console.log("Asesor borrado con el id: ", id);
    result(null, res);
  });
};


//se exporta el módulo
module.exports = Asesoraca;
