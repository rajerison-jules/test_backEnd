module.exports = (app) => {
  const voitures = require("../controllers/voiture.controller.js");
  const comments = require("../controllers/comment.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial

  router.post("/", voitures.create);
  router.post("/coms", voitures.createComs);

  // Retrieve all voitures
  router.get("/coms", voitures.findAllComs);
  router.get("/", voitures.findAll);

  // Retrieve all published voitures
  router.get("/published", voitures.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", voitures.findOne);
  router.get("/coms/:id", voitures.findOneComs);

  // Update a Tutorial with id
  router.put("/:id", voitures.update);

  // Delete a Tutorial with id
  router.delete("/:id", voitures.delete);

  // Delete all voitures
  router.delete("/", voitures.deleteAll);

  app.use("/api/voitures", router);
};
