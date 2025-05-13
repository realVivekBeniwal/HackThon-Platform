import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TagIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  SearchIcon
} from '@heroicons/react/24/outline';

export default function AvailableHackathons() {
  const [hackathons, setHackathons] = useState([]);
  const [filteredHackathons, setFilteredHackathons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    mode: 'all',
    teamSize: 'all',
    prizeRange: 'all',
    status: 'all'
  });

  useEffect(() => {
    // Load hackathons from localStorage
    const savedHackathons = localStorage.getItem('hostedHackathons');
    if (savedHackathons) {
      const parsedHackathons = JSON.parse(savedHackathons);
      setHackathons(parsedHackathons);
      setFilteredHackathons(parsedHackathons);
    }
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(query, filters);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    applyFilters(searchQuery, newFilters);
  };

  const applyFilters = (query, currentFilters) => {
    let filtered = [...hackathons];

    // Apply search query
    if (query) {
      filtered = filtered.filter(hackathon =>
        hackathon.hackathonName.toLowerCase().includes(query.toLowerCase()) ||
        hackathon.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Apply mode filter
    if (currentFilters.mode !== 'all') {
      filtered = filtered.filter(hackathon => hackathon.mode === currentFilters.mode);
    }

    // Apply team size filter
    if (currentFilters.teamSize !== 'all') {
      filtered = filtered.filter(hackathon => {
        const size = parseInt(hackathon.teamSize);
        switch (currentFilters.teamSize) {
          case 'small': return size <= 2;
          case 'medium': return size > 2 && size <= 4;
          case 'large': return size > 4;
          default: return true;
        }
      });
    }

    // Apply prize range filter
    if (currentFilters.prizeRange !== 'all') {
      filtered = filtered.filter(hackathon => {
        const prize = parseInt(hackathon.prizePool.replace(/[^0-9]/g, ''));
        switch (currentFilters.prizeRange) {
          case 'low': return prize <= 10000;
          case 'medium': return prize > 10000 && prize <= 50000;
          case 'high': return prize > 50000;
          default: return true;
        }
      });
    }

    // Apply status filter
    if (currentFilters.status !== 'all') {
      filtered = filtered.filter(hackathon => {
        const startDate = new Date(hackathon.startDate);
        const endDate = new Date(hackathon.endDate);
        const now = new Date();

        switch (currentFilters.status) {
          case 'upcoming': return startDate > now;
          case 'ongoing': return startDate <= now && endDate >= now;
          case 'completed': return endDate < now;
          default: return true;
        }
      });
    }

    setFilteredHackathons(filtered);
  };

  const handleRegister = (hackathonId) => {
    // Get user's registered hackathons
    const registeredHackathons = JSON.parse(localStorage.getItem('registeredHackathons') || '[]');
    
    // Add new registration
    if (!registeredHackathons.includes(hackathonId)) {
      registeredHackathons.push(hackathonId);
      localStorage.setItem('registeredHackathons', JSON.stringify(registeredHackathons));
      
      // Update hackathon's participant count
      const updatedHackathons = hackathons.map(h => {
        if (h.id === hackathonId) {
          return { ...h, participantCount: (h.participantCount || 0) + 1 };
        }
        return h;
      });
      
      setHackathons(updatedHackathons);
      localStorage.setItem('hostedHackathons', JSON.stringify(updatedHackathons));
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Hackathons</h1>
        <p className="mt-2 text-gray-600">Discover and participate in exciting hackathons.</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hackathons..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            Filters
          </motion.button>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.mode}
            onChange={(e) => handleFilterChange('mode', e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Modes</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="hybrid">Hybrid</option>
          </select>

          <select
            value={filters.teamSize}
            onChange={(e) => handleFilterChange('teamSize', e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Team Sizes</option>
            <option value="small">Small (1-2)</option>
            <option value="medium">Medium (3-4)</option>
            <option value="large">Large (5+)</option>
          </select>

          <select
            value={filters.prizeRange}
            onChange={(e) => handleFilterChange('prizeRange', e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prize Ranges</option>
            <option value="low">Up to ₹10,000</option>
            <option value="medium">₹10,000 - ₹50,000</option>
            <option value="high">Above ₹50,000</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Hackathons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHackathons.map((hackathon) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Hackathon Image */}
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                {hackathon.mode}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{hackathon.hackathonName}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{hackathon.description}</p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarIcon className="h-5 w-5" />
                  <span>{new Date(hackathon.startDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <UserGroupIcon className="h-5 w-5" />
                  <span>{hackathon.teamSize} members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <CurrencyDollarIcon className="h-5 w-5" />
                  <span>{hackathon.prizePool}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <ClockIcon className="h-5 w-5" />
                  <span>{hackathon.registrationDeadline}</span>
                </div>
              </div>

              {/* Themes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.themes.map((theme, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {theme}
                  </span>
                ))}
              </div>

              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRegister(hackathon.id)}
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Register Now
                <ArrowRightIcon className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredHackathons.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4">
            <SearchIcon className="h-12 w-12 text-gray-400 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No hackathons found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
} 