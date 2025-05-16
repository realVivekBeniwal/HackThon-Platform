import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon, ChatBubbleLeftRightIcon, ClockIcon, StarIcon, ArrowRightIcon, UserCircleIcon, CalendarIcon } from '@heroicons/react/24/outline';

const mentorCategories = [
  { name: 'Technical Mentors', icon: AcademicCapIcon, count: 150, color: 'from-purple-50/80 to-purple-100/80' },
  { name: 'Career Coaches', icon: UserGroupIcon, count: 75, color: 'from-purple-100/80 to-purple-200/80' },
  { name: 'Industry Experts', icon: UserCircleIcon, count: 100, color: 'from-purple-200/80 to-purple-100/80' },
  { name: 'Peer Mentors', icon: ChatBubbleLeftRightIcon, count: 200, color: 'from-purple-100/80 to-purple-300/80' },
];

const featuredMentors = [
  { name: 'Dr. Rajesh Kumar', role: 'Senior Tech Lead at Google', expertise: 'AI/ML, System Design', img: 'https://randomuser.me/api/portraits/men/1.jpg', rating: 4.9 },
  { name: 'Priya Sharma', role: 'Engineering Manager at Amazon', expertise: 'Web Development, Leadership', img: 'https://randomuser.me/api/portraits/women/2.jpg', rating: 4.8 },
  { name: 'Amit Patel', role: 'Product Manager at Microsoft', expertise: 'Product Strategy, UX', img: 'https://randomuser.me/api/portraits/men/3.jpg', rating: 4.7 },
  { name: 'Sneha Gupta', role: 'Senior Developer at Flipkart', expertise: 'Frontend, Mobile Dev', img: 'https://randomuser.me/api/portraits/women/4.jpg', rating: 4.9 },
];

const upcomingSessions = [
  { title: 'System Design Workshop', mentor: 'Dr. Rajesh Kumar', date: '2024-08-10', time: '14:00', spots: 25 },
  { title: 'Career Transition Tips', mentor: 'Priya Sharma', date: '2024-08-12', time: '16:00', spots: 30 },
  { title: 'Product Management 101', mentor: 'Amit Patel', date: '2024-08-15', time: '15:00', spots: 20 },
];

const successStories = [
  { name: 'Rahul Verma', text: 'My mentor helped me land my dream job at Google!', img: 'https://randomuser.me/api/portraits/men/15.jpg', rating: 5 },
  { name: 'Ananya Singh', text: 'The career guidance was invaluable for my growth.', img: 'https://randomuser.me/api/portraits/women/16.jpg', rating: 5 },
  { name: 'Karan Shah', text: 'Regular mentoring sessions boosted my confidence.', img: 'https://randomuser.me/api/portraits/men/17.jpg', rating: 4 },
];

const faqs = [
  { q: 'How do I choose a mentor?', a: 'Browse profiles, read reviews, and select based on your goals and their expertise.' },
  { q: 'Is mentorship free?', a: 'We offer both free and premium mentorship programs.' },
  { q: 'How long are mentorship sessions?', a: 'Sessions typically last 45-60 minutes.' },
  { q: 'Can I change my mentor?', a: 'Yes, you can switch mentors if you feel the need to.' },
];

export default function Mentorship() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <UserGroupIcon className="h-16 w-16 text-purple-600 dark:text-purple-400 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-2">Find Your Perfect Mentor</h1>
          <p className="text-lg text-purple-700 dark:text-purple-300 mb-4">Connect with industry experts, get career guidance, and accelerate your growth with personalized mentorship.</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Get Started</motion.button>
        </div>
      </motion.div>

      {/* Mentor Categories */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Mentor Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentorCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.04 }} className={`glassmorphism bg-gradient-to-br ${category.color} dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-6 flex items-center gap-6`}>
                <Icon className="h-12 w-12 text-purple-600 dark:text-purple-400 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{category.name}</h3>
                  <span className="text-purple-700 dark:text-purple-300 text-sm">{category.count} mentors available</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Mentors */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Featured Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMentors.map((mentor, i) => (
            <motion.div key={mentor.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={mentor.img} alt={mentor.name} className="h-20 w-20 rounded-full mb-4" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 text-center mb-1">{mentor.name}</h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm text-center mb-2">{mentor.role}</p>
              <p className="text-purple-600 dark:text-purple-400 text-xs text-center mb-3">{mentor.expertise}</p>
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-purple-700 dark:text-purple-300">{mentor.rating}</span>
              </div>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Book Session</motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Upcoming Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingSessions.map((session, i) => (
            <motion.div key={session.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <CalendarIcon className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-2 animate-pulse" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{session.title}</h3>
              <span className="text-purple-700 dark:text-purple-300 text-sm mb-1">Mentor: {session.mentor}</span>
              <span className="text-xs text-purple-500 dark:text-purple-400 mb-2">{new Date(session.date).toLocaleDateString()} at {session.time}</span>
              <span className="text-xs text-purple-500 dark:text-purple-400 mb-2">{session.spots} spots left</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Book Now</motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div key={story.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <img src={story.img} alt={story.name} className="h-12 w-12 rounded-full" />
                <div>
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100">{story.name}</h3>
                  <div className="flex items-center">
                    {[...Array(story.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-purple-700 dark:text-purple-300">{story.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-purple-900 dark:text-purple-100">{faq.q}</span>
                <ArrowRightIcon
                  className={`h-5 w-5 text-purple-600 dark:text-purple-400 transform transition-transform ${
                    openFaq === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-purple-700 dark:text-purple-300">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl shadow-xl p-10 flex flex-col items-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to accelerate your growth?</h2>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg shadow hover:bg-purple-100 transition text-xl flex items-center">Find a Mentor <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 