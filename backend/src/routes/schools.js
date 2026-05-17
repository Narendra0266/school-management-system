const express = require('express');
const router = express.Router();

// Get all schools
router.get('/', (req, res) => {
  const schools = [
    {
      id: 1,
      name: 'Hindi Medium School',
      principal: 'Mr. Madanlal',
      medium: 'Hindi',
      type: 'School',
      students: 450,
      staff: 25
    },
    {
      id: 2,
      name: 'Modern English School',
      principal: 'Mr. Kamlesh Kumar',
      medium: 'English',
      type: 'School',
      students: 520,
      staff: 28
    },
    {
      id: 3,
      name: 'Modern Girls College',
      principal: 'Mr. Pankaj Sharma',
      medium: 'English',
      type: 'College',
      students: 320,
      staff: 22
    }
  ];
  res.json(schools);
});

// Get school by ID
router.get('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'School Name',
    principal: 'Principal Name',
    students: 450,
    staff: 25
  });
});

// Create school
router.post('/', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'School created successfully',
    school: req.body
  });
});

module.exports = router;
