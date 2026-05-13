const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Mr. Devilal Kumawat', role: 'director', school: 'Modern Group' },
    { id: 2, name: 'Mr. Madanlal', role: 'principal', school: 'Hindi Medium School' },
    { id: 3, name: 'Teacher 1', role: 'teacher', school: 'Hindi Medium School' }
  ]);
});

// Get user by ID
router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'User Name',
    email: 'user@email.com',
    role: 'teacher',
    school: 'School Name'
  });
});

// Create user
router.post('/', (req, res) => {
  res.status(201).json({ success: true, message: 'User created', user: req.body });
});

module.exports = router;
