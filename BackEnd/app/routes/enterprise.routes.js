module.exports = app => {
  const Enterprise = require("../controllers/enterprise.controller");

  //create enterprise
  app.post("/save-enterprise", Enterprise.create);
  //get All enterprises
  app.get("/enterprises", Enterprise.findAll);
  //update enterprise
  app.put("/update-enterprise/:id", Enterprise.update);
  //delete enterprise
  app.delete("/delete-enterprise/:id", Enterprise.delete);
};
