module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Post;
};
