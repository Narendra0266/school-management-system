const express = require('express');
const router = express.Router();

// Get all staff
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Mr. Madanlal', position: 'Principal', school: 'Hindi Medium School', salary: 50000 },
    { id: 2, name: 'Mr. Kamlesh Kumar', position: 'Principal', school: 'Modern English School', salary: 55000 }
  ]);
});

// Get staff by ID
router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'Staff Name',
    position: 'Teacher',
    school: 'School Name',
    salary: 25000,
    attendance: 95,
    joiningDate: '2020-01-15'
  });
});

// Record attendance
router.post('/attendance', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Attendance recorded',
    date: new Date().toISOString()
  });
});

module.exports = router;
