'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import OrgChart from '@/components/faculty/OrgChart';

const facultyMembers = [
  {
    name: "Rev. Fr. John Doe",
    position: "Principal",
    department: "Administration",
    image: "/images/faculty/principal.jpg",
    description: "Experienced educational leader with over 20 years of experience in Catholic education."
  },
  {
    name: "Dr. Sarah Smith",
    position: "Vice Principal",
    department: "Administration",
    image: "/images/faculty/vice-principal.jpg",
    description: "PhD in Education with expertise in curriculum development and student welfare."
  },
  {
    name: "Mr. James Wilson",
    position: "Head of Science Department",
    department: "Science",
    image: "/images/faculty/science-head.jpg",
    description: "MSc in Physics with 15 years of teaching experience in CBSE curriculum."
  },
  {
    name: "Mrs. Mary Johnson",
    position: "Head of Mathematics Department",
    department: "Mathematics",
    image: "/images/faculty/math-head.jpg",
    description: "MSc in Mathematics with expertise in advanced mathematics and statistics."
  },
  {
    name: "Mr. Robert Brown",
    position: "Head of English Department",
    department: "English",
    image: "/images/faculty/english-head.jpg",
    description: "MA in English Literature with specialization in modern literature and creative writing."
  },
  {
    name: "Mrs. Elizabeth Davis",
    position: "Head of Social Studies Department",
    department: "Social Studies",
    image: "/images/faculty/social-head.jpg",
    description: "MA in History with extensive experience in CBSE social studies curriculum."
  },
  {
    name: "Mr. Michael Lee",
    position: "Head of Computer Science Department",
    department: "Computer Science",
    image: "/images/faculty/computer-head.jpg",
    description: "MSc in Computer Science with expertise in programming and digital education."
  },
  {
    name: "Mrs. Patricia White",
    position: "Head of Physical Education Department",
    department: "Physical Education",
    image: "/images/faculty/pe-head.jpg",
    description: "MEd in Physical Education with experience in sports coaching and fitness training."
  }
];

const categories = [
  { name: "Administration", icon: FaUserTie, count: 2 },
  { name: "Science", icon: FaGraduationCap, count: 12 },
  { name: "Mathematics", icon: FaChalkboardTeacher, count: 8 },
  { name: "English", icon: FaUserGraduate, count: 10 },
  { name: "Social Studies", icon: FaGraduationCap, count: 6 },
  { name: "Computer Science", icon: FaUserGraduate, count: 4 },
  { name: "Physical Education", icon: FaChalkboardTeacher, count: 3 }
];

const FacultyPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Meet our dedicated team of educators who are committed to nurturing young minds and shaping future leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organization Chart */}
      <OrgChart />

      {/* Faculty Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faculty Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty members are organized into specialized departments, each contributing to our comprehensive educational program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <category.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} Faculty Members</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Faculty Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced and dedicated faculty members who are committed to providing quality education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-indigo-200">{member.position}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {member.department}
                    </span>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FacultyPage; 