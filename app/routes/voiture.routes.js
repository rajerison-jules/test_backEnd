const { authJwt } = require("../middleware");
const voitures = require("../controllers/voiture.controller.js");
module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 


  var router = require("express").Router();
  var routerpubl = require("express").Router();
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

  //voitures for public
  routerpubl.get("/", voitures.findAllPubl)


  app.use("/api/voitures",[authJwt.verifyToken], router);
  app.use("/api/voitPubl",routerpubl);

};
