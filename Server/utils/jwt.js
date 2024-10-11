const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

// Verify JWT Token
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
