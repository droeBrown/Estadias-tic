"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

//crete the constructor

const Area = function (params) {
  //se crear el modelo de area
  this.nombre = params.nombre;
  this.id_empresa = params.id_empresa;
}

//crear
Area.create = (newArea, result) => {
  sql.query("INSERT INTO Area SET ?", newArea, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Area: ", {
      id: res.insertId,
      ...newArea
    });
    result(null, {
      id: res.insertId,
      ...newArea
    });
  });
};

//CONSULTAR
Area.getAll = result => {
  sql.query("SELECT * FROM Area", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Areas: ", res);
    result(null, res);
  });
};

//Actualizar
Area.updateById = (id, area, result) => {
  sql.query(
    "UPDATE Area SET nombre = ?, id_empresa= ?WHERE id_area = ?",
    [area.nombre, area.id_empresa, id],
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

      console.log("updated Area : ", {
        id: id,
        ...area
      });
      result(null, {
        id: id,
        ...area
      });
    }
  );
};

//Borar
Area.remove = (id, result) => {
  sql.query("DELETE FROM Area WHERE id_area = ?", id, (err, res) => {
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

    console.log("Area borrada con el id: ", id);
    result(null, res);
  });
};


//se exporta el módulo
module.exports = Area;
