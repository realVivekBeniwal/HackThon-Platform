import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import {
  HomeIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  TrophyIcon,
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const { user } = useAuth();

  const getNavigationItems = () => {
    switch (user?.role) {
      case 'participant':
        return [
          { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
          { name: 'My Projects', icon: ClipboardDocumentListIcon, href: '/dashboard/projects' },
          { name: 'Available Hackathons', icon: TrophyIcon, href: '/dashboard/hackathons' },
        ];
      case 'judge':
        return [
          { name: 'Overview', icon: ChartBarIcon, href: '/dashboard', description: 'View judging statistics and upcoming evaluations' },
          { name: 'Pending Reviews', icon: DocumentMagnifyingGlassIcon, href: '/dashboard/pending-reviews', description: 'Projects waiting for your evaluation' },
          { name: 'Completed Reviews', icon: ClipboardDocumentCheckIcon, href: '/dashboard/completed-reviews', description: 'Projects you have already evaluated' },
        ];
      case 'organizer':
        return [
          { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
          { name: 'Manage Hackathons', icon: TrophyIcon, href: '/dashboard/manage-hackathons' },
          { name: 'Participants', icon: UserGroupIcon, href: '/dashboard/participants' },
          { name: 'Judges', icon: UserGroupIcon, href: '/dashboard/judges' },
        ];
      case 'recruiter':
        return [
          { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
          { name: 'Browse Projects', icon: ClipboardDocumentListIcon, href: '/dashboard/projects' },
          { name: 'Interested Candidates', icon: BriefcaseIcon, href: '/dashboard/candidates' },
        ];
      default:
        return [];
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen"
    >
      <div className="h-full px-3 py-4">
        <div className="mb-6 px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
          >
            DEVNoVATE
          </motion.h1>
        </div>
        <div className="space-y-1">
          {getNavigationItems().map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col px-4 py-3 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-3" />
                <span className="font-medium">{item.name}</span>
              </div>
              {item.description && (
                <p className="mt-1 ml-8 text-xs text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar; 