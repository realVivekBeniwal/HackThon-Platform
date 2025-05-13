import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentMagnifyingGlassIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

export default function PendingReviews() {
  const [pendingSubmissions, setPendingSubmissions] = useState([]);

  useEffect(() => {
    // Load pending submissions from localStorage
    const savedSubmissions = localStorage.getItem('hackathonSubmissions');
    if (savedSubmissions) {
      const allSubmissions = JSON.parse(savedSubmissions);
      // Filter for unreviewed submissions
      const pending = allSubmissions.filter(sub => !sub.reviewed);
      setPendingSubmissions(pending);
    }
  }, []);

  const handleStartReview = (submissionId) => {
    // Navigate to detailed review page
    window.location.href = `/dashboard/review/${submissionId}`;
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pending Reviews</h1>
        <p className="mt-2 text-gray-600">Projects waiting for your evaluation.</p>
      </div>

      {pendingSubmissions.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hackathon
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted On
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingSubmissions.map((submission) => (
                <motion.tr
                  key={submission.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <DocumentMagnifyingGlassIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.projectName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {submission.projectDescription}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{submission.teamName}</div>
                    <div className="text-sm text-gray-500">{submission.teamMembers.join(', ')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{submission.hackathonName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(submission.submittedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleStartReview(submission.id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Start Review
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-white rounded-lg shadow-md"
        >
          <DocumentMagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No pending reviews</h3>
          <p className="mt-1 text-sm text-gray-500">
            You're all caught up! Check back later for new submissions.
          </p>
        </motion.div>
      )}
    </div>
  );
} 