const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  fname: { type: DataTypes.STRING(50), allowNull: false },
  lname: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role: { type: DataTypes.ENUM('admin', 'client', 'staff'), allowNull: false },
  contact_number: DataTypes.STRING(15),
  aadhar_pan_no: DataTypes.STRING(20),
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = User;
