const express = require('express');
const app = express();
const sequelize = require('./config/db');
require('dotenv').config();

app.use(express.json());

// Connect to DB
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
