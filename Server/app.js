const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const db = require('./models');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);

// Connect to DB
sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');

    // Sync all models with the database
    return sequelize.sync({alter: true});  // Use { alter: true } to make small changes to the database schema without dropping tables
  })
  .then(() => {
    console.log('Models synchronized successfully');
  })
  .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
