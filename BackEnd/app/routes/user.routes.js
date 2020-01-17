module.exports = app => {
  const User = require("../controllers/user.controller");

  //create user
  app.post("/save-user", User.create);
  //get All users
  app.get("/users", User.findAll);
  //update user
  app.put("/update-user/:id", User.update);
  //delete user
  app.delete("/delete-user/:id", User.delete);
};
