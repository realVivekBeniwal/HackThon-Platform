# Hackathon Platform

A modern web application for managing hackathons, built with React, Node.js, and Express.

## Features

- Role-based authentication (Participant, Judge, Organizer, Recruiter)
- Modern UI with dark/light theme support
- Responsive design with Tailwind CSS
- Smooth animations using Framer Motion
- Real-time project submission and evaluation
- Hackathon management system
- Recruiter dashboard for talent discovery

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Framer Motion
- React Router
- Headless UI

### Backend
- Node.js
- Express
- CORS
- Body Parser

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd hackathon-app
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Start the backend server:
```bash
npm run dev
```

5. In a new terminal, start the frontend development server:
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Hardcoded Credentials

You can log in using the following credentials:

### Participant
- Username: participant
- Password: 1234

### Judge
- Username: judge
- Password: 1234

### Organizer
- Username: organizer
- Password: 1234

### Recruiter
- Username: recruiter
- Password: 1234

## Features by Role

### Participant
- View available hackathons
- Submit projects
- Track submission status

### Judge
- View submitted projects
- Rate projects (1-10)
- Provide feedback

### Organizer
- Create and manage hackathons
- View participants and judges
- Monitor hackathon progress

### Recruiter
- Browse participant profiles
- View project submissions
- Mark candidates as interested

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
