const db = require("../models");
const Voiture = db.voitures;
const Comment = db.comments;
const Op = db.Sequelize.Op;

// Create and Save a new Voiture
exports.create = (req, res) => {
  // Validate request
  if (!req.body.mark) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a voiture
  const voiture = {
    mark: req.body.mark,
    detail: req.body.detail,
  };

  // Save Tutorial in the database
  Voiture.create(voiture)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur s'est produite lors de la création de la voiture.",
      });
    });
};

exports.createComs = (req, res) => {
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

exports.findAllComs = (req, res) => {
  Comment.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving car.",
      });
    });
};

exports.findOneComs = (req, res) => {
  const id = req.params.id;

  Comment.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving car with id=" + id,
      });
    });
};

// Retrieve all Voitures from the database.
exports.findAll = (req, res) => {
  Voiture.findAll({
    include: ["comments"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving car.",
      });
    });
};

exports.findAllPubl = (req, res) => {
  Voiture.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving car.",
      });
    });
};

// Find a single Voiture with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Voiture.findByPk(id, { include: ["comments"] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving car with id=" + id,
      });
    });
};

// Update a Voiture by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Voiture.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Voiture was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Voiture with id=${id}. Maybe Voiture was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Voiture with id=" + id,
      });
    });
};

// Delete a Voiture with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Voiture.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Voiture was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Voiture with id=${id}. Maybe Voiture was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Voiture with id=" + id,
      });
    });
};

// Delete all Voitures from the database.
exports.deleteAll = (req, res) => {
  Voiture.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Voiture were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Voiture.",
      });
    });
};

// Find all published Voitures
exports.findAllPublished = (req, res) => {
  Voiture.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Voitures.",
      });
    });
};
