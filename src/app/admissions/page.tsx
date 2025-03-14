"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaClipboardList, FaCalendarAlt, FaFileAlt, FaQuestionCircle } from 'react-icons/fa';

const AdmissionsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions</h1>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-indigo-100 mb-8">
              Join our vibrant learning community at Holy Family Higher Secondary School
            </p>
          </div>
        </div>
      </section>

      {/* Admissions Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Follow these simple steps to apply for admission to Holy Family Higher Secondary School.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-indigo-900 text-white rounded-full font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Application Form</h3>
                  <p className="text-gray-600 mb-4">
                    Complete the application form with all required information and submit it along with the necessary documents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Birth Certificate</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Previous School Records</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Passport Photos</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-indigo-900 text-white rounded-full font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Entrance Assessment</h3>
                  <p className="text-gray-600 mb-4">
                    Students will be evaluated through an entrance test to assess their academic readiness for the appropriate grade level.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Mathematics</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">General Knowledge</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-indigo-900 text-white rounded-full font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Interview</h3>
                  <p className="text-gray-600 mb-4">
                    Selected candidates and their parents will be invited for an interview with school administrators.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-4">
                  <span className="flex items-center justify-center w-8 h-8 bg-indigo-900 text-white rounded-full font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Admission Confirmation</h3>
                  <p className="text-gray-600 mb-4">
                    Successful candidates will receive an admission offer. Complete the enrollment by paying the required fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Important Dates
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Mark your calendar with these key dates for the admission process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Application Period</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Start:</span> January 15, 2024
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">End:</span> March 31, 2024
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Entrance Tests</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">First Round:</span> April 15, 2024
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Second Round:</span> May 10, 2024
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Interview Dates</h3>
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">Period:</span> April 20 - May 20, 2024
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-indigo-600 text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Results Announcement</h3>
                </div>
                <p className="text-gray-600">
                  <span className="font-semibold">Date:</span> June 1, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fee Structure
            </h2>
            <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Transparent information about our tuition and other fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-indigo-900 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Fee Type</th>
                  <th className="py-3 px-4 text-left">Primary (1-5)</th>
                  <th className="py-3 px-4 text-left">Middle (6-8)</th>
                  <th className="py-3 px-4 text-left">Secondary (9-10)</th>
                  <th className="py-3 px-4 text-left">Higher Secondary (11-12)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Admission Fee (One-time)</td>
                  <td className="py-3 px-4">₹5,000</td>
                  <td className="py-3 px-4">₹6,000</td>
                  <td className="py-3 px-4">₹7,000</td>
                  <td className="py-3 px-4">₹8,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Tuition Fee (Monthly)</td>
                  <td className="py-3 px-4">₹2,500</td>
                  <td className="py-3 px-4">₹3,000</td>
                  <td className="py-3 px-4">₹3,500</td>
                  <td className="py-3 px-4">₹4,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Development Fee (Annual)</td>
                  <td className="py-3 px-4">₹5,000</td>
                  <td className="py-3 px-4">₹5,000</td>
                  <td className="py-3 px-4">₹6,000</td>
                  <td className="py-3 px-4">₹6,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Computer Lab Fee (Annual)</td>
                  <td className="py-3 px-4">₹2,000</td>
                  <td className="py-3 px-4">₹2,500</td>
                  <td className="py-3 px-4">₹3,000</td>
                  <td className="py-3 px-4">₹3,500</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Library Fee (Annual)</td>
                  <td className="py-3 px-4">₹1,000</td>
                  <td className="py-3 px-4">₹1,500</td>
                  <td className="py-3 px-4">₹2,000</td>
                  <td className="py-3 px-4">₹2,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                  <span>Fees can be paid quarterly, half-yearly, or annually.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                  <span>A 5% discount is offered for annual payment of tuition fees.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                  <span>Payment can be made through bank transfer, check, or online payment portal.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></span>
                  <span>Late payment will incur a penalty of 2% per month.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 bg-indigo-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Contact Admissions Office</h2>
                <p className="mb-8">
                  Have questions about the admission process? Our admissions team is here to help you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-indigo-200">Phone</p>
                      <p>+91 1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-indigo-200">Email</p>
                      <p>admissions@holyfamilyschool.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                      <p className="font-medium text-indigo-200">Office Hours</p>
                      <p>Monday to Friday: 9:00 AM - 4:00 PM</p>
                      <p>Saturday: 9:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-900 text-white py-2 px-4 rounded-md hover:bg-indigo-800 transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Take the first step towards a quality education at Holy Family Higher Secondary School.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="bg-white text-indigo-900 py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                Download Application Form
              </a>
              <a href="#" className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AdmissionsPage; 