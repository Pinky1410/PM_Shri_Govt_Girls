"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Microscope, Music, Dumbbell, Laptop, BookOpen, Play } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Classrooms",
    description: "Well-ventilated classrooms with blackboards and basic furniture for comfortable learning.",
    features: ["Blackboards", "Basic Furniture", "Ventilation", "Natural Lighting"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Microscope,
    title: "Science Lab",
    description: "Lab with basic equipment for Physics, Chemistry, and Biology practical classes.",
    features: ["Basic Equipment", "Lab Tables", "Safety Measures", "Demo Corner"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Dumbbell,
    title: "Sports",
    description: "Ground and space for physical education, yoga, and outdoor games.",
    features: ["Playground", "Yoga Classes", "Outdoor Games", "Physical Ed"],
    image: "/images/facilities/yoga_fitness.jpeg",
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Computer lab with functional systems for IT classes and basic computer education.",
    features: ["Functional PCs", "Internet Access", "IT Classes", "Basic Training"],
    video: "/clips/ICTlab.mp4",
    isVideo: true,
    featured: true,
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Library with textbooks, reference books, and quiet space for reading and study.",
    features: ["Textbooks", "Reference Books", "Reading Space", "Study Area"],
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Music,
    title: "Activity Hall",
    description: "Hall for cultural programs, music, dance, and school events.",
    features: ["Activity Hall", "Music Space", "Dance Area", "Event Space"],
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Facilities</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Infrastructure designed to support learning and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Facilities */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {facilities.map((facility, index) => {
              const isFeatured = facility.featured;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`card-premium overflow-hidden group relative ${
                    isFeatured ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  {/* Background Image/Video */}
                  <div className="absolute inset-0 overflow-hidden bg-navy-900">
                    {facility.isVideo ? (
                      <div className="relative w-full h-full">
                        <video
                          src={facility.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/20" />
                        {/* Play Icon on Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                            <Play className="w-7 h-7 text-navy-900 ml-1" />
                          </div>
                        </div>
                        {/* Live Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          LIVE
                        </div>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={facility.image!}
                          alt={facility.title}
                          fill
                          loading="lazy"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent" />
                      </>
                    )}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className={`transform transition-transform duration-300 group-hover:-translate-y-2 ${isFeatured ? 'mb-2' : ''}`}>
                      <div className={`rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 w-fit ${isFeatured ? 'w-14 h-14' : 'w-12 h-12'}`}>
                        <facility.icon className={`text-gold-400 ${isFeatured ? 'w-7 h-7' : 'w-6 h-6'}`} />
                      </div>
                      <h3 className={`font-heading font-bold text-white mb-2 ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                        {facility.title}
                      </h3>
                      <p className={`text-gray-200 leading-relaxed ${isFeatured ? 'text-base max-w-lg' : 'text-sm'}`}>
                        {facility.description}
                      </p>
                      
                      {/* Features Tags */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${isFeatured ? 'mt-5' : 'mt-3'}`}>
                        {facility.features.slice(0, isFeatured ? 4 : 2).map((feature) => (
                          <span
                            key={feature}
                            className={`px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm font-medium ${isFeatured ? 'text-sm' : 'text-xs'}`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
