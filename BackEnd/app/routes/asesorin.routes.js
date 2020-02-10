module.exports = app => {
  const AsesorIn = require("../controllers/asesorin.controller");

  //create AsesorIn
  app.post("/save-asesorin", AsesorIn.create);
  //get All Asesors
  app.get("/asesorsIn", AsesorIn.findAll);
  //update enterprise
  app.put("/update-asesorIn/:id", AsesorIn.update);
  //delete enterprise
  app.delete("/delete-asesorIn/:id", AsesorIn.delete);
};
