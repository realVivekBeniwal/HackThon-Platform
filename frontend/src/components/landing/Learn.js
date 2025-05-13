import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, UsersIcon, VideoCameraIcon, AcademicCapIcon, CodeBracketIcon, SparklesIcon, ArrowRightIcon, UserCircleIcon, StarIcon } from '@heroicons/react/24/outline';

const learningTracks = [
  { name: 'Frontend Development', icon: CodeBracketIcon, progress: 70, color: 'from-blue-200/80 to-blue-100/80' },
  { name: 'Backend Development', icon: CodeBracketIcon, progress: 50, color: 'from-purple-200/80 to-purple-100/80' },
  { name: 'AI / Machine Learning', icon: SparklesIcon, progress: 30, color: 'from-yellow-200/80 to-yellow-100/80' },
  { name: 'Data Science', icon: BookOpenIcon, progress: 60, color: 'from-green-200/80 to-green-100/80' },
];

const featuredCourses = [
  { title: 'React for Beginners', desc: 'Build modern web apps with React.', mentor: 'Amit Sharma', icon: BookOpenIcon },
  { title: 'Node.js Mastery', desc: 'Backend development with Node.js.', mentor: 'Priya Verma', icon: CodeBracketIcon },
  { title: 'Intro to Machine Learning', desc: 'Start your ML journey.', mentor: 'Rahul Singh', icon: SparklesIcon },
  { title: 'Data Analysis with Python', desc: 'Analyze data like a pro.', mentor: 'Sara Khan', icon: BookOpenIcon },
];

const liveCohorts = [
  { title: 'Fullstack Bootcamp', date: '2024-07-10', mentor: 'Amit Sharma' },
  { title: 'AI for Everyone', date: '2024-07-15', mentor: 'Priya Verma' },
  { title: 'Data Science Live', date: '2024-07-20', mentor: 'Rahul Singh' },
];

const mentors = [
  { name: 'Amit Sharma', bio: 'Ex-Google, 10+ years in web dev', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Priya Verma', bio: 'AI/ML Specialist, IIT Delhi', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul Singh', bio: 'Data Scientist, Flipkart', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

const testimonials = [
  { name: 'Sara Khan', text: 'The courses are super practical and the mentors are awesome!', img: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 5 },
  { name: 'Vikram Patel', text: 'I landed my first internship after completing the learning track.', img: 'https://randomuser.me/api/portraits/men/71.jpg', rating: 4 },
  { name: 'Anjali Mehta', text: 'Live cohorts helped me stay motivated and learn faster.', img: 'https://randomuser.me/api/portraits/women/12.jpg', rating: 5 },
];

const faqs = [
  { q: 'Are all courses free?', a: 'Many courses are free, and some premium tracks are paid.' },
  { q: 'Can I get a certificate?', a: 'Yes, you get a certificate after completing a track or course.' },
  { q: 'How do I join a live cohort?', a: "Just click the join button and you'll get a calendar invite and link." },
  { q: 'Can I ask mentors questions?', a: 'Yes, you can book 1:1 sessions or ask in the community.' },
];

export default function Learn() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-blue-100 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <BookOpenIcon className="h-16 w-16 text-blue-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Learn & Upskill</h1>
          <p className="text-lg text-blue-700 mb-4">Master in-demand skills with curated tracks, live cohorts, and expert mentors. Get certified and boost your career!</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Start Learning</motion.button>
        </div>
      </motion.div>
      {/* Learning Tracks */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Learning Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningTracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div key={track.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.04 }} className={`glassmorphism bg-gradient-to-br ${track.color} rounded-xl shadow-xl p-6 flex items-center gap-6`}>
                <Icon className="h-12 w-12 text-blue-600 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{track.name}</h3>
                  <div className="w-full bg-blue-200 rounded-full h-3 mb-2">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${track.progress}%` }}></div>
                  </div>
                  <span className="text-blue-700 text-sm">{track.progress}% completed</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Featured Courses */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCourses.map((course, i) => {
            const Icon = course.icon;
            return (
              <motion.div key={course.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6">
                <Icon className="h-10 w-10 text-blue-600 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{course.title}</h3>
                  <p className="text-blue-700 text-sm mb-1">{course.desc}</p>
                  <span className="text-xs text-blue-500">Mentor: {course.mentor}</span>
                </div>
                <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition flex items-center">Enroll <ArrowRightIcon className="h-4 w-4 ml-1" /></motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Live Cohorts */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Live Cohorts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {liveCohorts.map((cohort, i) => (
            <motion.div key={cohort.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <VideoCameraIcon className="h-10 w-10 text-blue-600 mb-2 animate-pulse" />
              <h3 className="font-semibold text-blue-900 mb-1">{cohort.title}</h3>
              <span className="text-blue-700 text-sm mb-1">Mentor: {cohort.mentor}</span>
              <span className="text-xs text-blue-500 mb-2">{new Date(cohort.date).toLocaleDateString()}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Join</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Mentor Spotlights */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Mentor Spotlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <motion.div key={mentor.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={mentor.img} alt={mentor.name} className="h-16 w-16 rounded-full mb-2" />
              <h3 className="font-semibold text-blue-900 mb-1">{mentor.name}</h3>
              <span className="text-blue-700 text-sm mb-2">{mentor.bio}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Book Session</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Student Success Stories */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ delay: i * 0.12 }} className="bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center">
                <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full mb-2" />
                <p className="text-blue-800 mb-2 text-center">"{t.text}"</p>
                <div className="flex mb-1">
                  {[...Array(t.rating)].map((_, idx) => <StarIcon key={idx} className="h-5 w-5 text-yellow-400" />)}
                </div>
                <span className="font-semibold text-blue-900">{t.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white rounded-xl shadow-lg p-6">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full text-left font-semibold text-blue-900 text-lg">
                {faq.q}
                <span>{openFaq === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-blue-700 mt-2 text-sm overflow-hidden">{faq.a}</motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-xl p-10 flex flex-col items-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start your learning journey?</h2>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow hover:bg-blue-100 transition text-xl flex items-center">Start Now <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 