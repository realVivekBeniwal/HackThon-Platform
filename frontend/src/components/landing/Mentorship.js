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
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-purple-100 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <UserGroupIcon className="h-16 w-16 text-purple-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-purple-900 mb-2">Find Your Perfect Mentor</h1>
          <p className="text-lg text-purple-700 mb-4">Connect with industry experts, get career guidance, and accelerate your growth with personalized mentorship.</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">Get Started</motion.button>
        </div>
      </motion.div>

      {/* Mentor Categories */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Mentorship Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentorCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.04 }} className={`glassmorphism bg-gradient-to-br ${category.color} rounded-xl shadow-xl p-6 flex items-center gap-6`}>
                <Icon className="h-12 w-12 text-purple-600 animate-pulse" />
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-900 mb-1">{category.name}</h3>
                  <span className="text-purple-700 text-sm">{category.count}+ Available Mentors</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Mentors */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Featured Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredMentors.map((mentor, i) => (
            <motion.div key={mentor.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={mentor.img} alt={mentor.name} className="h-20 w-20 rounded-full mb-4" />
              <h3 className="font-semibold text-purple-900 text-center mb-1">{mentor.name}</h3>
              <p className="text-purple-700 text-sm text-center mb-2">{mentor.role}</p>
              <p className="text-purple-600 text-xs text-center mb-3">{mentor.expertise}</p>
              <div className="flex items-center gap-1 mb-4">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-purple-700">{mentor.rating}</span>
              </div>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">Book Session</motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Upcoming Group Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingSessions.map((session, i) => (
            <motion.div key={session.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-purple-50 rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-purple-900 mb-2">{session.title}</h3>
              <div className="flex items-center gap-2 text-purple-700 text-sm mb-2">
                <UserCircleIcon className="h-5 w-5" />
                <span>{session.mentor}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700 text-sm mb-2">
                <CalendarIcon className="h-5 w-5" />
                <span>{new Date(session.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700 text-sm mb-4">
                <ClockIcon className="h-5 w-5" />
                <span>{session.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 text-sm">{session.spots} spots left</span>
                <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold shadow hover:bg-purple-700 transition">Join</motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div key={story.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={story.img} alt={story.name} className="h-16 w-16 rounded-full mb-4" />
              <p className="text-purple-800 mb-4 text-center italic">"{story.text}"</p>
              <div className="flex mb-2">
                {[...Array(story.rating)].map((_, idx) => (
                  <StarIcon key={idx} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-purple-900">{story.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-purple-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white rounded-xl shadow-lg p-6">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full text-left font-semibold text-purple-900 text-lg">
                {faq.q}
                <span>{openFaq === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-purple-700 mt-2 text-sm overflow-hidden">{faq.a}</motion.p>
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