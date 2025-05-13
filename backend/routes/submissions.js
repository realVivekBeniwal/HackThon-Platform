const express = require('express');
const router = express.Router();
let submissions = require('../data/submissions');

// Get all submissions
router.get('/', (req, res) => {
  res.json(submissions);
});

// Get a specific submission
router.get('/:id', (req, res) => {
  const submission = submissions.find(s => s.id === parseInt(req.params.id));
  if (!submission) {
    return res.status(404).json({ message: 'Submission not found' });
  }
  res.json(submission);
});

// Create a new submission
router.post('/', (req, res) => {
  const newSubmission = {
    id: submissions.length + 1,
    ...req.body,
    submissionDate: new Date().toISOString(),
    ratings: [],
    averageRating: 0
  };
  
  submissions.push(newSubmission);
  res.status(201).json(newSubmission);
});

// Update a submission
router.put('/:id', (req, res) => {
  const submissionIndex = submissions.findIndex(s => s.id === parseInt(req.params.id));
  if (submissionIndex === -1) {
    return res.status(404).json({ message: 'Submission not found' });
  }
  
  submissions[submissionIndex] = {
    ...submissions[submissionIndex],
    ...req.body
  };
  
  res.json(submissions[submissionIndex]);
});

// Delete a submission
router.delete('/:id', (req, res) => {
  const submissionIndex = submissions.findIndex(s => s.id === parseInt(req.params.id));
  
  if (submissionIndex === -1) {
    return res.status(404).json({ message: 'Submission not found' });
  }
  
  submissions.splice(submissionIndex, 1);
  
  res.json({ message: 'Submission deleted successfully' });
});

// Rate a submission
router.post('/:id/rate', (req, res) => {
  const submissionId = parseInt(req.params.id);
  const { judgeId, score, feedback } = req.body;
  
  const submissionIndex = submissions.findIndex(s => s.id === submissionId);
  if (submissionIndex === -1) {
    return res.status(404).json({ message: 'Submission not found' });
  }
  
  const existingRatingIndex = submissions[submissionIndex].ratings.findIndex(
    r => r.judgeId === judgeId
  );
  
  if (existingRatingIndex !== -1) {
    // Update existing rating
    submissions[submissionIndex].ratings[existingRatingIndex] = { judgeId, score, feedback };
  } else {
    // Add new rating
    submissions[submissionIndex].ratings.push({ judgeId, score, feedback });
  }
  
  // Calculate average rating
  const totalScore = submissions[submissionIndex].ratings.reduce(
    (sum, rating) => sum + rating.score, 0
  );
  submissions[submissionIndex].averageRating = 
    totalScore / submissions[submissionIndex].ratings.length;
  
  res.json(submissions[submissionIndex]);
});

module.exports = router;