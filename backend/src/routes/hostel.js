const express = require('express');
const router = express.Router();

// Get all rooms
router.get('/rooms', (req, res) => {
  res.json([
    { id: 1, number: '101', capacity: 2, occupied: 2, students: ['S001', 'S002'], block: 'A' },
    { id: 2, number: '102', capacity: 2, occupied: 1, students: ['S003'], block: 'A' }
  ]);
});

// Get student hostel info
router.get('/student/:studentId', (req, res) => {
  res.json({
    studentId: req.params.studentId,
    roomNumber: '101',
    block: 'A',
    roommate: 'Student Name',
    checkInDate: '2026-01-15',
    monthlyFees: 2000,
    feesStatus: 'paid'
  });
});

// Book room
router.post('/book', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Room booked successfully',
    roomNumber: '101'
  });
});

module.exports = router;
