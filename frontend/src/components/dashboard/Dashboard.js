import React from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ParticipantDashboard from './roles/ParticipantDashboard';
import JudgeDashboard from './roles/JudgeDashboard';
import OrganizerDashboard from './roles/OrganizerDashboard';
import RecruiterDashboard from './roles/RecruiterDashboard';

const Dashboard = () => {
  const { user } = useAuth();
  const { isDarkMode } = useTheme();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const getRoleDashboard = () => {
    switch (user.role) {
      case 'participant':
        return <ParticipantDashboard />;
      case 'judge':
        return <JudgeDashboard />;
      case 'organizer':
        return <OrganizerDashboard />;
      case 'recruiter':
        return <RecruiterDashboard />;
      default:
        return <Navigate to="/login" replace />;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <motion.main
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 p-8"
        >
          {getRoleDashboard()}
        </motion.main>
      </div>
    </div>
  );
};

export default Dashboard; 