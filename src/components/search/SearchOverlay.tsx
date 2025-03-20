'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  link: string;
  category: string;
  keywords: string[];
}

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData: SearchResult[] = [
    {
      title: 'Home',
      description: 'Welcome to Holy Family Higher Secondary School',
      link: '/',
      category: 'Main',
      keywords: [
        'home', 'homepage', 'main', 'welcome', 'holy family',
        'school', 'about', 'overview', 'introduction',
        'holy family school', 'holy family higher secondary school'
      ]
    },
    {
      title: 'About Us',
      description: 'Learn about our history, mission, vision and values',
      link: '/about',
      category: 'About',
      keywords: [
        'about', 'history', 'mission', 'vision', 'values',
        'about us', 'school history', 'background', 'heritage',
        'achievements', 'recognition', 'awards', 'accreditation',
        'infrastructure', 'facilities', 'campus'
      ]
    },
    {
      title: 'Admissions',
      description: 'Learn about admission process, fees, scholarships and requirements',
      link: '/admissions',
      category: 'Admissions',
      keywords: [
        'admission', 'admissions', 'apply', 'enroll', 'registration', 
        'fee', 'fees', 'payment', 'tuition', 'cost', 'pay',
        'scholarship', 'financial aid', 'discount', 'concession',
        'requirements', 'documents', 'form', 'admission form',
        'new admission', 'school admission', 'admission fee',
        'admission process', 'how to apply', 'admission criteria',
        'school fees', 'monthly fees', 'annual fees', 'prospectus'
      ]
    },
    {
      title: 'Academics',
      description: 'Explore our academic programs, curriculum and learning approach',
      link: '/academics',
      category: 'Academics',
      keywords: [
        'academic', 'study', 'course', 'program', 'programmes',
        'subject', 'class', 'grade', 'curriculum', 'standard',
        'syllabus', 'education', 'learning', 'study',
        'primary', 'secondary', 'higher secondary', 'class',
        'stream', 'science', 'arts', 'commerce', 'subjects',
        'school timing', 'class timing', 'periods',
        'teaching', 'learning', 'study material', 'books',
        'academic programs', 'courses offered', 'subjects offered'
      ]
    },
    {
      title: 'Faculty',
      description: 'Meet our experienced teachers and staff members',
      link: '/faculty',
      category: 'Faculty',
      keywords: [
        'faculty', 'teacher', 'teachers', 'staff', 'professor',
        'instructor', 'admin', 'administration', 'teaching',
        'principal', 'director', 'department', 'head',
        'teaching staff', 'school staff', 'management',
        'faculty members', 'school teachers', 'educators',
        'teaching faculty', 'academic staff', 'school administration',
        'department heads', 'coordinators', 'mentors'
      ]
    },
    {
      title: 'Photo Gallery',
      description: 'View photos of our school events, activities and campus',
      link: '/gallery',
      category: 'Gallery',
      keywords: [
        'gallery', 'photos', 'images', 'pictures', 'photographs',
        'school photos', 'event photos', 'campus photos',
        'activity photos', 'memories', 'school events',
        'photo gallery', 'image gallery', 'school gallery',
        'campus tour', 'virtual tour', 'school campus'
      ]
    },
    {
      title: 'News & Events',
      description: 'Stay updated with latest news, events and announcements',
      link: '/news',
      category: 'News',
      keywords: [
        'news', 'events', 'announcements', 'updates', 'latest',
        'school news', 'recent events', 'upcoming events',
        'notifications', 'circular', 'notice', 'bulletin',
        'newsletter', 'school events', 'important announcements',
        'news updates', 'school updates', 'whats new'
      ]
    },
    {
      title: 'Calendar',
      description: 'View academic calendar, events and important dates',
      link: '/calendar',
      category: 'Calendar',
      keywords: [
        'calendar', 'event', 'date', 'schedule', 'timing',
        'holiday', 'holidays', 'exam', 'exams', 'examination',
        'vacation', 'term', 'academic year', 'timetable',
        'upcoming events', 'school events', 'annual day',
        'sports day', 'school timing', 'class schedule',
        'exam schedule', 'exam timetable', 'holiday list',
        'academic calendar', 'event calendar', 'important dates'
      ]
    },
    {
      title: 'Student Life',
      description: 'Discover student activities, clubs, and resources',
      link: '/student-life',
      category: 'Student Life',
      keywords: [
        'student', 'activity', 'activities', 'club', 'clubs',
        'resource', 'library', 'sports', 'games', 'competition',
        'extracurricular', 'cultural', 'events', 'facilities',
        'student council', 'house system', 'school life',
        'student facilities', 'playground', 'laboratory',
        'computer lab', 'science lab', 'library', 'canteen',
        'sports facilities', 'auditorium', 'smart class',
        'student clubs', 'student organizations', 'student activities'
      ]
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with us and find our location',
      link: '/contact',
      category: 'Contact',
      keywords: [
        'contact', 'phone', 'telephone', 'email', 'address',
        'location', 'map', 'direction', 'reach', 'route',
        'enquiry', 'information', 'visit', 'contact us',
        'appointment', 'office', 'contact number',
        'school address', 'phone number', 'email address',
        'how to reach', 'school location', 'enquiry',
        'get in touch', 'contact details', 'reach us'
      ]
    }
  ];

  const handleSearch = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const searchTerms = searchQuery.toLowerCase().split(' ');
      const filtered = searchData.filter(item => {
        const itemText = `${item.title} ${item.description} ${item.category} ${item.keywords.join(' ')}`.toLowerCase();
        return searchTerms.every(term => itemText.includes(term));
      });
      setResults(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchQuery, searchData]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [searchQuery, handleSearch]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-3xl mt-20 mx-4"
            onClick={e => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-white rounded-lg shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 font-medium placeholder:text-gray-400"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Search Results */}
            <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
              {isLoading ? (
                <div className="p-4 text-center text-gray-500">
                  <div className="animate-spin inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
                  <p className="mt-2">Searching...</p>
                </div>
              ) : searchQuery && results.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p className="text-lg">No results found for &ldquo;{searchQuery}&rdquo;</p>
                  <p className="mt-2">Try searching for something else</p>
                </div>
              ) : (
                results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.link}
                    onClick={onClose}
                    className="block p-4 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {result.title}
                        </h3>
                        <p className="text-gray-600">{result.description}</p>
                        <span className="inline-block mt-2 text-sm text-indigo-600 font-medium">
                          {result.category}
                        </span>
                      </div>
                      <FaChevronRight className="text-gray-400 mt-1 flex-shrink-0" />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay; 