var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({}).then(function(post) {
      res.sendFile(path.join(__dirname, "../public/html/home.html"));
      res.json(post);
    });
  });

  // Load example page and pass in an example by id
  app.get("/posts/:id", function(req, res) {
    db.Post.findOne({ where: { id: req.params.id } }).then(function(post) {
      res.render("post", {
        post: post
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
