"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Users, Award, Building2 } from "lucide-react";

const timeline = [
  { year: "2000", title: "Foundation", description: "PM Shri Govt. MLB GIRLS Higher Secondary School was founded with a vision to provide quality education rooted in values and excellence.", highlight: "12 students, 3 teachers" },
  { year: "2005", title: "First Graduating Class", description: "Our first batch of students graduated and went on to attend prestigious universities, setting the standard for academic excellence.", highlight: "100% college acceptance" },
  { year: "2010", title: "Campus Expansion", description: "Added secondary school facilities, science laboratories, and a library to support growing enrollment and advanced academic programs.", highlight: "New wing opened" },
  { year: "2015", title: "Recognition", description: "Received accreditation for academic excellence in girls education and modernized campus facilities.", highlight: "New facilities" },
  { year: "2020", title: "Technology Integration", description: "Pioneered computer education with state-of-the-art computer labs and introduced technology across all grade levels.", highlight: "100+ computers" },
  { year: "2024", title: "Digital Learning", description: "Implemented 1:1 device program, launched online learning platforms, and introduced STEM curriculum.", highlight: "iPad for every student" },
];

export default function HistoryPage() {
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
              Our <span className="text-gradient">History</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A journey of excellence in education, innovation, and character development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legacy Stats */}
      <section className="py-16 bg-gold-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "25", label: "Years of Excellence" },
              { icon: Users, value: "5,000+", label: "Alumni Worldwide" },
              { icon: Award, value: "50+", label: "Awards Won" },
              { icon: Building2, value: "10", label: "Acre Campus" },
            ].map((stat, index) => (
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
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
                Journey Through Time
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Milestones That Shaped Us
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="card-premium p-6 inline-block max-w-lg">
                      <span className="text-4xl font-bold text-gold-500">{event.year}</span>
                      <h3 className="font-heading text-xl font-bold text-navy-900 mt-2 mb-3">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-700 text-sm font-medium">
                        {event.highlight}
                      </span>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-lg z-10 flex-shrink-0" />
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Image */}
      <section className="py-20 lg:py-28 bg-navy-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                    alt="School Heritage"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                  Our Heritage
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-navy-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                From our humble beginnings in 2000 with just 12 students and 3 dedicated teachers, 
                PM Shri School has grown into a premier educational institution serving over 2,000 students 
                from diverse backgrounds in Bhopal.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Throughout our history, we have remained committed to our founding principles: academic 
                excellence, character development, and service to community. Our alumni have gone on to 
                become leaders in every field imaginable, from education and medicine to public service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As we look toward the future, we honor our past while embracing innovation and change, 
                ensuring that the PM Shri School legacy continues to inspire generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
