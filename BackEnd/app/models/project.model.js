"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

// constructor
const Project = function (params) {
  //se crea el modelo de proyecto
  this.nombre = params.nombre;
  this.responsable = params.responsable;
  this.calificacion = params.calificacion;
  this.comentarios = params.comentarios;
  this.estatus = params.estatus;
  this.id_area = params.id_area;
};

///Crear
Project.create = (newProject, result) => {
  sql.query("INSERT INTO Proyecto SET ?", newProject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created enterprise: ", {
      id: res.insertId,
      ...newProject
    });
    result(null, {
      id: res.insertId,
      ...newProject
    });
  });
};

//CONSULTAR
Project.getAll = result => {
  sql.query("SELECT * FROM Proyecto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Proyectos: ", res);
    result(null, res);
  });
};


//Actualizar
Project.updateById = (id, project, result) => {
  sql.query(
    "UPDATE Proyecto SET nombre = ?, responsable = ?, calificacion= ?, comentarios= ?, estatus= ?,id_area= ? WHERE id_proyecto = ?",
    [project.nombre, project.responsable, project.calificacion, project.comentarios, project.estatus, project.id_area, id],
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

      console.log("updated project: ", {
        id: id,
        ...project
      });
      result(null, {
        id: id,
        ...project
      });
    }
  );
};

//Borar
Project.remove = (id, result) => {
  sql.query("DELETE FROM Proyecto WHERE id_proyecto = ?", id, (err, res) => {
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

    console.log("Proyecto borrado con el id: ", id);
    result(null, res);
  });
};

//se exporta el módulo
module.exports = Project;
