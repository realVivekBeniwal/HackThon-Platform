import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardDocumentCheckIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function CompletedReviews() {
  const [completedReviews, setCompletedReviews] = useState([]);

  useEffect(() => {
    // Load completed reviews from localStorage
    const savedSubmissions = localStorage.getItem('hackathonSubmissions');
    if (savedSubmissions) {
      const allSubmissions = JSON.parse(savedSubmissions);
      // Filter for reviewed submissions
      const completed = allSubmissions.filter(sub => sub.reviewed);
      setCompletedReviews(completed);
    }
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>
        {index < rating ? (
          <StarIconSolid className="h-5 w-5 text-yellow-400" />
        ) : (
          <StarIcon className="h-5 w-5 text-gray-300" />
        )}
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Completed Reviews</h1>
        <p className="mt-2 text-gray-600">History of your project evaluations.</p>
      </div>

      {completedReviews.length > 0 ? (
        <div className="space-y-6">
          {completedReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <ClipboardDocumentCheckIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        {review.projectName}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {review.hackathonName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Team</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        {review.teamName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {review.teamMembers.join(', ')}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Reviewed On</h3>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(review.reviewedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-500">Feedback</h3>
                    <p className="mt-1 text-sm text-gray-900">
                      {review.feedback}
                    </p>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Strengths</h3>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-900">
                        {review.strengths.map((strength, index) => (
                          <li key={index}>{strength}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Areas for Improvement</h3>
                      <ul className="mt-1 list-disc list-inside text-sm text-gray-900">
                        {review.improvements.map((improvement, index) => (
                          <li key={index}>{improvement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 bg-white rounded-lg shadow-md"
        >
          <ClipboardDocumentCheckIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No completed reviews</h3>
          <p className="mt-1 text-sm text-gray-500">
            You haven't completed any project reviews yet.
          </p>
        </motion.div>
      )}
    </div>
  );
} 