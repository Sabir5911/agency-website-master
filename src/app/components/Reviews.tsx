"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Their team delivered exceptional results for our website redesign. The attention to detail and creative solutions exceeded our expectations.",
    position: "Marketing Director, TechCorp",
  },
  {
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    text: "Great experience working with this agency. They were responsive, professional, and delivered our project on time.",
    position: "Founder, StartUp Inc",
  },
  {
    name: "Emily Rodriguez",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "The team showed incredible expertise in both design and development. Our new website has significantly improved our online presence.",
    position: "COO, Digital Solutions",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="text-white py-16 px-6 md:px-20 flex flex-col items-center mt-16  font-roboto">
      <h4 className="text-gray-400 text-xs uppercase">Success Stories</h4>
      <h2 className="text-4xl font-bold mt-2 text-center">
        Hear from <span className="global-text-color">Our Clients</span>
      </h2>

      <div className="flex items-center mt-8 max-w-4xl">
        {/* Hide on mobile, show on md+ */}
        <button onClick={prevTestimonial} className="hidden md:flex mr-20 border p-2 rounded-full hover:bg-[#0cc0df]">
          <FaArrowLeft />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className=" flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.img
              src={testimonials[index].image}
              alt="Client"
              className="w-56 md:w-24 md:h-24 rounded-full object-cover border-2 border-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <div className="flex text-blue-600 mb-2">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="mt-6  italic">{testimonials[index].text}</blockquote>
              <h4 className="mt-4 font-semibold text-sm">{testimonials[index].name}</h4>
              <p className="text-xs text-gray-400 mt-2">{testimonials[index].position}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hide on mobile, show on md+ */}
        <button onClick={nextTestimonial} className="hidden md:flex ml-20 border p-2 rounded-full hover:bg-[#0cc0df]">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
