var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/posts", function(req, res) {
    db.Post.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findAll().then(function(result) {
      res.json(result);
    });
  });

  app.get("api/users/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.delete("api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });
};
