const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FoodMenu = sequelize.define('FoodMenu', {
  date: { type: DataTypes.DATEONLY, unique: true, allowNull: false },
  breakfast: { type: DataTypes.STRING(255), allowNull: true },
  lunch: { type: DataTypes.STRING(255), allowNull: true },
  dinner: { type: DataTypes.STRING(255), allowNull: true }
});

module.exports = FoodMenu;
