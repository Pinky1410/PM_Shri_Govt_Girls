"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Microscope, Music, Dumbbell, Laptop, BookOpen } from "lucide-react";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    icon: Building2,
    title: "Classrooms",
    description: "Well-ventilated classrooms with blackboards and basic furniture for comfortable learning.",
    image: "/images/facilities/ict_lab.jpeg",
  },
  {
    icon: Microscope,
    title: "Science Lab",
    description: "Lab with basic equipment for Physics, Chemistry, and Biology practical classes.",
    image: "/images/facilities/lab.jpg",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Computer lab with functional systems for IT classes and basic computer education.",
    video: "/clips/Welcome to ICT lab.mp4",
    isVideo: true,
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Library with textbooks, reference books, and quiet space for reading and study.",
    image: "/images/facilities/ict_lab.jpeg",
  },
  {
    icon: Dumbbell,
    title: "Sports",
    description: "Ground and space for physical education, yoga, and outdoor games.",
    image: "/images/facilities/yoga_fitness.jpeg",
  },
  {
    icon: Music,
    title: "Activity Hall",
    description: "Hall for cultural programs, music, dance, and school events.",
    image: "/images/facilities/ict_lab.jpeg",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
            <span className="text-gold-400 font-semibold text-sm tracking-wider uppercase">
              World-Class Infrastructure
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Premium Facilities
          </h2>
          <p className="text-gray-300 text-lg">
            Experience learning in an environment designed for excellence, with
            cutting-edge facilities that inspire innovation and growth.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.title}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
              image={facility.image}
              video={facility.video}
              isVideo={facility.isVideo}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/facilities"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
          >
            Explore All Facilities
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
