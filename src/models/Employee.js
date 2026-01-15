const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Employee = sequelize.define("employees", {
  e_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  salary: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  HRA: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  joining_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Employee;
