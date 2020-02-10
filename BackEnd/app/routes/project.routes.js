module.exports = app => {
  const Project = require("../controllers/project.controller");

  //create student
  app.post("/save-project", Project.create);
  //get All students
  app.get("/projects", Project.findAll);
  //update student
  app.put("/update-project/:id", Project.update);
  //delete student
  app.delete("/delete-project/:id", Project.delete);
};
