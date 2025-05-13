const express = require('express');
const router = express.Router();
const users = require('../data/users');

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // In a real app, we would generate a JWT here
  // For simplicity, we're just sending back user data
  const { password: pwd, ...userWithoutPassword } = user;
  
  res.json({
    user: userWithoutPassword,
    token: `fake-jwt-token-${user.id}-${user.role}`,
  });
});

// Registration route for demo purposes (would actually modify the users array in a real app)
router.post('/register', (req, res) => {
  // This is a simplified registration that doesn't actually create a new user
  // In a real app, we would validate the input and add the user to the database
  res.status(201).json({ message: 'Registration successful! Please login.' });
});

module.exports = router;