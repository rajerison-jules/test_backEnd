const db = require("../models");
const Comment = db.comments;

exports.create = (req, res) => {
  const comment = {
    name: req.body.name,
    value: req.body.value,
    voitureId: req.body.voitureId,
  };

  Comment.create(comment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Voiture.",
      });
    });
};
