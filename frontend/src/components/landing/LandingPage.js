import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, BookOpenIcon, CodeBracketIcon, UserGroupIcon, TrophyIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, SparklesIcon, LightBulbIcon, UsersIcon, RocketLaunchIcon, CurrencyDollarIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../../context/ThemeContext';

const features = [
  { title: 'Learn', color: 'bg-blue-100', text: 'Learn new skills and grow your knowledge.', path: '/learn', icon: BookOpenIcon, illustration: '📘' },
  { title: 'Practice', color: 'bg-purple-100', text: 'Practice coding and interview skills.', path: '/practice', icon: CodeBracketIcon, illustration: '💻' },
  { title: 'Mentorships', color: 'bg-yellow-100', text: 'Get mentored by industry experts.', path: '/mentorship', icon: UserGroupIcon, illustration: '🧑‍🏫' },
  { title: 'Compete', color: 'bg-blue-50', text: 'Participate in challenges and hackathons.', path: '/compete', icon: TrophyIcon, illustration: '🚀' },
  { title: 'Jobs', color: 'bg-purple-50', text: 'Find jobs and internships.', path: '/jobs', icon: BriefcaseIcon, illustration: '🧑‍💼' },
  { title: 'Blogs', color: 'bg-yellow-50', text: 'Read and share knowledge.', path: '/blogs', icon: ChatBubbleLeftRightIcon, illustration: '📝' },
];

const banners = [
  {
    bg: 'bg-blue-900 text-white',
    text: "L'ORÉAL BRANDSTORM - Crack the new codes of beauty. Your playing field: AR, VR, AI & Metaverse",
    cta: 'Register Now',
    img: 'https://th.bing.com/th/id/R.d99d411abcdb25bf05efd0ee2d279a78?rik=lnML%2bx0bL0lazg&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f06%2fLogo-LOr%c3%a9al-symbole.jpg&ehk=D6E1ldj8iOzD1cSlrFN%2bWL5H6gkS8q0ct0AsVmrXxKE%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    bg: 'bg-yellow-400 text-blue-900',
    text: 'Flipkart Girls Wanna Code 4.0 - Learn, Code & Break Stereotypes. Training, Mentorship, PPI Opportunities',
    cta: 'Register Now',
    img: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png',
  },
  {
    bg: 'bg-purple-600 text-white',
    text: 'Amazon ML Challenge - Build, Innovate, and Win with Machine Learning!',
    cta: 'Participate',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    bg: 'bg-green-500 text-white',
    text: 'Google Summer of Code - Contribute to open source and get mentored by top developers.',
    cta: 'Apply Now',
    img: 'https://www.pngmart.com/files/23/Google-Logo-PNG-HD-1.png',
  },
];

const bannerVariants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

const exploreCards = [
  { title: 'College Students', icon: AcademicCapIcon, illustration: '🎓', color: 'from-orange-100/80 to-orange-50/80' },
  { title: 'Working Professionals', icon: BriefcaseIcon, illustration: '💼', color: 'from-yellow-100/80 to-yellow-50/80' },
  { title: 'Team Participation', icon: UsersIcon, illustration: '🤝', color: 'from-blue-100/80 to-blue-50/80' },
  { title: 'Individual Participation', icon: UserGroupIcon, illustration: '🧑‍💻', color: 'from-orange-100/80 to-orange-200/80' },
];

const hiredCards = [
  { title: 'Full-Time Jobs', icon: BriefcaseIcon, illustration: '💼', color: 'from-blue-100/80 to-blue-50/80' },
  { title: 'Part-Time Internships', icon: SparklesIcon, illustration: '🕒', color: 'from-blue-50/80 to-blue-100/80' },
  { title: 'Hiring Challenges', icon: RocketLaunchIcon, illustration: '🚀', color: 'from-orange-100/80 to-orange-50/80' },
  { title: 'Paid Internships', icon: CurrencyDollarIcon, illustration: '💸', color: 'from-blue-50/80 to-blue-200/80' },
];

const LandingPage = () => {
  const navigate = useNavigate();
  const [bannerIdx, setBannerIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const { isDarkMode, toggleTheme } = useTheme();

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      slideTo(bannerIdx + 1, 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [bannerIdx]);

  const slideTo = (idx, dir) => {
    setDirection(dir);
    setBannerIdx((idx + banners.length) % banners.length);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-16 md:py-24">
        {/* Left: Headline & Dots */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center">
              <div className="grid grid-cols-2 gap-1 mr-4">
                {[...Array(6)].map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-blue-200 dark:bg-blue-700"></span>
                ))}
              </div>
              <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300">Connecting</h2>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-2">Talent, Colleges, <br />Recruiters</h1>
          <div className="w-20 h-1 bg-yellow-400 mb-4"></div>
          <p className="text-lg text-blue-800 dark:text-blue-200 mb-8 max-w-md">
            Explore opportunities from across the globe to learn, showcase skills, gain CV points, & get hired by your dream company.
          </p>
        </div>
        {/* Right: Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-0">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className={`rounded-xl shadow-lg p-6 cursor-pointer ${f.color} dark:bg-opacity-20 group transition-all duration-200 relative overflow-hidden`}
              onClick={() => navigate(f.path)}
            >
              {/* Illustration/Photo */}
              <div className="flex items-center justify-center mb-2">
                <span className="text-4xl md:text-5xl drop-shadow-lg mr-2">{f.illustration}</span>
                <f.icon className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900 dark:text-blue-100 flex items-center">
                {f.title}
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">{f.text}</p>
              <motion.button
                whileHover={{ scale: 1.08 }}
                className="mt-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 text-blue-900 dark:text-blue-100 font-semibold rounded-lg shadow hover:bg-white dark:hover:bg-gray-800 transition flex items-center mx-auto"
              >
                <f.icon className="h-5 w-5 mr-1" />
                Explore
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Carousel/Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="overflow-hidden rounded-xl shadow-lg relative h-32">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={bannerIdx}
              custom={direction}
              variants={bannerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 400, damping: 40 }}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center font-bold text-xl px-8 ${banners[bannerIdx].bg}`}
            >
              {/* Banner image/logo */}
              <img
                src={banners[bannerIdx].img}
                alt="logo"
                className="h-14 w-14 object-contain rounded-xl bg-white/80 dark:bg-gray-800/80 p-2 mr-6 shadow-lg"
                style={{ minWidth: 56 }}
              />
              <span className="flex-1">{banners[bannerIdx].text}</span>
              <button className="ml-6 px-4 py-2 bg-white/80 dark:bg-gray-800/80 text-blue-900 dark:text-blue-100 font-semibold rounded-lg shadow hover:bg-white dark:hover:bg-gray-800 transition">{banners[bannerIdx].cta}</button>
            </motion.div>
          </AnimatePresence>
          {/* Left/Right Arrows */}
          <button
            onClick={() => slideTo(bannerIdx - 1, -1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow"
          >
            <ArrowLeftIcon className="h-6 w-6 text-blue-900 dark:text-blue-100" />
          </button>
          <button
            onClick={() => slideTo(bannerIdx + 1, 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow"
          >
            <ArrowRightIcon className="h-6 w-6 text-blue-900 dark:text-blue-100" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(i, i > bannerIdx ? 1 : -1)}
              className={`w-3 h-3 rounded-full ${i === bannerIdx ? 'bg-blue-900 dark:bg-blue-400' : 'bg-blue-200 dark:bg-blue-700'} transition`}
            />
          ))}
        </div>
      </div>
      {/* Explore Opportunities */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">Explore Opportunities</h2>
        <p className="text-blue-700 dark:text-blue-300 mb-6">Participate, Showcase Skills & Gain CV Points through online & offline opportunities of your interest & make your mark!</p>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" animate="visible">
          {exploreCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
              className={`glassmorphism bg-gradient-to-br ${card.color} dark:bg-opacity-20 rounded-xl p-4 flex flex-col items-center cursor-pointer group transition-all duration-200`}
            >
              <div className="flex items-center mb-2">
                <span className="text-3xl md:text-4xl drop-shadow-lg mr-2">{card.illustration}</span>
                <card.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="font-semibold text-blue-900 dark:text-blue-100">{card.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Get Hired */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">Get Hired</h2>
        <p className="text-blue-700 dark:text-blue-300 mb-6">Work with your dream companies by applying to hiring challenges and full-time & part-time jobs/internships.</p>
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial="hidden" animate="visible">
          {hiredCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
              className={`glassmorphism bg-gradient-to-br ${card.color} dark:bg-opacity-20 rounded-xl p-4 flex flex-col items-center cursor-pointer group transition-all duration-200`}
            >
              <div className="flex items-center mb-2">
                <span className="text-3xl md:text-4xl drop-shadow-lg mr-2">{card.illustration}</span>
                <card.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
              </div>
              <span className="font-semibold text-blue-900 dark:text-blue-100">{card.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Community Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">Join Our Community</h2>
        <p className="text-blue-700 dark:text-blue-300 mb-6">Connect with thousands of learners, mentors, and recruiters. Share your journey, ask questions, and grow together!</p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 flex-1 min-w-[250px] shadow">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Active Members</h3>
            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">12,000+</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6 flex-1 min-w-[250px] shadow">
            <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Mentors</h3>
            <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">500+</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6 flex-1 min-w-[250px] shadow">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Companies</h3>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">200+</p>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" className="h-16 w-16 rounded-full mb-3" />
            <p className="text-blue-800 dark:text-blue-200 mb-2">"This platform helped me land my dream job at Google!"</p>
            <span className="font-semibold text-blue-900 dark:text-blue-100">Amit Sharma</span>
            <span className="text-xs text-blue-600 dark:text-blue-400">Software Engineer</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" className="h-16 w-16 rounded-full mb-3" />
            <p className="text-blue-800 dark:text-blue-200 mb-2">"The hackathons are super fun and the mentors are amazing!"</p>
            <span className="font-semibold text-blue-900 dark:text-blue-100">Priya Verma</span>
            <span className="text-xs text-blue-600 dark:text-blue-400">Student, IIT Delhi</span>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col items-center">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="user" className="h-16 w-16 rounded-full mb-3" />
            <p className="text-blue-800 dark:text-blue-200 mb-2">"I found my first internship through this app. Highly recommended!"</p>
            <span className="font-semibold text-blue-900 dark:text-blue-100">Rahul Singh</span>
            <span className="text-xs text-blue-600 dark:text-blue-400">Intern, Flipkart</span>
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">Our Partners</h2>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          <img src="https://www.pngmart.com/files/23/Google-Logo-PNG-HD-1.png" alt="Google" className="h-12 dark:invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 dark:invert" />
          <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt="Flipkart" className="h-10 dark:invert" />
          <img src="https://th.bing.com/th/id/R.d99d411abcdb25bf05efd0ee2d279a78?rik=lnML%2bx0bL0lazg&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f06%2fLogo-LOr%c3%a9al-symbole.jpg&ehk=D6E1ldj8iOzD1cSlrFN%2bWL5H6gkS8q0ct0AsVmrXxKE%3d&risl=&pid=ImgRaw&r=0" alt="Loreal" className="h-10 dark:invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 dark:invert" />
        </div>
      </div>
      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">📝</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Sign Up</span>
            <span className="text-blue-700 dark:text-blue-300 text-center">Create your free account in seconds.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🔍</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Explore</span>
            <span className="text-blue-700 dark:text-blue-300 text-center">Browse hackathons, jobs, and learning resources.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🚀</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Participate</span>
            <span className="text-blue-700 dark:text-blue-300 text-center">Join events, submit projects, and connect with mentors.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🏆</span>
            <span className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Get Hired</span>
            <span className="text-blue-700 dark:text-blue-300 text-center">Win prizes, land jobs, and grow your career!</span>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🏅</span>
            <span className="font-bold text-blue-900 dark:text-blue-100 text-2xl">150+</span>
            <span className="text-blue-700 dark:text-blue-300">Hackathons Hosted</span>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">👩‍💻</span>
            <span className="font-bold text-yellow-900 dark:text-yellow-100 text-2xl">10,000+</span>
            <span className="text-yellow-700 dark:text-yellow-300">Projects Submitted</span>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🎓</span>
            <span className="font-bold text-purple-900 dark:text-purple-100 text-2xl">5,000+</span>
            <span className="text-purple-700 dark:text-purple-300">Students Placed</span>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl mb-2">🏢</span>
            <span className="font-bold text-green-900 dark:text-green-100 text-2xl">200+</span>
            <span className="text-green-700 dark:text-green-300">Companies Onboarded</span>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Is it free to join?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Yes! Creating an account and participating in most events is completely free.</p>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">How do I participate in a hackathon?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Just sign up, browse available hackathons, and click "Register" to join.</p>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Can I get a job through this platform?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Absolutely! Many companies hire directly through our hiring challenges and job boards.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">How do I become a mentor?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Fill out the mentor application form in your dashboard. Our team will review and get in touch.</p>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Is there a mobile app?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">A mobile app is coming soon! Stay tuned for updates.</p>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">How do I contact support?</h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">Email us at <a href="mailto:support@hackathonapp.com" className="text-blue-900 dark:text-blue-100 underline">support@DEVNoVATE.com</a> or use the chat widget on the site.</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-2">About DEVNoVATE App</h3>
            <p className="text-blue-100 dark:text-blue-300 mb-2">Empowering students, professionals, and companies to connect, learn, and grow through world-class hackathons, mentorship, and job opportunities.</p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline text-blue-100 dark:text-blue-300">Home</a></li>
              <li><a href="/learn" className="hover:underline text-blue-100 dark:text-blue-300">Learn</a></li>
              <li><a href="/practice" className="hover:underline text-blue-100 dark:text-blue-300">Practice</a></li>
              <li><a href="/compete" className="hover:underline text-blue-100 dark:text-blue-300">Compete</a></li>
              <li><a href="/mentorship" className="hover:underline text-blue-100 dark:text-blue-300">Mentorship</a></li>
              <li><a href="/jobs" className="hover:underline text-blue-100 dark:text-blue-300">Jobs</a></li>
              <li><a href="/blogs" className="hover:underline text-blue-100 dark:text-blue-300">Blogs</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:support@hackathonapp.com" className="underline text-blue-100 dark:text-blue-300">support@DEVNoVATE.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="underline text-blue-100 dark:text-blue-300">+91 6969696969</a></li>
              <li className="text-blue-100 dark:text-blue-300">Address: GL Bajaj university , Mathura , India</li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-2">Newsletter</h3>
            <p className="text-blue-100 dark:text-blue-300 mb-2">Get the latest updates, events, and job alerts in your inbox.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded bg-blue-800 dark:bg-gray-800 text-white placeholder-blue-200 dark:placeholder-blue-400 focus:outline-none" />
              <button type="submit" className="bg-yellow-400 text-blue-900 dark:text-blue-100 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-blue-800 dark:border-gray-700 pt-4">
          <span className="text-blue-100 dark:text-blue-300">© 2025 Hackathon App. All rights reserved.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="/terms" className="hover:underline text-blue-100 dark:text-blue-300">Terms of Service</a>
            <a href="/privacy" className="hover:underline text-blue-100 dark:text-blue-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 