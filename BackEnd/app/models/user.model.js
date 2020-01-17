"use strict";
//se obtiene la conexión a la bd
const sql = require("./db.model.js");

// constructor
const User = function(params) {
  //se crea el modelo de usuario
  this.usuario = params.usuario;
  this.contraseña = params.contraseña;
  this.tipo = params.tipo;
};

///Crear
User.create = (newUser, result) => {
  sql.query("INSERT INTO Usuario SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

//CONSULTAR
User.getAll = result => {
  sql.query("SELECT * FROM Usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Usuarios: ", res);
    result(null, res);
  });
};

//Actualizar
User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE Usuario SET usuario = ?, contraseña = ?, tipo = ? WHERE id = ?",
    [user.usuario, user.contraseña, user.tipo, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

//Borar
User.remove = (id, result) => {
  sql.query("DELETE FROM Usuario WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Usuario borrado con el id: ", id);
    result(null, res);
  });
};
//se exporta el módulo
module.exports = User;
