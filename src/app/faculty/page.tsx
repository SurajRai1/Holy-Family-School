'use client';

import React from 'react';
import Image from 'next/image';
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

export const metadata = {
  title: 'Faculty & Staff | Holy Family School',
  description: 'Meet our dedicated faculty and staff members who are committed to providing quality education and nurturing young minds.',
};

const FacultyPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Faculty & Staff
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Meet the dedicated team of educators and staff members who make Holy Family School a place of excellence in education.
            </p>
          </div>
        </div>
      </div>

      {/* Organization Chart */}
      <OrgChart />

      {/* Faculty Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Arts Department */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/faculty/arts-department.jpg"
                alt="Arts Department"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Arts Department</h3>
                <p className="text-white/90 mt-2">Class 11-12 Arts</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Our Arts department provides comprehensive education in humanities, social sciences, and fine arts.
              </p>
            </div>
          </div>

          {/* High School */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/faculty/high-school.jpg"
                alt="High School"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">High School</h3>
                <p className="text-white/90 mt-2">Classes 9-10</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                High school education focusing on academic excellence and personal development.
              </p>
            </div>
          </div>

          {/* Primary School */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/faculty/primary-school.jpg"
                alt="Primary School"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">Primary School</h3>
                <p className="text-white/90 mt-2">Classes 1-5</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                Foundation years focusing on basic education and character building.
              </p>
            </div>
          </div>
        </div>
      </div>

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