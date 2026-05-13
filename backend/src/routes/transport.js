const express = require('express');
const router = express.Router();

// Get all buses
router.get('/buses', (req, res) => {
  res.json([
    { id: 1, number: 'MGE-001', driver: 'Mr. Babulal Ji', route: 'Route A', capacity: 40, students: 38 },
    { id: 2, number: 'MGE-002', driver: 'Mr. Ram Kumar', route: 'Route B', capacity: 40, students: 35 }
  ]);
});

// Get all routes
router.get('/routes', (req, res) => {
  res.json([
    { id: 1, name: 'Route A', startPoint: 'City Center', endPoint: 'School', stops: 8, buses: 1 },
    { id: 2, name: 'Route B', startPoint: 'North Area', endPoint: 'School', stops: 6, buses: 1 }
  ]);
});

// Get student tracking
router.get('/tracking/:studentId', (req, res) => {
  res.json({
    studentId: req.params.studentId,
    bus: 'MGE-001',
    route: 'Route A',
    currentLocation: 'Near Market',
    estimatedArrival: '08:30 AM',
    driver: 'Mr. Babulal Ji'
  });
});

module.exports = router;
