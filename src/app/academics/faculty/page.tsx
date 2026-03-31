"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

const facultyStats = [
  { icon: Users, value: "180+", label: "Faculty Members" },
  { icon: GraduationCap, value: "85%", label: "Hold Advanced Degrees" },
  { icon: Award, value: "15", label: "Average Years Experience" },
  { icon: BookOpen, value: "60+", label: "Published Authors" },
];

const facultyHighlights = [
  {
    name: "Mrs. Smita Meshram",
    role: "Principal",
    bio: "Leading the institution with vision and dedication, fostering academic excellence and holistic student development.",
    image: "/images/principal.jpeg",
  },
  {
    name: "Dr. Jitendra Pal Singh Chauhan",
    role: "ICT Prabhari",
    bio: "Overseeing ICT lab operations and digital infrastructure, ensuring cutting-edge technology education for all students.",
    image: "/images/faculty/ICT Prabhari.jpeg",
  },
  {
    name: "Mrs. Bhomershwari Pardhi",
    role: "ICT Trainer",
    bio: "Dedicated to training students in computer skills, programming fundamentals, and digital literacy programs.",
    image: "/images/faculty/ICT trainer.jpeg",
  },
  {
    name: "Faculty_name",
    role: "faculty Role",
    bio: "Sample bio for demonstration purposes.",
    image: "https://ui-avatars.com/api/?name=Faculty&background=0D47A1&color=fff&size=300",
  },
];

export default function FacultyPage() {
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
              Our <span className="text-gradient">Faculty</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              World-class educators dedicated to inspiring and nurturing the next generation of leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facultyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-navy-700" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
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
                Leadership & Department Heads
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Meet Our Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {facultyHighlights.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden text-center group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-white">
                    <p className="text-gold-400 text-sm">{faculty.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">{faculty.name}</h3>
                  <p className="text-gray-600 text-sm">{faculty.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Faculty Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-8 bg-navy-50 rounded-2xl"
          >
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">
              Meet Our Full Faculty
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of 180+ dedicated educators brings diverse expertise and a shared commitment to student success. Visit our campus to meet the entire faculty team.
            </p>
            <button className="btn-primary">Schedule a Campus Visit</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
