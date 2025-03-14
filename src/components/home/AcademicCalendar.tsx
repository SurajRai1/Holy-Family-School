"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaBook, 
  FaClipboardCheck, 
  FaBullhorn, 
  FaInfoCircle,
  FaChevronLeft,
  FaChevronRight,
  FaBell,
  FaMapMarkerAlt
} from 'react-icons/fa';

const AcademicCalendar = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const upcomingEvents = [
    {
      date: "August 15, 2023",
      title: "First Day of School",
      type: "academic",
      icon: <FaGraduationCap className="text-blue-600" />,
      location: "Main Campus"
    },
    {
      date: "September 5, 2023",
      title: "Parent-Teacher Conference",
      type: "event",
      icon: <FaClipboardCheck className="text-green-600" />,
      location: "School Auditorium"
    },
    {
      date: "October 10-14, 2023",
      title: "Mid-Term Examinations",
      type: "exam",
      icon: <FaBook className="text-red-600" />,
      location: "All Classrooms"
    },
    {
      date: "October 25, 2023",
      title: "Science Fair",
      type: "event",
      icon: <FaClipboardCheck className="text-green-600" />,
      location: "School Gymnasium"
    }
  ];
  
  const notices = [
    {
      title: "School Uniform Policy Update",
      date: "July 28, 2023",
      content: "Please note that the school uniform policy has been updated for the new academic year. Details can be found on the school portal.",
      type: "announcement",
      priority: "medium"
    },
    {
      title: "School Bus Route Changes",
      date: "August 2, 2023",
      content: "Due to road construction, some school bus routes have been modified. Please check the transportation section for updates.",
      type: "important",
      priority: "high"
    },
    {
      title: "Sports Day Registration",
      date: "August 10, 2023",
      content: "Registration for the annual Sports Day is now open. Students can register for events through their class teachers.",
      type: "announcement",
      priority: "medium"
    }
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'event': return 'bg-green-100 text-green-800 border-green-200';
      case 'exam': return 'bg-red-100 text-red-800 border-red-200';
      case 'holiday': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'announcement': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'important': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityBorder = (priority: string) => {
    switch(priority) {
      case 'high': return 'border-l-4 border-red-500';
      case 'medium': return 'border-l-4 border-yellow-500';
      case 'low': return 'border-l-4 border-green-500';
      default: return '';
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'announcement': return <FaBullhorn className="text-purple-600" />;
      case 'important': return <FaInfoCircle className="text-yellow-600" />;
      default: return <FaCalendarAlt className="text-gray-600" />;
    }
  };

  // Mock calendar grid
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = 'August 2023';
  const calendarDays = [
    { day: 30, isCurrentMonth: false, hasEvent: false },
    { day: 31, isCurrentMonth: false, hasEvent: false },
    { day: 1, isCurrentMonth: true, hasEvent: false },
    { day: 2, isCurrentMonth: true, hasEvent: true, eventType: 'important' },
    { day: 3, isCurrentMonth: true, hasEvent: false },
    { day: 4, isCurrentMonth: true, hasEvent: false },
    { day: 5, isCurrentMonth: true, hasEvent: false },
    { day: 6, isCurrentMonth: true, hasEvent: false },
    { day: 7, isCurrentMonth: true, hasEvent: false },
    { day: 8, isCurrentMonth: true, hasEvent: false },
    { day: 9, isCurrentMonth: true, hasEvent: false },
    { day: 10, isCurrentMonth: true, hasEvent: true, eventType: 'announcement' },
    { day: 11, isCurrentMonth: true, hasEvent: false },
    { day: 12, isCurrentMonth: true, hasEvent: false },
    { day: 13, isCurrentMonth: true, hasEvent: false },
    { day: 14, isCurrentMonth: true, hasEvent: false },
    { day: 15, isCurrentMonth: true, hasEvent: true, eventType: 'academic' },
    { day: 16, isCurrentMonth: true, hasEvent: false },
    { day: 17, isCurrentMonth: true, hasEvent: false },
    { day: 18, isCurrentMonth: true, hasEvent: false },
    { day: 19, isCurrentMonth: true, hasEvent: false },
    { day: 20, isCurrentMonth: true, hasEvent: false },
    { day: 21, isCurrentMonth: true, hasEvent: false },
    { day: 22, isCurrentMonth: true, hasEvent: false },
    { day: 23, isCurrentMonth: true, hasEvent: false },
    { day: 24, isCurrentMonth: true, hasEvent: false },
    { day: 25, isCurrentMonth: true, hasEvent: true, eventType: 'event' },
    { day: 26, isCurrentMonth: true, hasEvent: false },
    { day: 27, isCurrentMonth: true, hasEvent: false },
    { day: 28, isCurrentMonth: true, hasEvent: false },
    { day: 29, isCurrentMonth: true, hasEvent: false },
    { day: 30, isCurrentMonth: true, hasEvent: false },
    { day: 31, isCurrentMonth: true, hasEvent: false },
    { day: 1, isCurrentMonth: false, hasEvent: false },
    { day: 2, isCurrentMonth: false, hasEvent: false },
  ];

  const getEventTypeColor = (eventType: string) => {
    switch(eventType) {
      case 'academic': return 'bg-blue-500';
      case 'event': return 'bg-green-500';
      case 'exam': return 'bg-red-500';
      case 'important': return 'bg-yellow-500';
      case 'announcement': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredEvents = activeTab === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Academic Calendar & Notices
          </h2>
          <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Stay updated with important dates, events, and announcements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Calendar Widget - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white flex justify-between items-center">
              <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors duration-200">
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <h3 className="text-lg font-bold">{currentMonth}</h3>
              <button className="p-2 hover:bg-indigo-700 rounded-full transition-colors duration-200">
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-7 gap-1 mb-4">
                {daysOfWeek.map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day, index) => (
                  <div 
                    key={index} 
                    className={`
                      relative text-center p-2 rounded-lg text-sm cursor-pointer
                      transition-all duration-200 transform hover:scale-110
                      ${!day.isCurrentMonth ? 'text-gray-400 hover:bg-gray-50' : 'text-gray-800 hover:bg-gray-100'}
                      ${day.hasEvent ? 'font-medium' : ''}
                      ${day.day === 15 ? 'ring-2 ring-indigo-800 ring-offset-2 bg-indigo-50' : ''}
                    `}
                  >
                    {day.day}
                    {day.hasEvent && (
                      <span 
                        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${getEventTypeColor(day.eventType)}`}
                      ></span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Academic</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Exams</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Events</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Important</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Events - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
              <h3 className="text-lg font-bold flex items-center">
                <FaBell className="mr-2" /> Upcoming Events
              </h3>
            </div>
            
            {/* Event Type Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                  ${activeTab === 'all' ? 'text-indigo-900 border-b-2 border-indigo-900' : 'text-gray-600 hover:text-indigo-900'}`}
              >
                All Events
              </button>
              <button 
                onClick={() => setActiveTab('academic')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                  ${activeTab === 'academic' ? 'text-indigo-900 border-b-2 border-indigo-900' : 'text-gray-600 hover:text-indigo-900'}`}
              >
                Academic
              </button>
              <button 
                onClick={() => setActiveTab('event')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                  ${activeTab === 'event' ? 'text-indigo-900 border-b-2 border-indigo-900' : 'text-gray-600 hover:text-indigo-900'}`}
              >
                Events
              </button>
              <button 
                onClick={() => setActiveTab('exam')}
                className={`px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap
                  ${activeTab === 'exam' ? 'text-indigo-900 border-b-2 border-indigo-900' : 'text-gray-600 hover:text-indigo-900'}`}
              >
                Exams
              </button>
            </div>
            
            <div className="divide-y divide-gray-200 max-h-[350px] overflow-y-auto">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <div key={index} className="p-4 hover:bg-indigo-50 transition-colors duration-200">
                    <div className="flex items-start">
                      <div className="mr-4 p-2 rounded-full bg-gray-100">
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-lg">{event.title}</h4>
                        <div className="flex flex-wrap items-center gap-x-4 mt-1 text-sm text-gray-500">
                          <p className="flex items-center">
                            <FaCalendarAlt className="mr-1 text-gray-400" /> {event.date}
                          </p>
                          <p className="flex items-center">
                            <FaMapMarkerAlt className="mr-1 text-gray-400" /> {event.location}
                          </p>
                        </div>
                        <span className={`mt-2 inline-block px-3 py-1 text-xs rounded-full border ${getTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No events found for this category
                </div>
              )}
            </div>
            <div className="p-4 text-center border-t border-gray-200 bg-gray-50">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-indigo-900 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                View Full Calendar
                <FaChevronRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </motion.div>

          {/* School Notices - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-4 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
              <h3 className="text-lg font-bold flex items-center">
                <FaBullhorn className="mr-2" /> School Notices & Announcements
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {notices.map((notice, index) => (
                <div 
                  key={index} 
                  className={`p-5 hover:bg-indigo-50 transition-colors duration-200 ${getPriorityBorder(notice.priority)}`}
                >
                  <div className="flex items-start">
                    <div className="mr-3 p-2 rounded-full bg-gray-100">
                      {getTypeIcon(notice.type)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{notice.title}</h4>
                      <p className="text-sm text-gray-500 mb-3 flex items-center">
                        <FaCalendarAlt className="mr-1 text-gray-400" /> {notice.date}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">{notice.content}</p>
                      <div className="flex items-center justify-between">
                        <span className={`inline-block px-3 py-1 text-xs rounded-full border ${getTypeColor(notice.type)}`}>
                          {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                        </span>
                        <button className="text-indigo-900 hover:text-indigo-700 text-sm font-medium">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 text-center border-t border-gray-200 bg-gray-50">
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-indigo-900 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                View All Notices
                <FaChevronRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademicCalendar; 