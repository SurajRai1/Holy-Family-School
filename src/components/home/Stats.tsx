"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const stats = [
    { value: 95, label: 'College Acceptance Rate', suffix: '%' },
    { value: 25, label: 'Students per Class', suffix: '' },
    { value: 50, label: 'Extracurricular Activities', suffix: '+' },
    { value: 30, label: 'Years of Excellence', suffix: '+' },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(
                newCounters[index] + Math.ceil(stat.value / 30),
                stat.value
              );
            }
            return newCounters;
          });
        }, 50);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [inView, stats]);

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-blue-100">
            Holy Family Higher Secondary School has a proven track record of academic excellence and student success.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 