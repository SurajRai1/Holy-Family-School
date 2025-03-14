"use client";

import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaBook, FaUsers, FaHandshake, FaAward, FaHistory, FaLandmark, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-indigo-950 to-indigo-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Journey of Excellence</h1>
            <p className="text-xl text-indigo-100">
              Discover the rich heritage, mission, and achievements that make Holy Family Higher Secondary School a beacon of educational excellence.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white filter blur-2xl"
        ></motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              {/* Replace with actual school image */}
              <div className="absolute inset-0 bg-indigo-200 flex items-center justify-center">
                <FaLandmark className="text-8xl text-indigo-400" />
                <span className="sr-only">School Building Image</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaHistory className="text-2xl text-indigo-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
              </div>
              <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1965, Holy Family Higher Secondary School began with a vision to provide quality education rooted in values and excellence. What started as a small institution with just three classrooms and 50 students has grown into one of the region's most respected educational establishments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through decades of dedication to academic excellence and character formation, we have nurtured generations of students who have gone on to make significant contributions in various fields across the globe.
              </p>
              <p className="text-lg text-gray-700">
                Today, our campus stands as a testament to our growth, featuring modern facilities while maintaining the warm, nurturing environment that has been our hallmark since inception.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <FaBook className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                At Holy Family Higher Secondary School, our mission is to provide a holistic education that nurtures intellectual growth, moral values, and spiritual development in a supportive and inclusive environment.
              </p>
              <p className="text-lg text-gray-700">
                We are committed to empowering students with knowledge, skills, and character that prepare them not just for academic success, but for life's diverse challenges and opportunities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <FaStar className="text-2xl text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                We envision Holy Family Higher Secondary School as a center of excellence that shapes compassionate, creative, and confident individuals who contribute positively to society and uphold the values of integrity, respect, and service.
              </p>
              <p className="text-lg text-gray-700">
                Our graduates will be distinguished by their academic prowess, ethical leadership, and unwavering commitment to making a meaningful difference in their communities and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Milestones in Our Journey
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              From our humble beginnings to our present achievements, explore the key moments that have shaped our institution's legacy.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {[
                { year: 1965, event: 'Holy Family Higher Secondary School was founded with just three classrooms and a vision to provide quality education rooted in values.' },
                { year: 1980, event: 'Expanded campus with new academic buildings and introduced comprehensive science and mathematics programs.' },
                { year: 1995, event: 'Celebrated 30 years of excellence with the inauguration of our state-of-the-art library and computer laboratory.' },
                { year: 2010, event: 'Achieved national recognition for academic excellence and launched innovative extracurricular programs.' },
                { year: 2023, event: 'Modernized our curriculum and facilities to meet contemporary educational needs while staying true to our founding principles.' }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-2xl font-bold text-indigo-900 mb-2">{item.year}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 border-4 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{item.year.toString().slice(2)}</span>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Proud Achievements
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              Celebrating excellence in academics, sports, arts, and community service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaAward />, 
                title: 'Academic Excellence', 
                description: 'Consistently ranked among the top 5% of schools in the region with exceptional board examination results.' 
              },
              { 
                icon: <FaUsers />, 
                title: 'Distinguished Alumni', 
                description: 'Our graduates have excelled in diverse fields including medicine, engineering, arts, and public service.' 
              },
              { 
                icon: <FaGraduationCap />, 
                title: 'Scholarship Success', 
                description: 'Over 200 students have received prestigious national and international scholarships in the last decade.' 
              },
              { 
                icon: <FaHandshake />, 
                title: 'Community Impact', 
                description: 'Our outreach programs have positively impacted thousands of lives in neighboring communities.' 
              },
              { 
                icon: <FaStar />, 
                title: 'Innovation in Education', 
                description: 'Recognized for pioneering teaching methodologies that blend traditional values with modern approaches.' 
              },
              { 
                icon: <FaBook />, 
                title: 'Cultural Heritage', 
                description: 'Preserving and promoting cultural heritage through various programs and celebrations.' 
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-600"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-6 text-indigo-600 text-2xl">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{achievement.title}</h3>
                <p className="text-gray-700">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Guiding Principles
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-700">
              These core values form the foundation of everything we do at Holy Family Higher Secondary School.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', description: 'We pursue the highest standards in all academic and extracurricular endeavors.' },
              { title: 'Integrity', description: 'We foster honesty, transparency, and ethical behavior in all interactions.' },
              { title: 'Compassion', description: 'We nurture empathy and care for others, especially those in need.' },
              { title: 'Respect', description: 'We honor the dignity and diversity of all individuals in our community.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-indigo-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-900 mb-4">{value.title}</h3>
                <div className="w-12 h-1 bg-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Continue Your Journey With Us</h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join our community and be part of a legacy of excellence, values, and achievement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/admissions" className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300">
                Apply Now
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
} 