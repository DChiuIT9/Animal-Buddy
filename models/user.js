module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Post", {
    name: DataTypes.STRING
  });

  User.associate = function(models){
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return User;
};
