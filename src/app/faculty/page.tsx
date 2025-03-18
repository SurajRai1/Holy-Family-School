'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaUserTie, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import OrgChart from '@/components/faculty/OrgChart';
import FacultySpotlight from '@/components/faculty/FacultySpotlight';

const FacultyPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative h-[30vh] sm:h-[40vh] bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
              Our Faculty & Staff
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Meet the dedicated team of educators and staff members who make Holy Family School a place of excellence in education.
            </p>
          </div>
        </div>
      </div>

      {/* Organization Chart */}
      <OrgChart />

      {/* Faculty Statistics */}
      <div className="w-full bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {/* Years of Experience */}
            <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-2 sm:mb-3">
                <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">15+ Years</h3>
              <p className="text-xs sm:text-base text-gray-600">Average Experience</p>
            </div>

            {/* Total Faculty */}
            <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-2 sm:mb-3">
                <FaUserTie className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">50+</h3>
              <p className="text-xs sm:text-base text-gray-600">Total Faculty Members</p>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-2 sm:mb-3">
                <FaChalkboardTeacher className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">20+</h3>
              <p className="text-xs sm:text-base text-gray-600">Subjects Covered</p>
            </div>

            {/* Awards */}
            <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-indigo-600 mb-2 sm:mb-3">
                <FaUserGraduate className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-indigo-600 mb-1 sm:mb-2">100+</h3>
              <p className="text-xs sm:text-base text-gray-600">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Spotlight and Mission */}
      <div className="w-full">
        <FacultySpotlight />
      </div>
    </MainLayout>
  );
};

export default FacultyPage; 