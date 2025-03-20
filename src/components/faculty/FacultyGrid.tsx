import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';

interface FacultyMember {
  id: string;
  name: string;
  position: string;
  image: string;
  details: string[];
}

const facultyData: FacultyMember[] = [
  {
    id: '1',
    name: 'Ryan Brown',
    position: 'DIRECTOR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop',
    details: [
      '10+ years in software development',
      'Led multiple successful startups',
      'PhD in Computer Science',
      '5 years of teaching at leading universities',
      'Full stack developer',
      'Led engineering teams (more than 50 20 people)'
    ]
  },
  {
    id: '2',
    name: 'Mark Garcia',
    position: 'SENIOR DEVELOPER',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '3',
    name: 'Rachel Davis',
    position: 'DEVELOPMENT MANAGER',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '4',
    name: 'Anna Williams',
    position: 'FULL STACK DEVELOPER',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '5',
    name: 'Mark Chen',
    position: 'FRONTEND DEVELOPER',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '6',
    name: 'Jennifer Taylor',
    position: 'BACKEND DEVELOPER',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '7',
    name: 'David Anderson',
    position: 'BUSINESS LEAD',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '8',
    name: 'Rodriguez',
    position: 'SENIOR DEVELOPER',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '9',
    name: 'Alexander',
    position: 'FULL STACK DEVELOPER',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '10',
    name: 'Sarah Johnson',
    position: 'UI/UX DESIGNER',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '11',
    name: 'Michael Zhang',
    position: 'MOBILE DEVELOPER',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '12',
    name: 'Emily Parker',
    position: 'PRODUCT MANAGER',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '13',
    name: 'James Wilson',
    position: 'CLOUD ARCHITECT',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '14',
    name: 'Sofia Rodriguez',
    position: 'DATA SCIENTIST',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '15',
    name: 'Lucas Kim',
    position: 'DEVOPS ENGINEER',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '16',
    name: 'Emma Thompson',
    position: 'QA LEAD',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '17',
    name: 'Daniel Lee',
    position: 'SECURITY SPECIALIST',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '18',
    name: 'Olivia Martinez',
    position: 'SYSTEMS ANALYST',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '19',
    name: 'William Chang',
    position: 'AI RESEARCHER',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop',
    details: []
  },
  {
    id: '20',
    name: 'Isabella Silva',
    position: 'BLOCKCHAIN DEVELOPER',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=700&fit=crop',
    details: []
  }
];

const FacultyGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-black via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            The Minds Behind
          </h2>
          <p className="text-xl text-gray-400">Our vision and innovation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facultyData.map((faculty) => (
            <motion.div
              key={faculty.id}
              layout
              transition={{
                layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
              }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-black"
              style={{ 
                height: expandedId === faculty.id ? '600px' : '500px',
                maxWidth: '320px',
                margin: '0 auto',
                width: '100%'
              }}
            >
              <motion.div
                layout
                transition={{
                  layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                }}
                className="relative w-full h-full"
              >
                <motion.div 
                  className="relative w-full"
                  animate={{
                    height: expandedId === faculty.id ? '300px' : '500px'
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 320px) 100vw, 320px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-80" />
                  <button
                    onClick={() => setExpandedId(expandedId === faculty.id ? null : faculty.id)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer z-10"
                  >
                    <FaPlus
                      className={`text-white transition-transform duration-500 ease-in-out ${
                        expandedId === faculty.id ? 'rotate-45 scale-110' : 'scale-100'
                      }`}
                    />
                  </button>
                </motion.div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0"
                  animate={{
                    y: expandedId === faculty.id ? 0 : '0'
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="p-6">
                    <motion.div
                      animate={{
                        y: expandedId === faculty.id ? 0 : 0,
                        opacity: 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-xl font-medium text-white mb-1">
                        {faculty.name}
                      </h3>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
                        {faculty.position}
                      </p>
                    </motion.div>

                    <AnimatePresence mode="sync">
                      {expandedId === faculty.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          {faculty.details.length > 0 ? (
                            <ul className="space-y-2 text-sm text-gray-400">
                              {faculty.details.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 }}
                                  className="flex items-start"
                                >
                                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-1.5"></span>
                                  <span className="leading-tight">{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-gray-400">More details coming soon...</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyGrid; 