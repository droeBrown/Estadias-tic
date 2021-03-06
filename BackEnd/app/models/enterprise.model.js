"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

// constructor
const Enterprise = function (params) {
  //se crea el modelo de empresa
  this.nombre = params.nombre;
  this.rfc = params.rfc;
  this.giro = params.giro;
  this.tipo = params.tipo;
  this.areaAsignada = params.areaAsignada;
  this.presencia = params.presencia;
  this.calle = params.calle;
  this.noInterior = params.noInterior;
  this.noExterior = params.noExterior;
  this.colonia = params.colonia;
  this.cp = params.cp;
  this.municipio = params.municipio;
  this.numEmpleados = params.numEmpleados;
  this.calificacion = params.calificacion;
  this.descripcion = params.descripcion;
  this.estatus = params.estatus;
};

///Crear
Enterprise.create = (newEnterpriese, result) => {
  sql.query("INSERT INTO Empresa SET ?", newEnterpriese, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created enterprise: ", {
      id: res.insertId,
      ...newEnterpriese
    });
    result(null, {
      id: res.insertId,
      ...newEnterpriese
    });
  });
};

//CONSULTAR
Enterprise.getAll = result => {
  sql.query("SELECT * FROM Empresa", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Empresas: ", res);
    result(null, res);
  });
};


//Actualizar
Enterprise.updateById = (id, enterprise, result) => {
  sql.query(
    "UPDATE Empresa SET nombre = ?, rfc = ?, giro = ?, tipo= ?, areaAsignada = ?, presencia = ?, calle = ? , noInterior= ?, noExterior=?,colonia=?,cp=?,municipio=?,numEmpleados=?,calificacion=?,descripcion=?,estatus=? WHERE id_empresa = ?",
    [enterprise.nombre, enterprise.rfc, enterprise.giro, enterprise.tipo, enterprise.areaAsignada, enterprise.presencia, enterprise.calle, enterprise.noInterior, enterprise.noExterior, enterprise.colonia, enterprise.cp, enterprise.municipio, enterprise.numEmpleados, enterprise.calificacion, enterprise.descripcion, enterprise.estatus, id],
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
      console.log("updated enterprise: ", {
        id: id,
        ...enterprise
      });
      result(null, {
        id: id,
        ...enterprise
      });
    }
  );
};

//Borar
Enterprise.remove = (id, result) => {
  sql.query("DELETE FROM Empresa WHERE id_empresa = ?", id, (err, res) => {
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

    console.log("Empresa borrada con el id: ", id);
    result(null, res);
  });
};

//se exporta el módulo
module.exports = Enterprise;