 
  // backend/data/submissions.js
  const submissions = [
    {
      id: 1,
      hackathonId: 2,
      participantId: 1,
      title: 'EcoTrack',
      description: 'An AI-powered app that helps users track and reduce their carbon footprint',
      githubLink: 'https://github.com/johndoe/ecotrack',
      demoLink: 'https://ecotrack-demo.herokuapp.com',
      submissionDate: '2025-04-03T10:30:00.000Z',
      ratings: [
        { judgeId: 2, score: 8, feedback: 'Innovative solution with good implementation. UI could be improved.' }
      ],
      averageRating: 8
    },
    {
      id: 2,
      hackathonId: 2,
      participantId: 5,
      title: 'MedAssist',
      description: 'AI-based medical assistant for remote healthcare in underserved areas',
      githubLink: 'https://github.com/emmawilson/medassist',
      demoLink: 'https://medassist-demo.herokuapp.com',
      submissionDate: '2025-04-03T11:15:00.000Z',
      ratings: [
        { judgeId: 2, score: 9, feedback: 'Excellent concept and execution. Great potential for real impact.' }
      ],
      averageRating: 9
    },
    {
      id: 3,
      hackathonId: 2,
      participantId: 6,
      title: 'SmartFarm',
      description: 'Machine learning solution for small-scale farmers to optimize crop yields',
      githubLink: 'https://github.com/ryanchen/smartfarm',
      demoLink: 'https://smartfarm-demo.herokuapp.com',
      submissionDate: '2025-04-03T09:45:00.000Z',
      ratings: [
        { judgeId: 2, score: 7, feedback: 'Good use of ML algorithms, but could use more practical features.' }
      ],
      averageRating: 7
    }
  ];
  
  module.exports = submissions;