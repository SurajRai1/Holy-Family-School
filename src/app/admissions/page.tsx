"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaCalendarAlt, FaGraduationCap, FaClipboard, FaUserCheck, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AdmissionsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Admissions</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
              Join our vibrant learning community at Holy Family Higher Secondary School and embark on a journey of academic excellence and personal growth.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a href="#admission-process" className="inline-block bg-white text-indigo-900 py-3 px-8 rounded-lg font-medium hover:bg-indigo-100 transition duration-300 shadow-lg">
                Learn How to Apply
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admissions Process Section */}
      <section id="admission-process" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Follow these simple steps to apply for admission to Holy Family Higher Secondary School.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-indigo-100 hidden md:block"></div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-600"
              >
                <div className="flex-shrink-0 bg-indigo-600 rounded-full p-4 shadow-md z-10">
                  <FaClipboard className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">1. Submit Application Form</h3>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    Complete the application form with all required information and submit it along with the necessary documents. Applications can be submitted online or in person at our admissions office.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Birth Certificate</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Previous School Records</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Passport Photos</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">ID Proof</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-600"
              >
                <div className="flex-shrink-0 bg-indigo-600 rounded-full p-4 shadow-md z-10">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">2. Entrance Assessment</h3>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    Students will be evaluated through an entrance test to assess their academic readiness for the appropriate grade level. The test is designed to evaluate critical thinking and problem-solving skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Mathematics</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">English</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">General Knowledge</span>
                    <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Logical Reasoning</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-600"
              >
                <div className="flex-shrink-0 bg-indigo-600 rounded-full p-4 shadow-md z-10">
                  <FaUserCheck className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">3. Interview</h3>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    Selected candidates and their parents will be invited for an interview with school administrators. This helps us understand the student&apos;s interests, aspirations, and ensures the school is a good fit for their educational journey.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-start gap-6 p-8 bg-gray-50 rounded-xl shadow-lg border-l-4 border-indigo-600"
              >
                <div className="flex-shrink-0 bg-indigo-600 rounded-full p-4 shadow-md z-10">
                  <FaCheckCircle className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">4. Admission Confirmation</h3>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    Successful candidates will receive an admission offer. Complete the enrollment by paying the required fees and submitting any additional documents requested. Welcome to the Holy Family family!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Important Dates
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Mark your calendar with these key dates for the admission process.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-indigo-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Application Period</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">Start Date:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">January 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">End Date:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">March 31, 2024</span>
                  </div>
                </div>
                <div className="mt-6 text-gray-800">
                  <p className="italic">Applications received after the deadline may be considered based on seat availability.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-indigo-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Entrance Tests</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="font-semibold text-gray-800">First Round:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">April 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Second Round:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">May 10, 2024</span>
                  </div>
                </div>
                <div className="mt-6 text-gray-800">
                  <p className="italic">Test timings: 9:00 AM to 12:00 PM. Please arrive 30 minutes early.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-indigo-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Interview Dates</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Period:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">April 20 - May 20, 2024</span>
                  </div>
                </div>
                <div className="mt-6 text-gray-800">
                  <p className="italic">Interview schedules will be communicated via email to shortlisted candidates.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-indigo-600"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <FaCalendarAlt className="text-indigo-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Results Announcement</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-800">Date:</span>
                    <span className="bg-indigo-50 text-indigo-800 py-1 px-3 rounded-lg font-medium">June 1, 2024</span>
                  </div>
                </div>
                <div className="mt-6 text-gray-800">
                  <p className="italic">Results will be published on the school website and communicated via email.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center"
            >
              <p className="text-lg text-indigo-900 font-bold">
                For any changes to these dates, please check our website or contact the admissions office.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
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
              Fee Structure
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Our transparent fee structure for the academic year 2024-2025.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-900 text-white">
                    <th className="py-4 px-6 text-left font-bold">Grade Level</th>
                    <th className="py-4 px-6 text-left font-bold">Admission Fee</th>
                    <th className="py-4 px-6 text-left font-bold">Tuition Fee (Annual)</th>
                    <th className="py-4 px-6 text-left font-bold">Other Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">Nursery - KG</td>
                    <td className="py-4 px-6 text-gray-800">₹15,000</td>
                    <td className="py-4 px-6 text-gray-800">₹45,000</td>
                    <td className="py-4 px-6 text-gray-800">₹8,000</td>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">Grades 1-5</td>
                    <td className="py-4 px-6 text-gray-800">₹20,000</td>
                    <td className="py-4 px-6 text-gray-800">₹55,000</td>
                    <td className="py-4 px-6 text-gray-800">₹10,000</td>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">Grades 6-8</td>
                    <td className="py-4 px-6 text-gray-800">₹25,000</td>
                    <td className="py-4 px-6 text-gray-800">₹65,000</td>
                    <td className="py-4 px-6 text-gray-800">₹12,000</td>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="border-b border-gray-200 hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">Grades 9-10</td>
                    <td className="py-4 px-6 text-gray-800">₹30,000</td>
                    <td className="py-4 px-6 text-gray-800">₹75,000</td>
                    <td className="py-4 px-6 text-gray-800">₹15,000</td>
                  </motion.tr>
                  <motion.tr 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="hover:bg-indigo-50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">Grades 11-12</td>
                    <td className="py-4 px-6 text-gray-800">₹35,000</td>
                    <td className="py-4 px-6 text-gray-800">₹85,000</td>
                    <td className="py-4 px-6 text-gray-800">₹18,000</td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Payment Schedule</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>First Installment: At the time of admission (40%)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Second Installment: September 30, 2024 (30%)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>Third Installment: December 31, 2024 (30%)</span>
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">Additional Information</h3>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Transport fees are separate and based on distance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sibling discount of 10% on tuition fee for second child</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Late payment fee of ₹500 per week applies</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Admissions Office
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Our admissions team is here to help you through every step of the process.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
                        <p className="text-gray-800">+91 98765 43210</p>
                        <p className="text-gray-800">+91 12345 67890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-800">admissions@holyfamily.edu</p>
                        <p className="text-gray-800">info@holyfamily.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Office Hours</h4>
                        <p className="text-gray-800">Monday to Friday: 8:00 AM - 4:00 PM</p>
                        <p className="text-gray-800">Saturday: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-100 p-3 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-800">Holy Family Higher Secondary School</p>
                        <p className="text-gray-800">123 Education Street, Knowledge City</p>
                        <p className="text-gray-800">Kathmandu, Nepal - 44600</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Inquiry</h3>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-800 mb-1">Interested Grade</label>
                      <select
                        id="grade"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                      >
                        <option value="">Select a grade</option>
                        <option value="nursery">Nursery - KG</option>
                        <option value="primary">Grades 1-5</option>
                        <option value="middle">Grades 6-8</option>
                        <option value="secondary">Grades 9-10</option>
                        <option value="higher">Grades 11-12</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                        placeholder="Your message or inquiry"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center"
            >
              <p className="text-lg text-indigo-900 font-bold">
                Want to visit our campus? Schedule a tour by calling our admissions office or filling out the inquiry form.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Educational Journey With Us
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              Take the first step towards a bright future for your child. Apply now or schedule a visit to our campus.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-3 hover:bg-indigo-50 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Download Application Form
              </motion.a>
              
              <motion.a 
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg shadow-lg flex items-center justify-center gap-3 hover:bg-white hover:text-indigo-900 transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Visit
              </motion.a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-16 p-6 bg-indigo-800 bg-opacity-50 rounded-xl border border-indigo-700"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center">
                  <div className="bg-indigo-700 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-semibold">Need more information?</p>
                    <p className="text-indigo-200">Our admissions team is ready to help</p>
                  </div>
                </div>
                
                <a 
                  href="#" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Contact Us Today
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="absolute left-0 right-0 bottom-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdmissionsPage; 