import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  HomeIcon,
  BookOpenIcon,
  CodeBracketIcon,
  TrophyIcon,
  UserGroupIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

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
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary-700 tracking-tight">DEV</span>
          <span className="text-2xl font-bold text-blue-800 tracking-tight">NoVATE</span>
        </div>
        {/* Search Bar */}
        <div className="flex-1 mx-8 hidden md:block">
          <input
            type="text"
            placeholder="Search Opportunities"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-400 focus:outline-none"
          />
        </div>
        {/* Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-150">
              {link.icon && <link.icon className="h-5 w-5 mr-1" />}
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Host & Login Buttons */}
        <div className="flex items-center space-x-2 ml-4">
          <button
            onClick={() => navigate('/host')}
            className="px-4 py-2 rounded-lg border border-primary-600 text-primary-600 font-semibold hover:bg-primary-50 transition-colors duration-150"
          >
            Host
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors duration-150"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
