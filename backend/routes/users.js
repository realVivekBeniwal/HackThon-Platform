const express = require('express');
const router = express.Router();
const users = require('../data/users');
const submissions = require('../data/submissions');

// Get all users
router.get('/', (req, res) => {
  // Don't send passwords
  const usersWithoutPasswords = users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
  
  res.json(usersWithoutPasswords);
});

// Get a specific user
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const { password, ...userWithoutPassword } = user;
  res.json(userWithoutPassword);
});

// Get all participants
router.get('/role/participants', (req, res) => {
  const participants = users.filter(user => user.role === 'participant');
  
  const participantsWithoutPasswords = participants.map(participant => {
    const { password, ...participantWithoutPassword } = participant;
    return participantWithoutPassword;
  });
  
  res.json(participantsWithoutPasswords);
});

// Get all submissions by a specific participant
router.get('/:id/submissions', (req, res) => {
  const participantId = parseInt(req.params.id);
  const userSubmissions = submissions.filter(s => s.participantId === participantId);
  
  res.json(userSubmissions);
});

// Mark a participant as "Interested" by a recruiter
router.post('/:id/interest', (req, res) => {
  const participantId = parseInt(req.params.id);
  const { recruiterId } = req.body;
  
  const participantIndex = users.findIndex(u => u.id === participantId && u.role === 'participant');
  const recruiterIndex = users.findIndex(u => u.id === recruiterId && u.role === 'recruiter');
  
  if (participantIndex === -1) {
    return res.status(404).json({ message: 'Participant not found' });
  }
  
  if (recruiterIndex === -1) {
    return res.status(404).json({ message: 'Recruiter not found' });
  }
  
  // Add recruiter to participant's interestedRecruiters if not already there
  if (!users[participantIndex].interestedRecruiters.includes(recruiterId)) {
    users[participantIndex].interestedRecruiters.push(recruiterId);
  }
  
  // Add participant to recruiter's interestedCandidates if not already there
  if (!users[recruiterIndex].interestedCandidates.includes(participantId)) {
    users[recruiterIndex].interestedCandidates.push(participantId);
  }
  
  res.json({ message: 'Interest marked successfully' });
});

module.exports = router;