import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UserCircleIcon,
  BriefcaseIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function ParticipantDashboard() {
  const [registeredHackathons, setRegisteredHackathons] = useState([]);
  const [teams, setTeams] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    skills: ['React', 'Node.js', 'Python'],
    achievements: [],
    points: 0
  });

  useEffect(() => {
    // Load data from localStorage
    const savedHackathons = localStorage.getItem('registeredHackathons');
    const savedTeams = localStorage.getItem('participantTeams');
    const savedSubmissions = localStorage.getItem('hackathonSubmissions');
    const savedProfile = localStorage.getItem('participantProfile');

    if (savedHackathons) setRegisteredHackathons(JSON.parse(savedHackathons));
    if (savedTeams) setTeams(JSON.parse(savedTeams));
    if (savedSubmissions) setSubmissions(JSON.parse(savedSubmissions));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  const stats = [
    { label: 'Hackathons', value: registeredHackathons.length, icon: BriefcaseIcon },
    { label: 'Teams', value: teams.length, icon: UserGroupIcon },
    { label: 'Submissions', value: submissions.length, icon: DocumentTextIcon },
    { label: 'Points', value: profile.points, icon: AcademicCapIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {profile.name}!</h1>
        <p className="mt-2 text-gray-600">Track your hackathon journey and manage your teams.</p>
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
                <Icon className="h-8 w-8 text-blue-500" />
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
            {registeredHackathons.map((hackathon) => (
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
                    {hackathon.teamSize} members
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* My Teams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">My Teams</h2>
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{team.name}</h3>
                    <p className="text-sm text-gray-500">{team.hackathonName}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    View Team
                  </button>
                </div>
                <div className="mt-2 flex gap-4">
                  {team.members.map((member, index) => (
                    <img
                      key={index}
                      src={member.avatar}
                      alt={member.name}
                      className="h-8 w-8 rounded-full"
                    />
                  ))}
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
            {submissions.map((submission) => (
              <div key={submission.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.hackathonName}</h3>
                    <p className="text-sm text-gray-500">Submitted {submission.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    submission.status === 'accepted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {submission.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <DocumentTextIcon className="h-4 w-4" />
                  <span>{submission.fileName}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="space-y-4">
            {profile.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 