import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeBracketIcon, ClipboardDocumentCheckIcon, AcademicCapIcon, SparklesIcon, ArrowRightIcon, UserCircleIcon, StarIcon } from '@heroicons/react/24/outline';

const practiceTracks = [
  { name: '100 Days of Coding', icon: CodeBracketIcon, progress: 80, color: 'from-purple-200/80 to-purple-100/80' },
  { name: 'Mock Interviews', icon: ClipboardDocumentCheckIcon, progress: 60, color: 'from-purple-100/80 to-purple-200/80' },
  { name: 'Interview Prep', icon: AcademicCapIcon, progress: 40, color: 'from-purple-50/80 to-purple-100/80' },
  { name: 'Coding Sprints', icon: SparklesIcon, progress: 55, color: 'from-purple-100/80 to-purple-300/80' },
];

const featuredChallenges = [
  { title: 'LeetCode Weekly', desc: 'Weekly coding contests to test your skills.', mentor: 'Amit Sharma', icon: CodeBracketIcon },
  { title: 'System Design Sprint', desc: 'Practice system design interviews.', mentor: 'Priya Verma', icon: ClipboardDocumentCheckIcon },
  { title: 'DSA Marathon', desc: 'Data Structures & Algorithms challenge.', mentor: 'Rahul Singh', icon: SparklesIcon },
  { title: 'Frontend Flash', desc: 'Frontend coding sprints.', mentor: 'Sara Khan', icon: CodeBracketIcon },
];

const mockInterviews = [
  { title: 'Tech Interview', date: '2024-07-12', mentor: 'Amit Sharma' },
  { title: 'HR Interview', date: '2024-07-18', mentor: 'Priya Verma' },
  { title: 'Managerial Round', date: '2024-07-25', mentor: 'Rahul Singh' },
];

const mentors = [
  { name: 'Amit Sharma', bio: 'Ex-Google, 10+ years in web dev', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Verma', bio: 'Interview Coach, IIT Delhi', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul Singh', bio: 'DSA Expert, Flipkart', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

const testimonials = [
  { name: 'Sara Khan', text: 'Mock interviews gave me real confidence for my job hunt!', img: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 5 },
  { name: 'Vikram Patel', text: 'The coding sprints are challenging and fun.', img: 'https://randomuser.me/api/portraits/men/71.jpg', rating: 4 },
  { name: 'Anjali Mehta', text: 'I cracked my first interview after the 100 Days of Coding!', img: 'https://randomuser.me/api/portraits/women/12.jpg', rating: 5 },
];

const faqs = [
  { q: 'Are all challenges free?', a: 'Most challenges are free, some premium sprints are paid.' },
  { q: 'Can I get feedback on my code?', a: 'Yes, mentors and peers provide feedback on submissions.' },
  { q: 'How do I join a mock interview?', a: "Just click the join button and you'll get a calendar invite and link." },
  { q: 'Can I practice with friends?', a: 'Yes, you can form teams for many challenges.' },
];

export default function Practice() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <CodeBracketIcon className="h-16 w-16 text-purple-600 dark:text-purple-400 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-purple-900 dark:text-purple-100 mb-2">Practice & Prepare</h1>
          <p className="text-lg text-purple-700 dark:text-purple-300 mb-4">Sharpen your coding, interview, and problem-solving skills with real challenges and expert mentors.</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Start Practicing</motion.button>
        </div>
      </motion.div>
      {/* Practice Tracks */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Practice Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practiceTracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.04 }} className={`glassmorphism bg-gradient-to-br ${track.color} dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl p-6 flex items-center gap-6`}>
                <Icon className="h-12 w-12 text-purple-600 dark:text-purple-400 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{track.name}</h3>
                  <div className="w-full bg-purple-200 dark:bg-purple-900/50 rounded-full h-3 mb-2">
                    <div className="bg-purple-600 dark:bg-purple-500 h-3 rounded-full" style={{ width: `${track.progress}%` }}></div>
                  </div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm">{track.progress}% completed</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Featured Challenges */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Featured Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredChallenges.map((challenge, i) => {
            const Icon = challenge.icon;
            return (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex items-center gap-6">
                <Icon className="h-10 w-10 text-purple-600 dark:text-purple-400 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{challenge.title}</h3>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-1">{challenge.desc}</p>
                  <span className="text-xs text-purple-500 dark:text-purple-400">Mentor: {challenge.mentor}</span>
                </div>
                <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition flex items-center">Join <ArrowRightIcon className="h-4 w-4 ml-1" /></motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Mock Interviews */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Mock Interviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockInterviews.map((mock, i) => (
            <motion.div key={mock.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <ClipboardDocumentCheckIcon className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-2 animate-pulse" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{mock.title}</h3>
              <span className="text-purple-700 dark:text-purple-300 text-sm mb-1">Mentor: {mock.mentor}</span>
              <span className="text-xs text-purple-500 dark:text-purple-400 mb-2">{new Date(mock.date).toLocaleDateString()}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Join</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Mentor Spotlights */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Mentor Spotlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div key={mentor.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={mentor.img} alt={mentor.name} className="h-16 w-16 rounded-full mb-2" />
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">{mentor.name}</h3>
              <span className="text-purple-700 dark:text-purple-300 text-sm mb-2">{mentor.bio}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-semibold shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition">Book Session</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.12 }} className="bg-purple-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full mb-2" />
                <p className="text-purple-800 dark:text-purple-200 mb-2 text-center">"{t.text}"</p>
                <div className="flex mb-1">
                  {[...Array(t.rating)].map((_, idx) => <StarIcon key={idx} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="font-semibold text-purple-900 dark:text-purple-100">{t.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {/* FAQ Section */}
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
        <h2 className="text-3xl font-bold text-white mb-4">Ready to ace your next challenge?</h2>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg shadow hover:bg-purple-100 transition text-xl flex items-center">Start Practicing <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 