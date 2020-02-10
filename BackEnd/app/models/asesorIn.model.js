"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

//crete the constructor

const AsesorIn = function (params) {
  //se crear el modelo de asesor industrial
  this.nombre = params.nombre;
  this.correo = params.correo;
  this.telefono = params.telefono;
  this.id_empresa = params.id_empresa;
  this.estatus = params.estatus;
}

//crear
AsesorIn.create = (newAsesorin, result) => {
  sql.query("INSERT INTO AsesorIndustrial SET ?", newAsesorin, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created asesorin: ", {
      id: res.insertId,
      ...newAsesorin
    });
    result(null, {
      id: res.insertId,
      ...newAsesorin
    });
  });
};

//CONSULTAR
AsesorIn.getAll = result => {
  sql.query("SELECT * FROM AsesorIndustrial", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Asesores Industriales: ", res);
    result(null, res);
  });
};

//Actualizar
AsesorIn.updateById = (id, asesorin, result) => {
  sql.query(
    "UPDATE AsesorIndustrial SET nombre = ?, correo = ?, telefono = ?, id_empresa= ?, estatus = ? WHERE id_asesorin = ?",
    [asesorin.nombre, asesorin.correo, asesorin.telefono, asesorin.id_empresa, asesorin.estatus, id],
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

      console.log("updated Industrial Asesor: ", {
        id: id,
        ...asesorin
      });
      result(null, {
        id: id,
        ...asesorin
      });
    }
  );
};

//Borar
AsesorIn.remove = (id, result) => {
  sql.query("DELETE FROM AsesorIndustrial WHERE id_asesorin = ?", id, (err, res) => {
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

    console.log("Asesor Industrial borrado con el id: ", id);
    result(null, res);
  });
};


//se exporta el módulo
module.exports = AsesorIn;
