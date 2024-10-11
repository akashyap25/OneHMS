const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  invoice_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Invoices', key: 'id' } },
  client_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Clients', key: 'id' } },
  payment_date: { type: DataTypes.DATEONLY, allowNull: false },
  amount_paid: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  payment_method: { type: DataTypes.ENUM('UPI', 'cash', 'card'), allowNull: false },
  status: { type: DataTypes.ENUM('paid', 'unpaid'), allowNull: false }
});

module.exports = Payment;
