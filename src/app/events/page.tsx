"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Science Fair",
    date: "April 15, 2026",
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Students showcase innovative science projects and compete for top honors.",
    category: "Academic",
    featured: true,
  },
  {
    id: 2,
    title: "Spring Concert",
    date: "April 22, 2026",
    time: "6:00 PM - 8:00 PM",
    location: "Performing Arts Center",
    description: "Annual musical performance featuring our talented student musicians.",
    category: "Arts",
    featured: false,
  },
  {
    id: 3,
    title: "Parent-Teacher Conference",
    date: "May 5, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Classrooms",
    description: "One-on-one discussions about student progress and development.",
    category: "Academic",
    featured: false,
  },
  {
    id: 4,
    title: "Sports Day",
    date: "May 12, 2026",
    time: "8:00 AM - 5:00 PM",
    location: "Sports Complex",
    description: "Annual athletic competition featuring track and field events.",
    category: "Sports",
    featured: false,
  },
  {
    id: 5,
    title: "Graduation Ceremony",
    date: "June 15, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "University Stadium",
    description: "Celebrating the achievements of our graduating class of 2026.",
    category: "Ceremony",
    featured: true,
  },
  {
    id: 6,
    title: "Summer Camp Open House",
    date: "June 1, 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Campus Grounds",
    description: "Preview our exciting summer programs and activities for all ages.",
    category: "Community",
    featured: false,
  },
];

export default function EventsPage() {
  const featuredEvents = upcomingEvents.filter((e) => e.featured);
  const regularEvents = upcomingEvents.filter((e) => !e.featured);

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
              School <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay updated with our exciting calendar of academic, cultural, and sporting events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Featured Events
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-gold-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold">
                      {event.category}
                    </span>
                    <span className="text-navy-600 font-bold">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regular Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Upcoming Events
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            {regularEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-navy-100 flex flex-col items-center justify-center">
                  <span className="text-xs text-gray-500 uppercase">{event.date.split(" ")[0]}</span>
                  <span className="text-2xl font-bold text-navy-800">{event.date.split(" ")[1].replace(",", "")}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 rounded bg-gold-100 text-gold-700 text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                <div className="flex-shrink-0 text-sm text-gray-500 space-y-1">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
