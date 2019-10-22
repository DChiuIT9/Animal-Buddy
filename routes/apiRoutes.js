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
    db.Post.create({
      animal_name: req.body.animal_name,
      location: req.body.location,
      img: req.body.img,
      caption: req.body.caption,
      category: req.body.category,
      UserId: req.body.UserId
    }).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id
  app.delete("/api/posts//id/:id", function(req, res) {
    db.Post.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  app.get("api/users/:id", function(req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Post.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  app.delete("api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(result) {
      res.json(result);
    });
  });

  app.get("api/posts/category", (req, res) => {
    res.json("hi");
  })
  app.get("api/posts/category/:category", function(req, res) {
    console.log(req.params.category);
    db.Post.findAll({ where: { category: req.params.category } }).then(function(
      result
    ) {
      console.log(result);
      res.json(result);
    });
  });
};
