var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  User.beforeSave(function(user) {
    if (!user.changed("password")) {
      return;
    }
    console.log(user.dataValues);
    var salt = bcrypt.genSaltSync(12);
    var hash = bcrypt.hashSync(user.dataValues.password, salt)
    user.dataValues.password = hash;
  });

  User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
