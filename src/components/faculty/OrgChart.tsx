'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaUserFriends, FaUserCircle, FaTimes, FaUsers } from 'react-icons/fa';
import Image from 'next/image';

interface Member {
  name: string;
  position: string;
  image: string;
  gender: string;
}

interface Section {
  title: string;
  icon: React.ElementType;
  members: Member[];
}

interface Hierarchy {
  [key: string]: Section;
}

interface GenderRatio {
  female: number;
  male: number;
}

const OrgChart = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [clickedMember, setClickedMember] = useState<number | null>(null);

  // Clear clicked member after 2 seconds
  useEffect(() => {
    if (clickedMember !== null) {
      const timer = setTimeout(() => {
        setClickedMember(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [clickedMember]);

  const hierarchy: Hierarchy = {
    administrator: {
      title: "Administration",
      icon: FaUserTie,
      members: [
        { 
          name: "Rev. Fr. John Doe", 
          position: "Principal",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Dr. Sarah Smith", 
          position: "Vice Principal",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. David Wilson", 
          position: "Administrative Officer",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
          gender: "male"
        }
      ]
    },
    arts: {
      title: "Class 11-12 Arts",
      icon: FaUserGraduate,
      members: [
        { 
          name: "Mr. James Wilson", 
          position: "Head of Arts Department",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Mary Johnson", 
          position: "English Teacher",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. Robert Brown", 
          position: "History Teacher",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Elizabeth Davis", 
          position: "Political Science Teacher",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
          gender: "female"
        }
      ]
    },
    highSchool: {
      title: "High School",
      icon: FaChalkboardTeacher,
      members: [
        { 
          name: "Mr. Michael Lee", 
          position: "Head of High School",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Patricia White", 
          position: "Science Teacher",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. David Wilson", 
          position: "Mathematics Teacher",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Jennifer Brown", 
          position: "Social Studies Teacher",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
          gender: "female"
        }
      ]
    },
    primary: {
      title: "Primary School",
      icon: FaUserFriends,
      members: [
        { 
          name: "Mrs. Sarah Johnson", 
          position: "Head of Primary",
          image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. Thomas Lee", 
          position: "Class 5 Teacher",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Emily Davis", 
          position: "Class 4 Teacher",
          image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. William Brown", 
          position: "Class 3 Teacher",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
          gender: "male"
        }
      ]
    },
    kindergarten: {
      title: "Kindergarten",
      icon: FaUserCircle,
      members: [
        { 
          name: "Mrs. Lisa Wilson", 
          position: "Head of Kindergarten",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Ms. Rachel Green", 
          position: "KG Teacher",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mrs. Maria Garcia", 
          position: "KG Teacher",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
          gender: "female"
        }
      ]
    },
    others: {
      title: "Other Staff",
      icon: FaUsers,
      members: [
        { 
          name: "Mr. James Brown", 
          position: "Librarian",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Emily Davis", 
          position: "School Nurse",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. Michael Lee", 
          position: "IT Coordinator",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
          gender: "male"
        },
        { 
          name: "Mrs. Patricia White", 
          position: "Counsellor",
          image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
          gender: "female"
        },
        { 
          name: "Mr. Robert Green", 
          position: "Sports Coach",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
          gender: "male"
        }
      ]
    }
  };

  const calculateGenderRatio = (members: Member[]): GenderRatio => {
    const total = members.length;
    const female = members.filter(m => m.gender === "female").length;
    const male = total - female;
    return {
      female: (female / total) * 100,
      male: (male / total) * 100
    };
  };

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
            School Organization
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our faculty structure and meet the dedicated educators shaping young minds.
          </p>
        </motion.div>

        {/* Horizontal Navigation - Scrollable on Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-8 sm:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center sm:space-x-4 hide-scrollbar">
          {Object.entries(hierarchy).map(([key, section]) => (
            <motion.button
              key={key}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSection(key)}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                selectedSection === key
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {React.createElement(section.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
              <span className="font-medium text-sm sm:text-base">{section.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Detailed View */}
        <AnimatePresence>
          {selectedSection && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-xl border border-gray-100 p-4 sm:p-8"
            >
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    {React.createElement(hierarchy[selectedSection].icon, { className: "w-5 h-5 text-indigo-600" })}
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{hierarchy[selectedSection].title}</h2>
                </div>
                <button
                  onClick={() => setSelectedSection(null)}
                  className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <FaTimes className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {/* Gender Ratio */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900">Gender Distribution</h3>
                  <div className="relative h-24 sm:h-32 bg-gray-50 rounded-lg overflow-hidden">
                    {(() => {
                      const ratio = calculateGenderRatio(hierarchy[selectedSection].members);
                      return (
                        <>
                          <div 
                            className="absolute inset-0 bg-pink-100"
                            style={{ width: `${ratio.female}%` }}
                          />
                          <div 
                            className="absolute inset-0 bg-blue-100"
                            style={{ width: `${ratio.male}%`, left: `${ratio.female}%` }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-sm sm:text-base text-gray-600 font-medium">
                            {ratio.female.toFixed(0)}% Female | {ratio.male.toFixed(0)}% Male
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* Faculty Members - Horizontally Scrollable */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6">Faculty Members</h3>
                  <div className="relative">
                    <div className="flex overflow-x-auto pb-8 gap-6 hide-scrollbar">
                      {hierarchy[selectedSection].members.map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="relative group flex-shrink-0 flex flex-col items-center"
                          onMouseEnter={() => setHoveredMember(index)}
                          onMouseLeave={() => setHoveredMember(null)}
                          onClick={() => setClickedMember(index)}
                        >
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={96}
                              height={96}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <AnimatePresence>
                            {(hoveredMember === index || clickedMember === index) && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 text-center bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg"
                              >
                                <p className="text-sm font-medium text-gray-900 mb-1">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.position}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OrgChart; 