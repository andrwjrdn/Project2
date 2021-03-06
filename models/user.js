// module.exports = function (sequelize, DataTypes) {
//   var User = sequelize.define("User", {
//     firstname: {
//       type: DataTypes.STRING,
//       notEmpty: true
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       notEmpty: true
//     },
//     username: {
//       type: DataTypes.TEXT
//     },
//     about: {
//       type: DataTypes.TEXT
//     },
//     email: {
//       type: DataTypes.STRING,
//       validate: {
//         isEmail: true
//       }
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     last_login: {
//       type: DataTypes.DATE
//     },
//     status: {
//       type: DataTypes.ENUM("active", "inactive"),
//       defaultValue: "active"
//     }
//   });

//   User.associate = function(models) {
//     User.hasMany(models.CalendarRecipe, {
//       onDelete: "cascade"
//     });
//   };
//   return User;
// };

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },

    username: {
      type: DataTypes.TEXT
    },

    about: {
      type: DataTypes.TEXT
    },

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    // eslint-disable-next-line camelcase
    last_login: {
      type: DataTypes.DATE
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = (models) => {
    User.belongsToMany(models.Recipe, {
      through: 'CalendarRecipe',
      // as: 'users',
      foreignKey: 'userId'
    });
  };

  return User;
};
