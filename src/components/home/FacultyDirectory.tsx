"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaTwitter, FaGraduationCap } from 'react-icons/fa';

const FacultyDirectory = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const faculty = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      department: "Administration",
      email: "sjohnson@holyfamilyschool.edu",
      phone: "+1 (555) 123-4567",
      bio: "Dr. Johnson has over 20 years of experience in education leadership and holds a Ph.D. in Educational Administration.",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      image: "/images/faculty/principal.jpg",
      specialty: "Educational Leadership"
    },
    {
      name: "Michael Chen, M.Ed.",
      position: "Vice Principal",
      department: "Administration",
      email: "mchen@holyfamilyschool.edu",
      phone: "+1 (555) 123-4568",
      bio: "Mr. Chen specializes in curriculum development and student affairs. He has been with Holy Family for 12 years.",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      image: "/images/faculty/vice-principal.jpg",
      specialty: "Curriculum Development"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Science Department",
      department: "Science",
      email: "erodriguez@holyfamilyschool.edu",
      phone: "+1 (555) 123-4569",
      bio: "Dr. Rodriguez is a published researcher in biochemistry and brings real-world science experience to our classrooms.",
      social: {
        linkedin: "#",
        twitter: "#"
      },
      image: "/images/faculty/science-head.jpg",
      specialty: "Biochemistry"
    },
    {
      name: "Robert Williams, M.A.",
      position: "Mathematics Teacher",
      department: "Mathematics",
      email: "rwilliams@holyfamilyschool.edu",
      phone: "+1 (555) 123-4570",
      bio: "Mr. Williams makes complex mathematical concepts accessible and engaging for students of all levels.",
      social: {
        linkedin: "#"
      },
      image: "/images/faculty/math-teacher.jpg",
      specialty: "Advanced Calculus"
    },
    {
      name: "Jennifer Lee, Ph.D.",
      position: "English Literature Teacher",
      department: "English",
      email: "jlee@holyfamilyschool.edu",
      phone: "+1 (555) 123-4571",
      bio: "Dr. Lee is passionate about fostering critical thinking through literature and creative writing.",
      social: {
        twitter: "#"
      },
      image: "/images/faculty/english-teacher.jpg",
      specialty: "Modern Literature"
    },
    {
      name: "David Thompson",
      position: "Physical Education Teacher",
      department: "Physical Education",
      email: "dthompson@holyfamilyschool.edu",
      phone: "+1 (555) 123-4572",
      bio: "Coach Thompson is dedicated to promoting physical fitness and teamwork through sports and activities.",
      social: {},
      image: "/images/faculty/pe-teacher.jpg",
      specialty: "Sports Psychology"
    }
  ];

  const departments = ['Administration', 'Science', 'Mathematics', 'English', 'Physical Education'];
  
  const filteredFaculty = activeFilter === 'all' 
    ? faculty 
    : faculty.filter(member => member.department === activeFilter);

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
            Our Faculty
          </h2>
          <div className="w-24 h-1 bg-indigo-900 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Meet our dedicated teachers and staff who are committed to educational excellence
          </p>
          
          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeFilter === 'all' 
                  ? 'bg-indigo-900 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            >
              All Departments
            </button>
            {departments.map((dept, index) => (
              <button 
                key={index}
                onClick={() => setActiveFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === dept 
                    ? 'bg-indigo-900 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl group-hover:-translate-y-2">
                {/* Card Top with Image and Overlay */}
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder image with gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-700 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white opacity-30">{member.name.charAt(0)}</span>
                  </div>
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-indigo-900 shadow-sm">
                      {member.department}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300">
                          <FaLinkedin className="text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300">
                          <FaTwitter className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-indigo-900 transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.position}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaGraduationCap className="mr-2 text-indigo-700" />
                    <span>{member.specialty}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col gap-2">
                      <a 
                        href={`mailto:${member.email}`} 
                        className="flex items-center text-sm text-gray-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        <FaEnvelope className="mr-2 text-gray-400" />
                        {member.email}
                      </a>
                      <a 
                        href={`tel:${member.phone}`} 
                        className="flex items-center text-sm text-gray-600 hover:text-indigo-900 transition-colors duration-300"
                      >
                        <FaPhoneAlt className="mr-2 text-gray-400" />
                        {member.phone}
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button className="w-full text-center text-indigo-900 font-medium text-sm hover:text-indigo-700 transition-colors duration-300">
                    View Full Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredFaculty.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">No faculty members found in this department.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-indigo-900 text-white font-medium rounded-lg hover:bg-indigo-800 transition-colors duration-300"
          >
            View All Faculty
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacultyDirectory; 