import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PresentationChartBarIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  GlobeAltIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const initialFormData = {
  hackathonName: '',
  description: '',
  startDate: '',
  endDate: '',
  teamSize: '',
  mode: 'online',
  prizePool: '',
  guidelines: '',
  rules: '',
  themes: [],
  eligibility: '',
  timeline: '',
  registrationDeadline: ''
};

export default function Host() {
  const [formData, setFormData] = useState(initialFormData);
  const [theme, setTheme] = useState('');
  const [hostedHackathons, setHostedHackathons] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedHackathons = localStorage.getItem('hostedHackathons');
    if (savedHackathons) {
      setHostedHackathons(JSON.parse(savedHackathons));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleThemeAdd = () => {
    if (theme && !formData.themes.includes(theme)) {
      setFormData(prev => ({
        ...prev,
        themes: [...prev.themes, theme]
      }));
      setTheme('');
    }
  };

  const handleThemeRemove = (themeToRemove) => {
    setFormData(prev => ({
      ...prev,
      themes: prev.themes.filter(t => t !== themeToRemove)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHackathon = {
      ...formData,
      id: Date.now(),
      status: 'upcoming'
    };
    
    const updatedHackathons = [...hostedHackathons, newHackathon];
    setHostedHackathons(updatedHackathons);
    localStorage.setItem('hostedHackathons', JSON.stringify(updatedHackathons));
    
    setIsSubmitted(true);
    setFormData(initialFormData);
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }} 
        className="flex flex-col md:flex-row items-center gap-8 mb-12"
      >
        <motion.div 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.2 }} 
          className="bg-blue-100 rounded-full p-8 shadow-lg mb-4 md:mb-0"
        >
          <PresentationChartBarIcon className="h-16 w-16 text-blue-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Host Your Hackathon</h1>
          <p className="text-lg text-blue-700 mb-4">Create and manage your own hackathon event on DEVNoVATE.</p>
        </div>
      </motion.div>

      {/* Host Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="bg-white rounded-xl shadow-xl p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Basic Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 mb-2">Hackathon Name</label>
                <input
                  type="text"
                  name="hackathonName"
                  value={formData.hackathonName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-700 mb-2">Prize Pool</label>
                <input
                  type="text"
                  name="prizePool"
                  value={formData.prizePool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-blue-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Timeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-blue-700 mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-700 mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-700 mb-2">Registration Deadline</label>
                <input
                  type="date"
                  name="registrationDeadline"
                  value={formData.registrationDeadline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 mb-2">Team Size</label>
                <input
                  type="number"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-blue-700 mb-2">Mode</label>
                <select
                  name="mode"
                  value={formData.mode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-blue-700 mb-2">Themes</label>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add a theme"
                />
                <button
                  type="button"
                  onClick={handleThemeAdd}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.themes.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full flex items-center gap-2"
                  >
                    {t}
                    <button
                      type="button"
                      onClick={() => handleThemeRemove(t)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-blue-700 mb-2">Guidelines</label>
              <textarea
                name="guidelines"
                value={formData.guidelines}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>

            <div>
              <label className="block text-blue-700 mb-2">Rules</label>
              <textarea
                name="rules"
                value={formData.rules}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Host Hackathon
          </motion.button>
        </form>
      </motion.div>

      {/* Success Message */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Hackathon created successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hosted Hackathons */}
      {hostedHackathons.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-900">Your Hosted Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hostedHackathons.map((hackathon) => (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{hackathon.hackathonName}</h3>
                <p className="text-blue-700 mb-4">{hackathon.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-blue-600">
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{new Date(hackathon.startDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{hackathon.teamSize} members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GlobeAltIcon className="h-4 w-4" />
                    <span>{hackathon.mode}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 