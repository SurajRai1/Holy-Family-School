"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaFlask, FaTheaterMasks, FaRunning, FaUsers, FaGlobe } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.',
    },
    {
      icon: <FaFlask className="text-4xl text-blue-600" />,
      title: 'STEM Focus',
      description: 'State-of-the-art laboratories and innovative programs in science, technology, engineering, and mathematics.',
    },
    {
      icon: <FaTheaterMasks className="text-4xl text-blue-600" />,
      title: 'Arts & Creativity',
      description: 'Comprehensive arts education including visual arts, music, theater, and dance to nurture creative expression.',
    },
    {
      icon: <FaRunning className="text-4xl text-blue-600" />,
      title: 'Athletics',
      description: 'Competitive sports programs that promote teamwork, discipline, and physical well-being.',
    },
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: 'Community',
      description: 'Inclusive environment where students develop strong social skills and lifelong friendships.',
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-600" />,
      title: 'Global Perspective',
      description: 'International programs and cultural exchanges that prepare students for an interconnected world.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-blue-600">Holy Family Higher Secondary School</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide a comprehensive educational experience that nurtures intellectual curiosity, 
            personal growth, and a passion for lifelong learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 