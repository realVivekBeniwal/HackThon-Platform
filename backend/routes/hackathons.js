const express = require('express');
const router = express.Router();
let hackathons = require('../data/hackathons');
let submissions = require('../data/submissions');

// Get all hackathons
router.get('/', (req, res) => {
  res.json(hackathons);
});

// Get a specific hackathon
router.get('/:id', (req, res) => {
  const hackathon = hackathons.find(h => h.id === parseInt(req.params.id));
  if (!hackathon) {
    return res.status(404).json({ message: 'Hackathon not found' });
  }
  res.json(hackathon);
});

// Create a new hackathon
router.post('/', (req, res) => {
  const newHackathon = {
    id: hackathons.length + 1,
    ...req.body,
    participants: [],
    status: 'upcoming'
  };
  
  hackathons.push(newHackathon);
  res.status(201).json(newHackathon);
});

// Update a hackathon
router.put('/:id', (req, res) => {
  const hackathonIndex = hackathons.findIndex(h => h.id === parseInt(req.params.id));
  if (hackathonIndex === -1) {
    return res.status(404).json({ message: 'Hackathon not found' });
  }
  
  hackathons[hackathonIndex] = {
    ...hackathons[hackathonIndex],
    ...req.body
  };
  
  res.json(hackathons[hackathonIndex]);
});

// Delete a hackathon
router.delete('/:id', (req, res) => {
  const hackathonId = parseInt(req.params.id);
  const hackathonIndex = hackathons.findIndex(h => h.id === hackathonId);
  
  if (hackathonIndex === -1) {
    return res.status(404).json({ message: 'Hackathon not found' });
  }
  
  // Also delete any submissions for this hackathon
  submissions = submissions.filter(s => s.hackathonId !== hackathonId);
  
  // Remove the hackathon
  hackathons.splice(hackathonIndex, 1);
  
  res.json({ message: 'Hackathon deleted successfully' });
});

// Register a participant for a hackathon
router.post('/:id/register', (req, res) => {
  const hackathonId = parseInt(req.params.id);
  const { participantId } = req.body;
  
  const hackathonIndex = hackathons.findIndex(h => h.id === hackathonId);
  if (hackathonIndex === -1) {
    return res.status(404).json({ message: 'Hackathon not found' });
  }
  
  if (hackathons[hackathonIndex].participants.includes(participantId)) {
    return res.status(400).json({ message: 'Participant already registered' });
  }
  
  hackathons[hackathonIndex].participants.push(participantId);
  
  res.json(hackathons[hackathonIndex]);
});

// Get all submissions for a hackathon
router.get('/:id/submissions', (req, res) => {
  const hackathonId = parseInt(req.params.id);
  const hackathonSubmissions = submissions.filter(s => s.hackathonId === hackathonId);
  
  res.json(hackathonSubmissions);
});

module.exports = router;