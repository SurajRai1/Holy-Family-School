"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBook,
  FaChevronRight,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative">
      {/* Curved Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-20 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z" className="fill-gray-50"></path>
        </svg>
      </div>
      
      <div className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* School Info */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-16 left-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 border-b border-indigo-700 pb-2 inline-block">
                Continue Your Journey
              </h3>
              <p className="mt-4 text-gray-300">
                At Holy Family Higher Secondary School, we believe education is a lifelong journey. Join us as we nurture minds, build character, and prepare students for a successful future.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-9 h-9 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300">
                  <FaYoutube className="text-white" />
                </a>
              </div>
            </motion.div>

            {/* Explore Links */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-16 left-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <FaBook className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2 inline-block">
                Explore Our School
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    About Our Journey
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Begin Your Journey
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/staff" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                    <FaChevronRight className="mr-2 text-xs text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" /> 
                    Meet Our Guides
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-16 left-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2 inline-block">
                Find Your Way
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3" />
                  <span className="text-gray-300">AG Colony, Kohima, Nagaland, India</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-indigo-400 mr-3" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-300">
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-indigo-400 mr-3" />
                  <a href="mailto:info@holyfamilyschool.edu" className="text-gray-300 hover:text-white transition-colors duration-300">
                    info@holyfamilyschool.edu
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <div className="relative w-full h-[150px] rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2080248847697!2d94.1058404!3d25.6568176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374621942745a783%3A0x5b92e6ce159c9c5c!2sHoly%20Family%20Higher%20Secondary%20School!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus" 
                    className="w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-16 left-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2 inline-block">
                Stay Updated
              </h3>
              <p className="mt-4 text-gray-300">
                Join our newsletter to receive updates about school events, news, and important announcements.
              </p>
              <form className="mt-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full p-3 rounded-lg bg-indigo-800/50 border border-indigo-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full px-4 bg-indigo-600 rounded-r-lg hover:bg-indigo-500 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              <div className="mt-6 pt-6 border-t border-indigo-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 mb-3">Important Links</h4>
                <div className="flex flex-wrap gap-2">
                  <Link href="/privacy" className="text-xs bg-indigo-800/50 hover:bg-indigo-700 px-3 py-1 rounded-full text-gray-300 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-xs bg-indigo-800/50 hover:bg-indigo-700 px-3 py-1 rounded-full text-gray-300 transition-colors duration-300">
                    Terms of Use
                  </Link>
                  <Link href="/careers" className="text-xs bg-indigo-800/50 hover:bg-indigo-700 px-3 py-1 rounded-full text-gray-300 transition-colors duration-300">
                    Careers
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div 
            className="mt-12 pt-6 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Holy Family Higher Secondary School. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-indigo-800 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300 group"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-white group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Journey Path Graphic */}
      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 rotate-180">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-indigo-950"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer; 