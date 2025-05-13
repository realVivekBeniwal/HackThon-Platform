import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  PresentationChartBarIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function OrganizerDashboard() {
  const [activeHackathons, setActiveHackathons] = useState([]);
  const [participants, setParticipants] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalParticipants: 0,
    totalSubmissions: 0,
    totalPrizePool: 0,
    averageTeamSize: 0,
    participantGrowth: [],
    submissionRate: 0
  });

  useEffect(() => {
    // Load data from localStorage
    const savedHackathons = localStorage.getItem('hostedHackathons');
    const savedParticipants = localStorage.getItem('hackathonParticipants');
    const savedSubmissions = localStorage.getItem('hackathonSubmissions');
    const savedNotifications = localStorage.getItem('organizerNotifications');
    const savedAnalytics = localStorage.getItem('hackathonAnalytics');

    if (savedHackathons) setActiveHackathons(JSON.parse(savedHackathons));
    if (savedParticipants) setParticipants(JSON.parse(savedParticipants));
    if (savedSubmissions) setSubmissions(JSON.parse(savedSubmissions));
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
    if (savedAnalytics) setAnalytics(JSON.parse(savedAnalytics));
  }, []);

  const stats = [
    { label: 'Active Hackathons', value: activeHackathons.length, icon: PresentationChartBarIcon },
    { label: 'Total Participants', value: analytics.totalParticipants, icon: UsersIcon },
    { label: 'Total Prize Pool', value: `₹${analytics.totalPrizePool.toLocaleString()}`, icon: CurrencyDollarIcon },
    { label: 'Submission Rate', value: `${analytics.submissionRate}%`, icon: ChartBarIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Organizer Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your hackathons and track their progress.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-purple-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Active Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Hackathons</h2>
          <div className="space-y-4">
            {activeHackathons.map((hackathon) => (
              <div key={hackathon.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{hackathon.name}</h3>
                    <p className="text-sm text-gray-500">{hackathon.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    hackathon.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {hackathon.status}
                  </span>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    {hackathon.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    {hackathon.participantCount} participants
                  </span>
                  <span className="flex items-center gap-1">
                    <DocumentTextIcon className="h-4 w-4" />
                    {hackathon.submissionCount} submissions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Submissions</h2>
          <div className="space-y-4">
            {submissions.slice(0, 5).map((submission) => (
              <div key={submission.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.teamName}</h3>
                    <p className="text-sm text-gray-500">{submission.hackathonName}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    submission.status === 'evaluated' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {submission.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <ClockIcon className="h-4 w-4" />
                  <span>Submitted {new Date(submission.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Analytics Overview</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Participant Growth</h3>
              <div className="h-32 bg-gray-50 rounded-lg">
                {/* Add chart component here */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Average Team Size</p>
                <p className="text-2xl font-bold text-purple-600">{analytics.averageTeamSize}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Submission Rate</p>
                <p className="text-2xl font-bold text-blue-600">{analytics.submissionRate}%</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Notifications</h2>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-4 border-b border-gray-200 pb-4">
                <div className={`p-2 rounded-full ${
                  notification.type === 'success' ? 'bg-green-100' : 
                  notification.type === 'warning' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <BellIcon className={`h-6 w-6 ${
                    notification.type === 'success' ? 'text-green-500' :
                    notification.type === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{notification.title}</p>
                  <p className="text-sm text-gray-500">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 