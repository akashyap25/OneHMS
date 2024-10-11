const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Room = sequelize.define('Room', {
  room_number: { type: DataTypes.STRING(10), unique: true, allowNull: false },
  room_type: { type: DataTypes.ENUM('AC', 'Non-AC'), allowNull: false },
  occupancy_type: { type: DataTypes.ENUM('single', 'double', 'triple', 'quad'), allowNull: false },
  total_beds: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1 } },
  occupied_beds: { type: DataTypes.INTEGER, defaultValue: 0, validate: { min: 0 } },
  availability: {
    type: DataTypes.VIRTUAL,
    get() {
      return this.occupied_beds < this.total_beds ? 'available' : 'occupied';
    },
    set() {
      throw new Error('Do not try to set the `availability` value!');
    }
  },
  rent_price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

module.exports = Room;
