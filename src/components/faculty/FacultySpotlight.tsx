'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaBook, FaChartLine, FaClock, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

const FacultySpotlight = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'achievements':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 px-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-3 sm:mb-4">
                <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Excellence in Education</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our faculty members have received multiple awards for outstanding teaching and innovation in education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-3 sm:mb-4">
                <FaBook className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Research & Publications</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Faculty members have published over 50 research papers in leading educational journals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-indigo-600 mb-3 sm:mb-4">
                <FaChartLine className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Student Success</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our students consistently achieve top results in board examinations under the guidance of our faculty.
              </p>
            </motion.div>
          </div>
        );

      case 'day-in-life':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 px-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative h-48 sm:h-64">
                <Image
                  src="https://images.unsplash.com/photo-1544237526-cae15a57ed1e?w=800&h=600&fit=crop"
                  alt="Morning Assembly"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold">Morning Routine</h3>
                  <p className="text-xs sm:text-sm opacity-90">7:30 AM - 9:00 AM</p>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 text-indigo-600 mb-2 sm:mb-3">
                  <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">Start of the Day</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  Teachers arrive early to prepare for the day, attend morning briefings, and welcome students. The day begins with assembly and morning prayers.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-indigo-600 mb-2 sm:mb-3">
                  <FaChalkboardTeacher className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">Teaching Hours</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">9:00 AM - 3:00 PM</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Engaging classroom sessions, practical demonstrations, and interactive learning activities. Teachers guide students through various subjects while maintaining a supportive learning environment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-indigo-600 mb-2 sm:mb-3">
                  <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base font-medium">After School</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">3:00 PM - 4:30 PM</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Teachers participate in department meetings, grade assignments, provide extra help to students, and plan future lessons. Many also lead extracurricular activities.
                </p>
              </motion.div>
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-2">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Science Department Head",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                quote: "Teaching at Holy Family School has been incredibly rewarding. The collaborative environment and support for innovation in teaching methods allows us to bring out the best in our students."
              },
              {
                name: "Mr. James Wilson",
                role: "Mathematics Teacher",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
                quote: "The dedication of our faculty team and the enthusiasm of our students make every day exciting. We&apos;re not just teaching subjects; we&apos;re shaping future leaders."
              },
              {
                name: "Mrs. Emily Davis",
                role: "English Literature",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                quote: "What sets our school apart is the personal attention we give to each student. We celebrate their unique talents and help them grow both academically and personally."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-xs sm:text-sm text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-8 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Faculty Spotlight Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Faculty Spotlight</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Discover what makes our faculty special and how they contribute to our school's success.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {['achievements', 'day-in-life', 'testimonials'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

        {/* Tab Content */}
        <div className="mb-8 sm:mb-16">
          <AnimatePresence mode="wait">
            {renderTabContent()}
          </AnimatePresence>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-indigo-600 font-medium text-sm sm:text-base">Our Mission</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Building the Future <span className="text-indigo-600">Together</span></h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our faculty members work collaboratively to create an innovative learning environment where every student can thrive. 
                Through shared expertise and dedication, we're shaping the next generation of leaders.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Students Taught</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">98%</div>
                  <div className="text-sm sm:text-base text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div className="space-y-2 sm:space-y-4">
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop"
                    alt="Faculty Collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white">
                    <h4 className="text-sm sm:text-base font-medium mb-0 sm:mb-1">Faculty Collaboration</h4>
                    <p className="text-xs sm:text-sm opacity-90 hidden sm:block">Working together to create innovative learning experiences</p>
                  </div>
                </div>
                <div className="relative h-24 sm:h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                    alt="Team Meeting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                    <h4 className="text-sm sm:text-base font-medium">Team Meeting</h4>
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
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h4 className="text-sm sm:text-base font-medium">Teaching Session</h4>
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