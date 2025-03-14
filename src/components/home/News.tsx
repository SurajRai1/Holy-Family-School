"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Holy Family Students Win National Science Competition',
      excerpt: 'Our robotics team took first place at the National Science Olympiad, showcasing their innovative design and programming skills.',
      date: 'May 15, 2023',
      image: '/images/news/science-competition.jpg',
      category: 'Achievement'
    },
    {
      id: 2,
      title: 'New Performing Arts Center Opening This Fall',
      excerpt: "We're excited to announce the completion of our state-of-the-art performing arts center, which will host its inaugural performance in September.",
      date: 'June 2, 2023',
      image: '/images/news/arts-center.jpg',
      category: 'Campus'
    },
    {
      id: 3,
      title: 'Annual Community Service Day Approaches',
      excerpt: 'Students and faculty will participate in our annual day of service, volunteering at various organizations throughout the community.',
      date: 'June 10, 2023',
      image: '/images/news/community-service.jpg',
      category: 'Event'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest News & Events
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            <p className="max-w-2xl text-lg text-gray-600">
              Stay updated with the latest happenings, achievements, and upcoming events at Holy Family Higher Secondary School.
            </p>
          </div>
          <Link 
            href="/news"
            className="mt-6 md:mt-0 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
          >
            View All News <FaArrowRight className="ml-2" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                {/* Replace with actual images when available */}
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-white">
                  <span className="text-lg font-bold">News Image</span>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaCalendarAlt className="mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News; 