"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Holy Family Higher Secondary School provided my children with an exceptional education that prepared them well for college and beyond. The teachers truly care about each student.",
      name: "Priya Sharma",
      role: "Parent of Alumni",
      image: "/images/testimonial-1.jpg"
    },
    {
      quote: "As a former student, I can say that the values and education I received at Holy Family have shaped my career and personal growth in profound ways.",
      name: "Rahul Patel",
      role: "Alumni, Class of 2015",
      image: "/images/testimonial-2.jpg"
    },
    {
      quote: "The supportive environment and academic rigor at Holy Family Higher Secondary School helped my daughter develop confidence and a love for learning.",
      name: "Anita Desai",
      role: "Current Parent",
      image: "/images/testimonial-3.jpg"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Community Says
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Hear from our students, parents, and alumni about their experiences at Holy Family Higher Secondary School
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : (index < activeIndex ? -100 : 100)
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 md:p-10 shadow-lg"
                style={{ 
                  position: index === activeIndex ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  display: index === activeIndex ? 'block' : 'none'
                }}
              >
                <FaQuoteLeft className="text-4xl text-indigo-200 mb-6" />
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    {/* Replace with actual image if available */}
                    <span className="text-indigo-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600 hover:bg-indigo-50 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 