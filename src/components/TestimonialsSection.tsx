"use client";

import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Parent of Grade 10 Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content: "PM Shri Govt. MLB GIRLS HSS has transformed my daughter's life. The teachers are incredibly dedicated, and the focus on both academics and character development has helped her grow into a confident, compassionate young woman.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Richardson",
    role: "Alumni, Class of 2020",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "The education I received at PM Shri Govt. MLB GIRLS HSS prepared me exceptionally well for university. The critical thinking skills and discipline I developed here have been invaluable in my career at Google.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Professor, Stanford University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    content: "As a university professor, I can attest that PM Shri School graduates consistently demonstrate exceptional academic preparation, intellectual curiosity, and strong ethical foundations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Current Student, Grade 12",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "The opportunities here are incredible. From the science labs to the debate team, I've been able to explore my passions and discover new interests. The faculty truly cares about each student's success.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f2440' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Voices from Our Community
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from parents, alumni, and students about their experiences
            and the impact of PM Shri School on their lives.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-navy-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-navy-800" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-navy-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-navy-800" />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-gold-200">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-gold-400 mb-4 mx-auto md:mx-0" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div>
                    <h4 className="font-heading text-xl font-bold text-navy-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gold-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gold-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
