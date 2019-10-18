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
};
