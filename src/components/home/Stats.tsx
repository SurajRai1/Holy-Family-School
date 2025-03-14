"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaTrophy, FaBook } from 'react-icons/fa';

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Wrap stats in useMemo to prevent re-creation on each render
  const stats = useMemo(() => [
    {
      icon: <FaUserGraduate className="text-4xl text-indigo-600" />,
      value: 1200,
      label: "Students Enrolled",
      suffix: "+"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
      value: 85,
      label: "Expert Faculty",
      suffix: "+"
    },
    {
      icon: <FaTrophy className="text-4xl text-indigo-600" />,
      value: 95,
      label: "Academic Achievement",
      suffix: "%"
    },
    {
      icon: <FaBook className="text-4xl text-indigo-600" />,
      value: 50,
      label: "Years of Excellence",
      suffix: "+"
    }
  ], []);

  const animateStats = useCallback(() => {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const updatedStats = stats.map(stat => 
        Math.floor(progress * stat.value)
      );
      
      setAnimatedStats(updatedStats);
      
      if (frame === totalFrames) {
        clearInterval(timer);
        setAnimatedStats(stats.map(stat => stat.value));
      }
    }, frameDuration);
  }, [stats]);

  useEffect(() => {
    const isInViewport = (element) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (isInViewport(statsSection) && !hasAnimated) {
        animateStats();
        setHasAnimated(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, animateStats]);

  return (
    <section id="stats-section" className="py-16 bg-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our School at a Glance</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-indigo-100">
            Holy Family Higher Secondary School has a proud history of academic excellence and student achievement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {animatedStats[index]}{stat.suffix}
              </div>
              <div className="text-indigo-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 