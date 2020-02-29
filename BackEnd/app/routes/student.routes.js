module.exports = app => {
  const Student = require("../controllers/student.controller");

  //create student
  app.post("/save-student", Student.create);
  //get All students
  app.get("/students", Student.findAll);
  //get One student
  app.get("/student/:id", Student.findOne);
  //update student
  app.put("/update-student/:id", Student.update);
  //delete student
  app.delete("/delete-student/:id", Student.delete);
};



// area de la empresa y para asesor academico <=carrera<=turno
//project calification, comments
//estatus en todo