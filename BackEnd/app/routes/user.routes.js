module.exports = app => {
  const User = require("../controllers/user.controller");

  //create user
  app.post("/save-user", User.create);
  //get All users
  app.get("/users", User.findAll);
  //get one user
  app.get("/user/:usuario/:contraseña", User.findOne);
  //update user
  app.put("/update-user/:id", User.update);
  //delete user
  app.delete("/delete-user/:id", User.delete);
};