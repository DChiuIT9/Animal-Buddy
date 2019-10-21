var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // db.Post.findAll({}).then(function(post) {

    //   res.json(post);
    // });
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  app.get("/share", function(req, res){
    res.sendFile(path.join(__dirname, "../public/html/form.html"));
  });

  app.get("/view", function(req, res){
    res.sendFile(path.join(__dirname, "../public/html/viewPage.html"));
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
