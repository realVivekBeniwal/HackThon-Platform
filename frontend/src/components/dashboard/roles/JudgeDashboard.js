import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  StarIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function JudgeDashboard() {
  const [pendingSubmissions, setPendingSubmissions] = useState([]);
  const [evaluatedSubmissions, setEvaluatedSubmissions] = useState([]);
  const [assignedHackathons, setAssignedHackathons] = useState([]);
  const [profile, setProfile] = useState({
    name: 'Dr. Sarah Johnson',
    expertise: ['AI/ML', 'Web Development', 'Cloud Computing'],
    evaluationsCompleted: 0,
    rating: 4.8
  });

  useEffect(() => {
    // Load data from localStorage
    const savedPending = localStorage.getItem('pendingSubmissions');
    const savedEvaluated = localStorage.getItem('evaluatedSubmissions');
    const savedHackathons = localStorage.getItem('assignedHackathons');
    const savedProfile = localStorage.getItem('judgeProfile');

    if (savedPending) setPendingSubmissions(JSON.parse(savedPending));
    if (savedEvaluated) setEvaluatedSubmissions(JSON.parse(savedEvaluated));
    if (savedHackathons) setAssignedHackathons(JSON.parse(savedHackathons));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  const handleEvaluate = (submissionId, score, feedback) => {
    const submission = pendingSubmissions.find(s => s.id === submissionId);
    const evaluated = {
      ...submission,
      score,
      feedback,
      evaluatedAt: new Date().toISOString()
    };

    const updatedPending = pendingSubmissions.filter(s => s.id !== submissionId);
    const updatedEvaluated = [...evaluatedSubmissions, evaluated];

    setPendingSubmissions(updatedPending);
    setEvaluatedSubmissions(updatedEvaluated);
    
    localStorage.setItem('pendingSubmissions', JSON.stringify(updatedPending));
    localStorage.setItem('evaluatedSubmissions', JSON.stringify(updatedEvaluated));
  };

  const stats = [
    { label: 'Pending Reviews', value: pendingSubmissions.length, icon: ClipboardDocumentCheckIcon },
    { label: 'Evaluated', value: evaluatedSubmissions.length, icon: CheckCircleIcon },
    { label: 'Hackathons', value: assignedHackathons.length, icon: ChartBarIcon },
    { label: 'Rating', value: profile.rating, icon: StarIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, {profile.name}!</h1>
        <p className="mt-2 text-gray-600">Review and evaluate hackathon submissions.</p>
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
                <Icon className="h-8 w-8 text-green-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Submissions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Pending Submissions</h2>
          <div className="space-y-4">
            {pendingSubmissions.map((submission) => (
              <div key={submission.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.teamName}</h3>
                    <p className="text-sm text-gray-500">{submission.hackathonName}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleEvaluate(submission.id, 0, '')}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Evaluate
                  </motion.button>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                  <DocumentMagnifyingGlassIcon className="h-4 w-4" />
                  <a href={submission.submissionUrl} className="text-blue-500 hover:text-blue-700">
                    View Submission
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Assigned Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Assigned Hackathons</h2>
          <div className="space-y-4">
            {assignedHackathons.map((hackathon) => (
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
                    Deadline: {hackathon.evaluationDeadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    {hackathon.submissionCount} submissions
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Evaluations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Evaluations</h2>
          <div className="space-y-4">
            {evaluatedSubmissions.slice(0, 5).map((submission) => (
              <div key={submission.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{submission.teamName}</h3>
                    <p className="text-sm text-gray-500">{submission.hackathonName}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">{submission.score}/10</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{submission.feedback}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Evaluation Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Evaluation Guidelines</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Innovation & Creativity</h3>
                <p className="text-sm text-gray-600">Evaluate the uniqueness and creativity of the solution</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <CheckCircleIcon className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Technical Implementation</h3>
                <p className="text-sm text-gray-600">Assess the technical complexity and execution</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <CheckCircleIcon className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Impact & Scalability</h3>
                <p className="text-sm text-gray-600">Consider the potential impact and scalability of the solution</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 