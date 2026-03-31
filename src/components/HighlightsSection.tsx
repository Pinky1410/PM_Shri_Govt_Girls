"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const lifeImages = [
  {
    src: "/images/activities/dance.jpeg",
    title: "Dance & Cultural Activities",
    description: "Students showcasing their talent in dance and cultural programs.",
  },
  {
    src: "/images/activities/Events.jpeg",
    title: "School Events",
    description: "Exciting events and celebrations throughout the academic year.",
  },
  {
    src: "/images/activities/Events2.jpeg",
    title: "Annual Celebrations",
    description: "Grand celebrations and annual day festivities at our school.",
  },
  {
    src: "/images/activities/training.jpeg",
    title: "Training Programs",
    description: "Professional training sessions for skill development.",
  },
  {
    src: "/images/activities/training3.jpeg",
    title: "Skill Development",
    description: "Hands-on training programs to enhance student capabilities.",
  },
  {
    src: "/images/activities/activity33.jpeg",
    title: "Creative Activities",
    description: "Engaging students in creative and innovative learning experiences.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-50 rounded-full translate-x-1/2 translate-y-1/2" />

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
              Campus Gallery
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Life at PM Shri
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the vibrant campus life at PM Shri Govt. MLB GIRLS HSS through our students' activities and achievements.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lifeImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-premium overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
