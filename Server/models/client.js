const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
  user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
  room_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Rooms', key: 'id' } },
  bed_number: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1 } },
  check_in_date: { type: DataTypes.DATEONLY, allowNull: false },
  rent_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  security_deposit: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  status: { type: DataTypes.ENUM('active', 'inactive'), allowNull: false }
});

module.exports = Client;
