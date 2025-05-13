import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  BriefcaseIcon,
  StarIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  CheckCircleIcon,
  BookmarkIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function RecruiterDashboard() {
  const [candidates, setCandidates] = useState([]);
  const [jobPostings, setJobPostings] = useState([]);
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalCandidates: 0,
    shortlisted: 0,
    interviewed: 0,
    hired: 0,
    applicationRate: 0,
    averageRating: 0
  });

  useEffect(() => {
    // Load data from localStorage
    const savedCandidates = localStorage.getItem('recruiterCandidates');
    const savedJobs = localStorage.getItem('recruiterJobs');
    const savedProfiles = localStorage.getItem('savedProfiles');
    const savedAnalytics = localStorage.getItem('recruiterAnalytics');

    if (savedCandidates) setCandidates(JSON.parse(savedCandidates));
    if (savedJobs) setJobPostings(JSON.parse(savedJobs));
    if (savedProfiles) setSavedProfiles(JSON.parse(savedProfiles));
    if (savedAnalytics) setAnalytics(JSON.parse(savedAnalytics));
  }, []);

  const handleStatusChange = (candidateId, newStatus) => {
    const updatedCandidates = candidates.map(candidate => {
      if (candidate.id === candidateId) {
        return { ...candidate, status: newStatus };
      }
      return candidate;
    });

    setCandidates(updatedCandidates);
    localStorage.setItem('recruiterCandidates', JSON.stringify(updatedCandidates));
  };

  const stats = [
    { label: 'Total Candidates', value: analytics.totalCandidates, icon: UserGroupIcon },
    { label: 'Active Jobs', value: jobPostings.length, icon: BriefcaseIcon },
    { label: 'Application Rate', value: `${analytics.applicationRate}%`, icon: ChartBarIcon },
    { label: 'Avg. Rating', value: analytics.averageRating.toFixed(1), icon: StarIcon },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Recruiter Dashboard</h1>
        <p className="mt-2 text-gray-600">Track and manage your recruitment pipeline.</p>
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
                <Icon className="h-8 w-8 text-indigo-500" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Candidate Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Candidate Pipeline</h2>
          <div className="space-y-4">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                      <p className="text-sm text-gray-500">{candidate.role}</p>
                    </div>
                  </div>
                  <select
                    value={candidate.status}
                    onChange={(e) => handleStatusChange(candidate.id, e.target.value)}
                    className="px-3 py-1 rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="new">New</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="hired">Hired</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <AcademicCapIcon className="h-4 w-4" />
                    {candidate.skills.join(', ')}
                  </span>
                  <span className="flex items-center gap-1">
                    <BuildingOfficeIcon className="h-4 w-4" />
                    {candidate.experience} years
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Active Job Postings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Active Job Postings</h2>
          <div className="space-y-4">
            {jobPostings.map((job) => (
              <div key={job.id} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800">
                    {job.applicants} applicants
                  </span>
                </div>
                <div className="mt-2 flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <BuildingOfficeIcon className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <BriefcaseIcon className="h-4 w-4" />
                    {job.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Saved Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Saved Profiles</h2>
          <div className="space-y-4">
            {savedProfiles.map((profile) => (
              <div key={profile.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                    <p className="text-sm text-gray-500">{profile.skills.join(', ')}</p>
                  </div>
                </div>
                <BookmarkIcon className="h-5 w-5 text-indigo-500" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recruitment Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recruitment Analytics</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Shortlisted</p>
                <p className="text-2xl font-bold text-indigo-600">{analytics.shortlisted}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Interviewed</p>
                <p className="text-2xl font-bold text-green-600">{analytics.interviewed}</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Hired</p>
                <p className="text-2xl font-bold text-blue-600">{analytics.hired}</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-500">Success Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  {((analytics.hired / analytics.totalCandidates) * 100).toFixed(1)}%
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Hiring Pipeline</h3>
              <div className="h-32 bg-gray-50 rounded-lg">
                {/* Add chart component here */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 