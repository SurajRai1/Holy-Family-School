"use client";

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles in the layout or page component
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Holy Family Higher Secondary School has been transformative for my daughter. The teachers are exceptional and truly care about each student's success.",
      name: "Sarah Johnson",
      role: "Parent",
      image: "/images/testimonials/parent1.jpg"
    },
    {
      quote: "The academic rigor and supportive environment at Holy Family prepared me exceptionally well for college. I'm grateful for my time there.",
      name: "Michael Chen",
      role: "Alumni, Class of 2022",
      image: "/images/testimonials/student1.jpg"
    },
    {
      quote: "As a teacher, I'm proud to be part of an institution that values innovation and puts students first in everything we do.",
      name: "Dr. Emily Rodriguez",
      role: "Science Faculty",
      image: "/images/testimonials/teacher1.jpg"
    },
    {
      quote: "The extracurricular programs at Holy Family Higher Secondary School helped me discover my passion for robotics and set me on my career path.",
      name: "David Williams",
      role: "Alumni, Class of 2020",
      image: "/images/testimonials/student2.jpg"
    },
    {
      quote: "We've hired several Holy Family graduates at our company. They consistently demonstrate exceptional critical thinking and leadership skills.",
      name: "Jennifer Lee",
      role: "Local Business Owner",
      image: "/images/testimonials/community1.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Community Testimonials
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Read what students, parents, alumni, and faculty say about their experiences at Holy Family Higher Secondary School.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
                  <div className="mb-6 text-blue-600">
                    <FaQuoteLeft className="text-3xl" />
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                      {/* Replace with actual images when available */}
                      <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 