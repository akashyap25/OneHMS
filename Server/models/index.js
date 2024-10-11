const client = require('./client');
const invoice = require('./invoice');
const payment = require('./payment');
const user = require('./user');
const room = require('./room');
const complaint = require('./complaint');
const foodMenu = require('./foodMenu');

const db = { client, invoice, payment, user, room, complaint, foodMenu };

module.exports = db;  // Use module.exports to export the object in CommonJS
