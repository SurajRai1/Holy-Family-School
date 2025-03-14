"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUserGraduate, FaCalendarAlt, FaBook, FaFileAlt, FaChalkboardTeacher } from 'react-icons/fa';

const StudentResources = () => {
  const resources = [
    {
      icon: <FaUserGraduate className="text-3xl text-indigo-700" />,
      title: "Student Portal",
      description: "Access your assignments, grades, and class materials",
      link: "#",
      buttonText: "Login"
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-indigo-700" />,
      title: "Academic Calendar",
      description: "View important dates, holidays, and exam schedules",
      link: "#",
      buttonText: "View Calendar"
    },
    {
      icon: <FaBook className="text-3xl text-indigo-700" />,
      title: "Library Resources",
      description: "Browse our digital library and research materials",
      link: "#",
      buttonText: "Explore"
    },
    {
      icon: <FaFileAlt className="text-3xl text-indigo-700" />,
      title: "Forms & Documents",
      description: "Download important school forms and documents",
      link: "#",
      buttonText: "Download"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Student Resources
          </h2>
          <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Quick access to important tools and information for students and parents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-indigo-100 rounded-full">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <Link 
                href={resource.link}
                className="mt-auto px-4 py-2 bg-indigo-900 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors duration-300"
              >
                {resource.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentResources; 