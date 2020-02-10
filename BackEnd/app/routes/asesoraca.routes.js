module.exports = app => {
  const AsesorAca = require("../controllers/asesoraca.controller");

  //create AsesorAca
  app.post("/save-asesorAca", AsesorAca.create);
  //get All Asesors
  app.get("/asesorsAca", AsesorAca.findAll);
  //update AsesorAca
  app.put("/update-asesorAca/:id", AsesorAca.update);
  //delete AsesorAca
  app.delete("/delete-asesorAca/:id", AsesorAca.delete);
};
