import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, TagIcon, UserCircleIcon, ClockIcon, HeartIcon, ChatBubbleLeftIcon, ArrowRightIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const categories = [
  { name: 'Technology', icon: BookOpenIcon, count: 250, color: 'from-indigo-50/80 to-indigo-100/80' },
  { name: 'Career Growth', icon: UserCircleIcon, count: 180, color: 'from-indigo-100/80 to-indigo-200/80' },
  { name: 'Programming', icon: TagIcon, count: 320, color: 'from-indigo-200/80 to-indigo-100/80' },
  { name: 'Industry News', icon: BookmarkIcon, count: 150, color: 'from-indigo-100/80 to-indigo-300/80' },
];

const featuredPosts = [
  {
    title: 'The Future of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we write and maintain code.',
    author: {
      name: 'Dr. Amit Kumar',
      role: 'AI Research Lead',
      img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    readTime: '8 min',
    likes: 1240,
    comments: 89,
    tags: ['AI', 'Software Development', 'Future Tech'],
    coverImg: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e'
  },
  {
    title: 'Best Practices for Modern Web Development',
    excerpt: 'Learn the latest best practices and patterns for building modern web applications.',
    author: {
      name: 'Priya Desai',
      role: 'Senior Frontend Developer',
      img: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    readTime: '12 min',
    likes: 980,
    comments: 65,
    tags: ['Web Development', 'Best Practices', 'Frontend'],
    coverImg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
  },
  {
    title: 'Getting Started with System Design',
    excerpt: 'A comprehensive guide to understanding and implementing system design principles.',
    author: {
      name: 'Rahul Sharma',
      role: 'System Architect',
      img: 'https://randomuser.me/api/portraits/men/34.jpg'
    },
    readTime: '15 min',
    likes: 1500,
    comments: 120,
    tags: ['System Design', 'Architecture', 'Backend'],
    coverImg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
  },
];

const topAuthors = [
  { name: 'Neha Gupta', role: 'Tech Lead at Google', posts: 45, followers: '12.5K', img: 'https://randomuser.me/api/portraits/women/41.jpg' },
  { name: 'Arun Patel', role: 'Software Architect', posts: 38, followers: '9.8K', img: 'https://randomuser.me/api/portraits/men/42.jpg' },
  { name: 'Sanya Khan', role: 'Product Manager', posts: 42, followers: '11.2K', img: 'https://randomuser.me/api/portraits/women/43.jpg' },
  { name: 'Vikram Singh', role: 'Data Scientist', posts: 35, followers: '8.7K', img: 'https://randomuser.me/api/portraits/men/44.jpg' },
];

const trendingTopics = [
  'Artificial Intelligence',
  'Web3 Development',
  'Cloud Computing',
  'DevOps Practices',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Cybersecurity',
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-20">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="bg-indigo-100 rounded-full p-8 shadow-lg mb-4 md:mb-0">
          <BookOpenIcon className="h-16 w-16 text-indigo-600 animate-bounce" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">Tech Blog & Insights</h1>
          <p className="text-lg text-indigo-700 mb-4">Discover the latest in technology, career advice, and industry trends.</p>
          <motion.button whileHover={{ scale: 1.08 }} className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Start Reading</motion.button>
        </div>
      </motion.div>

      {/* Blog Categories */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`glassmorphism bg-gradient-to-br ${category.color} rounded-xl shadow-xl p-6 flex items-center gap-6 cursor-pointer ${selectedCategory === category.name ? 'ring-2 ring-indigo-500' : ''}`}
              >
                <Icon className="h-12 w-12 text-indigo-600 animate-pulse" />
                <div className="flex-1">
                  <h3 className="font-semibold text-indigo-900 mb-1">{category.name}</h3>
                  <span className="text-indigo-700 text-sm">{category.count}+ articles</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Featured Posts */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, i) => (
            <motion.div key={post.title} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={post.coverImg} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={post.author.img} alt={post.author.name} className="h-10 w-10 rounded-full" />
                  <div>
                    <h4 className="font-semibold text-indigo-900">{post.author.name}</h4>
                    <p className="text-indigo-600 text-sm">{post.author.role}</p>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-indigo-900 mb-2">{post.title}</h3>
                <p className="text-indigo-700 text-sm mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-indigo-600 text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <HeartIcon className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ChatBubbleLeftIcon className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Top Authors */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Top Authors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {topAuthors.map((author, i) => (
            <motion.div key={author.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} whileHover={{ scale: 1.04 }} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={author.img} alt={author.name} className="h-20 w-20 rounded-full mb-4" />
              <h3 className="font-semibold text-indigo-900 text-center mb-1">{author.name}</h3>
              <p className="text-indigo-600 text-sm text-center mb-3">{author.role}</p>
              <div className="flex items-center gap-4 text-sm text-indigo-700">
                <span>{author.posts} posts</span>
                <span>{author.followers} followers</span>
              </div>
              <motion.button whileHover={{ scale: 1.08 }} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Follow</motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Trending Topics</h2>
        <div className="flex flex-wrap gap-4">
          {trendingTopics.map((topic, i) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-medium cursor-pointer hover:bg-indigo-200 transition"
            >
              #{topic.replace(/\s+/g, '')}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-xl shadow-xl p-10 flex flex-col items-center mt-16">
        <h2 className="text-3xl font-bold text-white mb-4">Share Your Knowledge</h2>
        <p className="text-indigo-100 text-lg mb-6 text-center">Join our community of tech writers and share your insights with millions of developers.</p>
        <motion.button whileHover={{ scale: 1.08 }} className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg shadow hover:bg-indigo-100 transition text-xl flex items-center">Start Writing <ArrowRightIcon className="h-6 w-6 ml-2" /></motion.button>
      </motion.div>
    </div>
  );
} 