"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-white mb-10 leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions, feedback, or inquiries about Holy Family Higher Secondary School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    <FaPhone className="text-indigo-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-800 mb-4">Call us directly</p>
                <a href="tel:+919876543210" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  +91 98765 43210
                </a>
                <p className="text-gray-800 mt-2">
                  <a href="tel:+911234567890" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    +91 12345 67890
                  </a>
                </p>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    <FaEnvelope className="text-indigo-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-800 mb-4">Send us an email</p>
                <a href="mailto:info@holyfamily.edu" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  info@holyfamily.edu
                </a>
                <p className="text-gray-800 mt-2">
                  <a href="mailto:admissions@holyfamily.edu" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                    admissions@holyfamily.edu
                  </a>
                </p>
              </motion.div>

              {/* Address Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-800 mb-4">Visit our campus</p>
                <p className="text-gray-800">
                  Holy Family Higher Secondary School<br />
                  123 Education Street<br />
                  Knowledge City, Kathmandu<br />
                  Nepal - 44600
                </p>
              </motion.div>

              {/* Office Hours Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-indigo-100 p-4 rounded-full">
                    <FaClock className="text-indigo-600 text-2xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Office Hours</h3>
                <p className="text-gray-800 mb-4">When we're available</p>
                <p className="text-gray-800">
                  Monday - Friday<br />
                  8:00 AM - 4:00 PM
                </p>
                <p className="text-gray-800 mt-2">
                  Saturday<br />
                  9:00 AM - 1:00 PM
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1">Subject</label>
                      <select
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="academics">Academic Information</option>
                        <option value="facilities">Facilities</option>
                        <option value="events">Events & Activities</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white text-gray-800"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
              
              {/* Content Column */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">We're Here to Help</h3>
                <p className="text-gray-800 mb-8 leading-relaxed">
                  Whether you have a question about admissions, academics, or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Quick Response</h4>
                      <p className="text-gray-800">We aim to respond to all inquiries within 24 hours during business days.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Secure Communication</h4>
                      <p className="text-gray-800">Your information is kept confidential and secure.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">Dedicated Support</h4>
                      <p className="text-gray-800">Our dedicated team is committed to providing you with the best support.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
                  <p className="text-indigo-900 font-medium">
                    Prefer to talk in person? Schedule a campus visit and we'll be happy to show you around and answer all your questions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              Find Us
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Our campus is conveniently located in the heart of Knowledge City. Visit us today!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-[500px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2080248847697!2d85.31080021506156!3d27.710882982790663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c1b0033325%3A0x85bea5ef59dc5c99!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-semibold text-gray-800">Directions</p>
                  <p className="text-gray-800">Just 15 minutes from the city center</p>
                </div>
              </div>
              
              <a 
                href="https://goo.gl/maps/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-900 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800">
              Find answers to common questions about contacting Holy Family Higher Secondary School.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">What are the best ways to contact the school?</h3>
                <p className="text-gray-800">
                  You can contact us through phone, email, or by filling out the contact form on this page. For urgent matters, we recommend calling our main office directly.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">How quickly can I expect a response?</h3>
                <p className="text-gray-800">
                  We strive to respond to all inquiries within 24 hours during business days. For complex inquiries, it may take up to 48 hours to provide a comprehensive response.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">Can I schedule a campus visit?</h3>
                <p className="text-gray-800">
                  Yes, we encourage prospective students and their families to visit our campus. You can schedule a visit by contacting our admissions office or by filling out the contact form on this page.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">Who should I contact for specific departments?</h3>
                <p className="text-gray-800">
                  For admissions-related inquiries, contact our admissions office. For academic matters, reach out to the respective department heads. For general inquiries, our main office will direct you to the appropriate department.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Connect With Us?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto">
              We're excited to hear from you and answer any questions you may have about Holy Family Higher Secondary School.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a 
                href="#contact-form" 
                className="bg-white text-indigo-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors duration-300"
              >
                Reach Out Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage; 