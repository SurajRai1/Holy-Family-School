"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaTrophy, FaUniversity, FaFlask, FaMusic, FaPalette } from 'react-icons/fa';

const AcademicsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-indigo-100 mb-8">
              Discover our comprehensive academic programs designed to nurture intellectual growth and prepare students for future success.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Programs
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our school offers a diverse range of academic programs to meet the needs and interests of all students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaUniversity />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Primary Education</h3>
              <p className="text-gray-600">
                A strong foundation in core subjects with emphasis on developing fundamental skills and fostering curiosity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaBook />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Secondary Education</h3>
              <p className="text-gray-600">
                Comprehensive curriculum preparing students for higher education with focus on critical thinking and problem-solving.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaFlask />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Science Stream</h3>
              <p className="text-gray-600">
                Advanced courses in Physics, Chemistry, Biology, and Mathematics with hands-on laboratory experiences.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
              <div className="text-indigo-600 text-4xl mb-4 flex justify-center">
                <FaPalette />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Arts & Humanities</h3>
              <p className="text-gray-600">
                Rich curriculum in History, Geography, Economics, Political Science, and Languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Curriculum Approach
              </h2>
              <div className="w-24 h-1 bg-indigo-900 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                At Holy Family Higher Secondary School, we follow a holistic curriculum that balances academic rigor with character development and practical skills.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Inquiry-Based Learning</h3>
                    <p className="text-gray-600">Encouraging students to ask questions, investigate, and discover knowledge through guided exploration.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Integrated Technology</h3>
                    <p className="text-gray-600">Incorporating digital tools and resources to enhance learning experiences and develop digital literacy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Personalized Learning</h3>
                    <p className="text-gray-600">Adapting instruction to meet individual student needs, interests, and learning styles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-800">Global Perspective</h3>
                    <p className="text-gray-600">Developing cultural awareness and global citizenship through diverse content and international connections.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-900/20 rounded-xl transform rotate-3"></div>
                <img 
                  src="/images/classroom.jpg" 
                  alt="Students in classroom" 
                  className="relative rounded-lg shadow-xl w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Distinguished Faculty
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our dedicated teachers bring expertise, passion, and innovation to the classroom every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <FaChalkboardTeacher className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Experienced Educators</h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our teachers average over 10 years of teaching experience, with many holding advanced degrees in their fields.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <FaGraduationCap className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Continuous Professional Development</h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  Teachers regularly participate in workshops, conferences, and training to stay current with educational best practices.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 rounded-full p-3 mr-4">
                    <FaBook className="text-indigo-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Subject Matter Experts</h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  Specialized teachers for each subject area ensure deep content knowledge and effective instruction.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="/faculty-directory" className="inline-block bg-indigo-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-800 transition duration-300">
              View Faculty Directory
            </a>
          </div>
        </div>
      </section>

      {/* Academic Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Academic Achievements
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our students consistently excel in academics, competitions, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaTrophy className="text-indigo-600 mr-3" />
                Examination Results
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">95% distinction rate</span> in the Higher Secondary Examinations
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">100% pass rate</span> for the past 5 consecutive years
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">15 district toppers</span> in the last 3 years
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <FaTrophy className="text-indigo-600 mr-3" />
                Competitions & Olympiads
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">National Science Olympiad:</span> 3 Gold, 5 Silver, and 8 Bronze medals
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">Mathematics Competition:</span> Regional champions for 2 consecutive years
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">
                    <span className="font-semibold">Debate and Elocution:</span> First place in state-level competitions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Discover how Holy Family Higher Secondary School can provide your child with an exceptional educational experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/admissions" className="bg-white text-indigo-900 py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                Apply Now
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AcademicsPage; 