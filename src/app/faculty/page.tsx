'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUserTie, FaUserGraduate } from 'react-icons/fa';
import OrgChart from '@/components/faculty/OrgChart';
import FacultySpotlight from '@/components/faculty/FacultySpotlight';

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

      {/* Faculty Statistics */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Years of Experience */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-3">
                <FaGraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">15+ Years</h3>
              <p className="text-gray-600">Average Experience</p>
            </div>

            {/* Total Faculty */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-3">
                <FaUserTie className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">50+</h3>
              <p className="text-gray-600">Total Faculty Members</p>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-3">
                <FaChalkboardTeacher className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">20+</h3>
              <p className="text-gray-600">Subjects Covered</p>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-3">
                <FaUserGraduate className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-indigo-600 mb-2">100+</h3>
              <p className="text-gray-600">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Spotlight and Mission */}
      <FacultySpotlight />
    </MainLayout>
  );
};

export default FacultyPage; 