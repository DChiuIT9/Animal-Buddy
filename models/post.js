module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    animal_name: DataTypes.STRING,
    location: DataTypes.STRING,
    img: DataTypes.STRING,
    caption: DataTypes.STRING,
    category: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  });
  // Post.associate = function(models) {
  //   Post.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };
  return Post;
};
