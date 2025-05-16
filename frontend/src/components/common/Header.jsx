import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HomeIcon,
  BookOpenIcon,
  CodeBracketIcon,
  TrophyIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Learn', path: '/learn', icon: BookOpenIcon },
  { name: 'Practice', path: '/practice', icon: CodeBracketIcon },
  { name: 'Compete', path: '/compete', icon: TrophyIcon },
  { name: 'Mentorship', path: '/mentorship', icon: UserGroupIcon },
  { name: 'Jobs', path: '/jobs', icon: BriefcaseIcon },
  { name: 'Blogs', path: '/blogs', icon: ChatBubbleLeftRightIcon },
];

const Header = () => {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-700 dark:text-primary-400 tracking-tight">DEV</span>
            <span className="text-2xl font-bold text-blue-800 dark:text-blue-300 tracking-tight">NoVATE</span>
          </div>
          {/* Search Bar */}
          <div className="flex-1 mx-8 hidden md:block">
            <input
              type="text"
              placeholder="Search Opportunities"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-400 focus:outline-none"
            />
          </div>
          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link key={link.name} to={link.path} className="flex items-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-150">
                {link.icon && <link.icon className="h-5 w-5 mr-1" />}
                {link.name}
              </Link>
            ))}
          </nav>
          {/* Dark Mode Toggle & Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => navigate('/host')}
              className="px-4 py-2 rounded-lg border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-150"
            >
              Host
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 rounded-lg bg-primary-600 dark:bg-primary-500 text-white font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-150"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
