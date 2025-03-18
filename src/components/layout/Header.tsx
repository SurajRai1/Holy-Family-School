"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaSearch, 
  FaUserGraduate, 
  FaChevronDown, 
  FaGraduationCap, 
  FaImages, 
  FaUsers, 
  FaBook,
  FaNewspaper,
  FaCalendarAlt,
  FaPhoneAlt,
  FaHome
} from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events - simplified to only detect if scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setFullMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Control body scroll when full menu is open
  useEffect(() => {
    if (fullMenuOpen) {
      // Prevent scrolling on the body when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullMenuOpen]);

  // Primary navigation items
  const primaryNavLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUserGraduate /> },
    { name: 'Academics', path: '/academics', icon: <FaBook /> },
    { name: 'Admissions', path: '/admissions', icon: <FaGraduationCap /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> },
  ];
  
  // Secondary navigation categories for full menu
  const secondaryNavCategories = [
    {
      category: "Discover",
      links: [
        { name: 'Campus Tour', path: '/campus-tour', icon: <FaHome /> },
        { name: 'Photo Gallery', path: '/gallery', icon: <FaImages /> },
        { name: 'News & Events', path: '/news', icon: <FaNewspaper /> },
        { name: 'Academic Calendar', path: '/calendar', icon: <FaCalendarAlt /> },
      ]
    },
    {
      category: "Community",
      links: [
        { name: 'Faculty & Staff', path: '/faculty', icon: <FaUsers /> },
        { name: 'Alumni Network', path: '/alumni', icon: <FaGraduationCap /> },
        { name: 'Parent Portal', path: '/parents', icon: <FaUsers /> },
        { name: 'Student Life', path: '/student-life', icon: <FaUserGraduate /> },
      ]
    },
    {
      category: "Resources",
      links: [
        { name: 'Student Resources', path: '/resources', icon: <FaBook /> },
        { name: 'Library', path: '/library', icon: <FaBook /> },
        { name: 'Forms & Documents', path: '/forms', icon: <FaBook /> },
        { name: 'Careers', path: '/careers', icon: <FaUsers /> },
      ]
    }
  ];

  // Animation variants
  const fullMenuVariants = {
    closed: { 
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <FaUserGraduate className={`text-3xl ${
                isScrolled ? 'text-indigo-900' : 'text-white'
              }`} />
              <span className={`ml-2 text-xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Holy Family Higher Secondary School
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {primaryNavLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link 
                  href={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-indigo-900' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Search Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className={`ml-2 p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Search"
            >
              <FaSearch />
            </motion.button>
            
            {/* Full Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              onClick={() => setFullMenuOpen(!fullMenuOpen)}
              className={`ml-2 p-2 rounded-full transition-all duration-300 flex items-center ${
                isScrolled 
                  ? fullMenuOpen 
                    ? 'bg-indigo-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900' 
                  : fullMenuOpen 
                    ? 'bg-white/30 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-label="Menu"
            >
              {fullMenuOpen ? <FaTimes /> : <FaBars />}
              <span className="ml-2 text-sm font-medium hidden lg:inline">Menu</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className={`mr-2 p-2 rounded-full ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-700 hover:bg-indigo-100' 
                  : 'bg-white/20 text-white'
              } transition-colors duration-300`}
              aria-label="Search"
            >
              <FaSearch />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-indigo-900' : 'text-white'
              } transition-colors duration-300`}
              aria-label="Mobile Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our school..."
                  className="w-full p-3 rounded-lg bg-white/95 backdrop-blur-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-900 text-gray-800"
                />
                <button className="absolute right-3 top-3 text-gray-500 hover:text-indigo-900 transition-colors duration-300">
                  <FaSearch />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col py-2">
                {primaryNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      className="flex items-center px-4 py-3 text-gray-800 hover:bg-indigo-100 hover:text-indigo-900 transition-all duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mr-3 text-indigo-900">{link.icon}</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Secondary Nav Categories */}
                {secondaryNavCategories.map((category) => (
                  <div key={category.category} className="mt-2 first:mt-0">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">
                      {category.category}
                    </div>
                    {category.links.slice(0, 2).map((link) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: primaryNavLinks.length * 0.05 + 0.05 
                        }}
                      >
                        <Link
                          href={link.path}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-indigo-100 hover:text-indigo-900 transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="mr-3 text-indigo-700 opacity-80">{link.icon}</span>
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ))}
                
                {/* View Full Menu Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-2 px-4 py-3"
                >
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setFullMenuOpen(true);
                    }}
                    className="w-full py-2 bg-indigo-900 text-white rounded-md flex items-center justify-center transition-all duration-300 hover:bg-indigo-800"
                  >
                    <span>View Full Menu</span>
                    <FaChevronDown className="ml-2" />
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Full Screen Menu Overlay */}
        <AnimatePresence>
          {fullMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
              onClick={() => setFullMenuOpen(false)}
            >
              <motion.div 
                ref={menuRef}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto m-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 flex justify-between items-center border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-indigo-900">Explore Our School</h2>
                  <button 
                    onClick={() => setFullMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-xl text-gray-700" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {secondaryNavCategories.map((category) => (
                    <motion.div 
                      key={category.category}
                      variants={fullMenuVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        {category.category}
                      </h3>
                      <div className="space-y-1">
                        {category.links.map((link) => (
                          <motion.div
                            key={link.name}
                            variants={itemVariants}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              href={link.path}
                              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-300 group"
                              onClick={() => setFullMenuOpen(false)}
                            >
                              <span className="mr-3 text-indigo-700 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                {link.icon}
                              </span>
                              <span>{link.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Quick Links Footer */}
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link 
                      href="/admissions" 
                      className="px-5 py-2 bg-indigo-900 text-white rounded-full hover:bg-indigo-800 transition-colors duration-300"
                      onClick={() => setFullMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                    <Link 
                      href="/contact" 
                      className="px-5 py-2 border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50 transition-colors duration-300"
                      onClick={() => setFullMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                    <Link 
                      href="/calendar" 
                      className="px-5 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-colors duration-300"
                      onClick={() => setFullMenuOpen(false)}
                    >
                      Academic Calendar
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header; 