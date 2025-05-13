import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/landing/LandingPage';
import Header from './components/common/Header';
import Learn from './components/landing/Learn';
import Practice from './components/landing/Practice';
import Compete from './components/landing/Compete';
import Mentorship from './components/landing/Mentorship';
import Jobs from './components/landing/Jobs';
import Blogs from './components/landing/Blogs';
import Host from './components/landing/Host';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth, Loader } from './context/AuthContext';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AppRoutes() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && location.pathname !== '/dashboard') {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, location.pathname, navigate]);

  if (loading) return <Loader />;

  if (user) {
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/dashboard/*" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Dashboard /></motion.div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><LandingPage /></motion.div>} />
          <Route path="/login" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Login /></motion.div>} />
          <Route path="/register" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Register /></motion.div>} />
          <Route path="/learn" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Learn /></motion.div>} />
          <Route path="/practice" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Practice /></motion.div>} />
          <Route path="/compete" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Compete /></motion.div>} />
          <Route path="/mentorship" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Mentorship /></motion.div>} />
          <Route path="/jobs" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Jobs /></motion.div>} />
          <Route path="/blogs" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Blogs /></motion.div>} />
          <Route path="/host" element={<motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"><Host /></motion.div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App; 