const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Register a new user
router.post(
  '/register',
  [
    check('fname', 'First name is required').notEmpty(),
    check('lname', 'Last name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    check('role', 'Role is required').isIn(['admin', 'client', 'staff']),
  ],
  authController.register
);

// Login user
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.login
);

// Get profile of authenticated user
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
