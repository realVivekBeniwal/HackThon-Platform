const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data storage
const users = {
  participant: { password: '1234', role: 'participant' },
  judge: { password: '1234', role: 'judge' },
  organizer: { password: '1234', role: 'organizer' },
  recruiter: { password: '1234', role: 'recruiter' },
};

const hackathons = [
  {
    id: 1,
    title: 'AI Innovation Challenge 2024',
    date: '2024-04-15',
    description: 'Build innovative AI solutions for real-world problems',
    participants: 25,
    judges: 5,
    status: 'Active',
  },
  {
    id: 2,
    title: 'Web3 Development Hackathon',
    date: '2024-05-01',
    description: 'Create decentralized applications using blockchain technology',
    participants: 15,
    judges: 3,
    status: 'Upcoming',
  },
];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A smart task management system with AI suggestions',
    githubLink: 'https://github.com/example/task-manager',
    participant: 'John Doe',
    hackathon: 'AI Innovation Challenge 2024',
    rating: 9,
  },
  {
    id: 2,
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system using blockchain',
    githubLink: 'https://github.com/example/voting-system',
    participant: 'Jane Smith',
    hackathon: 'Web3 Development Hackathon',
    rating: 8,
  },
];

// Routes
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (user && user.password === password) {
    res.json({
      success: true,
      user: {
        username,
        role: user.role,
      },
    });
  } else {
    res.status(401).json({
      success: false,
      error: 'Invalid credentials',
    });
  }
});

app.get('/api/hackathons', (req, res) => {
  res.json(hackathons);
});

app.post('/api/hackathons', (req, res) => {
  const newHackathon = {
    id: hackathons.length + 1,
    ...req.body,
    participants: 0,
    judges: 0,
    status: 'Upcoming',
  };
  hackathons.push(newHackathon);
  res.json(newHackathon);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/projects', (req, res) => {
  const newProject = {
    id: projects.length + 1,
    ...req.body,
    rating: 0,
  };
  projects.push(newProject);
  res.json(newProject);
});

app.put('/api/projects/:id/rate', (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  const project = projects.find((p) => p.id === parseInt(id));

  if (project) {
    project.rating = rating;
    res.json(project);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
