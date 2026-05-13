const express = require('express');
const router = express.Router();

// Get all fees records
router.get('/', (req, res) => {
  res.json([
    { id: 1, studentId: 101, amount: 5000, status: 'paid', date: '2026-01-15' },
    { id: 2, studentId: 102, amount: 5000, status: 'pending', date: '2026-02-15' }
  ]);
});

// Get fees by student
router.get('/student/:studentId', (req, res) => {
  res.json({
    studentId: req.params.studentId,
    totalFees: 50000,
    paidFees: 30000,
    pendingFees: 20000,
    payments: [
      { month: 'January', amount: 5000, status: 'paid', date: '2026-01-15' }
    ]
  });
});

// Record payment
router.post('/payment', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Payment recorded successfully',
    transactionId: 'TXN' + Date.now()
  });
});

module.exports = router;
