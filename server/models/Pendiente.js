const Sequelize = require("sequelize");
const dataBase = require("../database.js");

const Pendiente = dataBase.define("pendiente", {
  _id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  tarea: {
    type: Sequelize.STRING(90),
    allowNull: false,
    validate: {
      len: {
        args: [1, 90],
        msg: "El nombre de la tarea debe tener entre 1 y 90 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "El nombre de la tarea no puede ir vacio.",
      },
    },
  },

  descripcion: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: {
        args: [1, 255],
        msg: "La descripcion de la tarea debe tener entre 1 y 255 caracteres.",
      },
      notEmpty: {
        args: true,
        msg: "La descripcion de la tarea no puede ir vacia.",
      },
    },
  },
});

module.exports = Pendiente;
