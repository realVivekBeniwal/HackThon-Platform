import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrophyIcon, RocketLaunchIcon, UsersIcon, FireIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';

const competitionTypes = [
  { name: 'Hackathons', icon: TrophyIcon, progress: 90, color: 'from-blue-50/80 to-blue-100/80' },
  { name: 'Coding Contests', icon: FireIcon, progress: 75, color: 'from-blue-100/80 to-blue-200/80' },
  { name: 'Team Challenges', icon: UsersIcon, progress: 60, color: 'from-blue-200/80 to-blue-100/80' },
  { name: 'Speed Runs', icon: RocketLaunchIcon, progress: 50, color: 'from-blue-100/80 to-blue-300/80' },
];

const featuredHackathons = [
  { title: 'AI Innovation Challenge', desc: 'Build innovative AI solutions.', organizer: 'Google', icon: TrophyIcon },
  { title: 'Web3 Hackfest', desc: 'Create decentralized apps.', organizer: 'Flipkart', icon: RocketLaunchIcon },
  { title: 'CodeSprint', desc: 'Compete in timed coding rounds.', organizer: 'Amazon', icon: FireIcon },
  { title: 'TeamUp', desc: 'Collaborate in team-based challenges.', organizer: 'Microsoft', icon: UsersIcon },
];

const teamChallenges = [
  { title: 'Build with Friends', date: '2024-08-10', organizer: 'Google' },
  { title: 'Team Coding Relay', date: '2024-08-15', organizer: 'Amazon' },
  { title: 'Innovation Jam', date: '2024-08-20', organizer: 'Flipkart' },
];

const judges = [
  { name: 'Dr. Neha Gupta', bio: 'AI Researcher, Google', img: 'https://randomuser.me/api/portraits/women/50.jpg' },
  { name: 'Rohan Mehta', bio: 'Lead Engineer, Amazon', img: 'https://randomuser.me/api/portraits/men/51.jpg' },
  { name: 'Sonal Jain', bio: 'Blockchain Expert, Flipkart', img: 'https://randomuser.me/api/portraits/women/52.jpg' },
];

const testimonials = [
  { name: 'Sara Khan', text: 'Winning the AI Innovation Challenge changed my career!', img: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 5 },
  { name: 'Vikram Patel', text: 'Team challenges helped me build leadership skills.', img: 'https://randomuser.me/api/portraits/men/71.jpg', rating: 4 },
  { name: 'Anjali Mehta', text: 'The hackathons are super fun and rewarding.', img: 'https://randomuser.me/api/portraits/women/12.jpg', rating: 5 },
];

const faqs = [
  { q: 'How do I register for a hackathon?', a: 'Click the register button on any hackathon card and follow the instructions.' },
  { q: 'Can I participate as a team?', a: 'Yes, most hackathons allow team participation.' },
  { q: 'Are there prizes?', a: 'Yes, winners receive prizes, certificates, and job opportunities.' },
  { q: 'Can I join multiple competitions?', a: 'Absolutely! Join as many as you like.' },
];

export default function Compete() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-blue-100 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <TrophyIcon className="h-16 w-16 text-blue-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Compete & Win</h1>
          <p className="text-lg text-blue-700 mb-4">Showcase your skills in hackathons, coding contests, and team challenges. Win prizes, recognition, and job offers!</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Start Competing</motion.button>
        </div>
      </motion.div>
      {/* Competition Types */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Competition Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitionTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <motion.div key={type.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} whileHover={{ scale: 1.04 }} className={`glassmorphism bg-gradient-to-br ${type.color} rounded-xl shadow-xl p-6 flex items-center gap-6`}>
                <Icon className="h-12 w-12 text-blue-600 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{type.name}</h3>
                  <div className="w-full bg-blue-200 rounded-full h-3 mb-2">
                    <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${type.progress}%` }}></div>
                  </div>
                  <span className="text-blue-700 text-sm">{type.progress}% popularity</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Featured Hackathons */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Featured Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredHackathons.map((hack, i) => {
            const Icon = hack.icon;
            return (
              <motion.div key={hack.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6">
                <Icon className="h-10 w-10 text-blue-600 animate-bounce" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{hack.title}</h3>
                  <p className="text-blue-700 text-sm mb-1">{hack.desc}</p>
                  <span className="text-xs text-blue-500">Organizer: {hack.organizer}</span>
                </div>
                <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition flex items-center">Register <ArrowRightIcon className="h-4 w-4 ml-1" /></motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Team Challenges */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Team Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamChallenges.map((challenge, i) => (
            <motion.div key={challenge.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-blue-50 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <UsersIcon className="h-10 w-10 text-blue-600 mb-2 animate-pulse" />
              <h3 className="font-semibold text-blue-900 mb-1">{challenge.title}</h3>
              <span className="text-blue-700 text-sm mb-1">Organizer: {challenge.organizer}</span>
              <span className="text-xs text-blue-500 mb-2">{new Date(challenge.date).toLocaleDateString()}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Join</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Judge Spotlights */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Judge Spotlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {judges.map((judge, i) => (
            <motion.div key={judge.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={judge.img} alt={judge.name} className="h-16 w-16 rounded-full mb-2" />
              <h3 className="font-semibold text-blue-900 mb-1">{judge.name}</h3>
              <span className="text-blue-700 text-sm mb-2">{judge.bio}</span>
              <motion.button whileHover={{ scale: 1.08 }} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">View Profile</motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Winner Stories */}
      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Winner Stories</h2>
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
        <h2 className="text-3xl font-bold text-white mb-4">Ready to compete and win?</h2>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg shadow hover:bg-blue-100 transition text-xl flex items-center">Start Competing <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 