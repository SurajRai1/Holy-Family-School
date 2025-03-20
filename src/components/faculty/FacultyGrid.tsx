import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import { facultyData } from '../../utils/facultyData';

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