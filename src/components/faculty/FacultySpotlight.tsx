'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBook, FaChartLine } from 'react-icons/fa';
import Image from 'next/image';

const FacultySpotlight = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Faculty Spotlight Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Faculty Spotlight</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our faculty special and how they contribute to our school's success.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['achievements', 'day-in-life', 'testimonials'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab === 'achievements' && 'Achievements'}
              {tab === 'day-in-life' && 'Day in the Life'}
              {tab === 'testimonials' && 'Testimonials'}
            </button>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-indigo-600 mb-4">
              <FaTrophy className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence in Education</h3>
            <p className="text-gray-600">
              Our faculty members have received multiple awards for outstanding teaching and innovation in education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-indigo-600 mb-4">
              <FaBook className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Publications</h3>
            <p className="text-gray-600">
              Faculty members have published over 50 research papers in leading educational journals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-indigo-600 mb-4">
              <FaChartLine className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Success</h3>
            <p className="text-gray-600">
              Our students consistently achieve top results in board examinations under the guidance of our faculty.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <span className="text-indigo-600 font-medium">Our Mission</span>
              <h2 className="text-3xl font-bold">Building the Future <span className="text-indigo-600">Together</span></h2>
              <p className="text-gray-600 leading-relaxed">
                Our faculty members work collaboratively to create an innovative learning environment where every student can thrive. 
                Through shared expertise and dedication, we're shaping the next generation of leaders.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600">Students Taught</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
                    alt="Faculty Collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-medium mb-1">Faculty Collaboration</h4>
                    <p className="text-sm opacity-90">Working together to create innovative learning experiences</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                    alt="Team Meeting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-medium">Team Meeting</h4>
                  </div>
                </div>
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=1200&fit=crop"
                  alt="Teaching Session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-medium">Teaching Session</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultySpotlight; 