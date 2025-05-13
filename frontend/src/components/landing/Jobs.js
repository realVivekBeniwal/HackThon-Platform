import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon, BuildingOfficeIcon, CurrencyDollarIcon, MapPinIcon, ClockIcon, StarIcon, ArrowRightIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const jobCategories = [
  { name: 'Software Development', icon: BriefcaseIcon, count: 500, color: 'from-green-50/80 to-green-100/80' },
  { name: 'Data Science', icon: ChartBarIcon, count: 300, color: 'from-green-100/80 to-green-200/80' },
  { name: 'Product Management', icon: AcademicCapIcon, count: 200, color: 'from-green-200/80 to-green-100/80' },
  { name: 'UI/UX Design', icon: BuildingOfficeIcon, count: 150, color: 'from-green-100/80 to-green-300/80' },
];

const featuredJobs = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Google',
    location: 'Bangalore, India',
    salary: '₹25L - ₹45L',
    type: 'Full-time',
    skills: ['React', 'Node.js', 'MongoDB'],
    posted: '2 days ago',
    logo: 'https://www.pngmart.com/files/23/Google-Logo-PNG-HD-1.png'
  },
  {
    title: 'Product Manager',
    company: 'Amazon',
    location: 'Hyderabad, India',
    salary: '₹20L - ₹35L',
    type: 'Full-time',
    skills: ['Product Strategy', 'Agile', 'Analytics'],
    posted: '3 days ago',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
  },
  {
    title: 'UI/UX Designer',
    company: 'Flipkart',
    location: 'Remote',
    salary: '₹15L - ₹25L',
    type: 'Full-time',
    skills: ['Figma', 'Adobe XD', 'Prototyping'],
    posted: '1 day ago',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png'
  },
  {
    title: 'Data Scientist',
    company: 'Microsoft',
    location: 'Pune, India',
    salary: '₹18L - ₹30L',
    type: 'Full-time',
    skills: ['Python', 'ML', 'Deep Learning'],
    posted: '4 days ago',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  },
];

const topCompanies = [
  { name: 'Google', openings: 50, rating: 4.8, logo: 'https://www.pngmart.com/files/23/Google-Logo-PNG-HD-1.png' },
  { name: 'Amazon', openings: 75, rating: 4.6, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
  { name: 'Microsoft', openings: 40, rating: 4.7, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
  { name: 'Flipkart', openings: 30, rating: 4.5, logo: 'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png' },
];

const successStories = [
  { name: 'Prateek Sharma', role: 'Software Engineer at Google', text: 'Found my dream job through DEVNoVATE!', img: 'https://randomuser.me/api/portraits/men/22.jpg' },
  { name: 'Meera Patel', role: 'Product Manager at Amazon', text: 'The platform made job hunting so easy.', img: 'https://randomuser.me/api/portraits/women/23.jpg' },
  { name: 'Arjun Singh', role: 'Data Scientist at Microsoft', text: 'Got multiple offers within weeks.', img: 'https://randomuser.me/api/portraits/men/24.jpg' },
];

const faqs = [
  { q: 'How do I apply for jobs?', a: 'Click on any job listing and use the "Apply Now" button to submit your application.' },
  { q: 'Is my resume visible to all companies?', a: 'You can control your resume visibility in privacy settings.' },
  { q: 'How long does the hiring process take?', a: 'It varies by company, typically 2-4 weeks.' },
  { q: 'Can I track my applications?', a: 'Yes, view all your applications in the dashboard.' },
];

export default function Jobs() {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-green-100 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <BriefcaseIcon className="h-16 w-16 text-green-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-green-900 mb-2">Find Your Dream Job</h1>
          <p className="text-lg text-green-700 mb-4">Discover opportunities at top companies and start your next career adventure.</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition">Search Jobs</motion.button>
        </div>
      </motion.div>

      {/* Job Categories */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 mb-6">Job Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`glassmorphism bg-gradient-to-br ${category.color} rounded-xl shadow-xl p-6 flex items-center gap-6 cursor-pointer ${selectedCategory === category.name ? 'ring-2 ring-green-500' : ''}`}
              >
                <Icon className="h-12 w-12 text-green-600 animate-pulse" />
                <div className="flex-1">
                  <h3 className="font-semibold text-green-900 mb-1">{category.name}</h3>
                  <span className="text-green-700 text-sm">{category.count}+ openings</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Jobs */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job, i) => (
            <motion.div key={job.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <img src={job.logo} alt={job.company} className="h-12 w-12 object-contain" />
                <div className="flex-1">
                  <h3 className="font-semibold text-green-900 mb-1">{job.title}</h3>
                  <p className="text-green-700 text-sm mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">{skill}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-green-600">
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CurrencyDollarIcon className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Companies */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 mb-6">Top Companies Hiring</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {topCompanies.map((company, i) => (
            <motion.div key={company.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={company.logo} alt={company.name} className="h-16 w-16 object-contain mb-4" />
              <h3 className="font-semibold text-green-900 text-center mb-1">{company.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                <StarIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-green-700">{company.rating}</span>
              </div>
              <span className="text-green-600 text-sm">{company.openings} openings</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successStories.map((story, i) => (
            <motion.div key={story.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={story.img} alt={story.name} className="h-16 w-16 rounded-full mb-4" />
              <p className="text-green-800 mb-4 text-center italic">"{story.text}"</p>
              <h3 className="font-semibold text-green-900 text-center mb-1">{story.name}</h3>
              <span className="text-green-700 text-sm text-center">{story.role}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-green-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="bg-white rounded-xl shadow-lg p-6">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full text-left font-semibold text-green-900 text-lg">
                {faq.q}
                <span>{openFaq === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-green-700 mt-2 text-sm overflow-hidden">{faq.a}</motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-green-600 to-green-400 rounded-xl shadow-xl p-10 flex flex-col items-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to start your next chapter?</h2>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-green-900 font-bold rounded-lg shadow hover:bg-green-100 transition text-xl flex items-center">Upload Resume <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 