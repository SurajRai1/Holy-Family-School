"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBook, FaCalendarAlt, FaUserGraduate, FaFileAlt, FaLaptop } from 'react-icons/fa';

const StudentResources = () => {
  const resources = [
    {
      title: "Student Portal",
      description: "Access your grades, assignments, and class materials",
      icon: <FaUserGraduate className="text-3xl text-indigo-600" />,
      link: "/student-portal"
    },
    {
      title: "Library Resources",
      description: "Browse our digital library and research materials",
      icon: <FaBook className="text-3xl text-indigo-600" />,
      link: "/library"
    },
    {
      title: "Academic Calendar",
      description: "View important dates, exams, and school events",
      icon: <FaCalendarAlt className="text-3xl text-indigo-600" />,
      link: "/calendar"
    },
    {
      title: "Forms & Documents",
      description: "Download important school forms and documents",
      icon: <FaFileAlt className="text-3xl text-indigo-600" />,
      link: "/forms"
    },
    {
      title: "E-Learning Platform",
      description: "Access our online learning resources and courses",
      icon: <FaLaptop className="text-3xl text-indigo-600" />,
      link: "/e-learning"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Student Resources</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Quick access to essential resources to support your educational journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link 
                  href={resource.link}
                  className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
                >
                  Access Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentResources; 