module.exports = app => {
  const Area = require("../controllers/area.controller");

  //create area
  app.post("/save-area", Area.create);
  //get All area
  app.get("/areas", Area.findAll);
  //update area
  app.put("/update-area/:id", Area.update);
  //delete area
  app.delete("/delete-area/:id", Area.delete);
};
