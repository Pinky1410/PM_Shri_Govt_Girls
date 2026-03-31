"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Bell, FileText, Award, Users } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "March 15, 2026",
    category: "Academics",
    excerpt: "Our students showcased innovative projects at the regional science fair, winning top honors in multiple categories including robotics and environmental science.",
    icon: Award,
    featured: true,
  },
  {
    id: 2,
    title: "New Sports Complex Inauguration",
    date: "March 10, 2026",
    category: "Facilities",
    excerpt: "State-of-the-art swimming pool and indoor courts now open for student use, featuring Olympic-standard equipment.",
    icon: Users,
    featured: false,
  },
  {
    id: 3,
    title: "International Exchange Program Applications Open",
    date: "March 5, 2026",
    category: "Programs",
    excerpt: "Students can now apply for semester exchange programs with partner schools in Europe, Asia, and Australia.",
    icon: FileText,
    featured: false,
  },
  {
    id: 4,
    title: "Spring Concert Series Begins Next Week",
    date: "March 1, 2026",
    category: "Events",
    excerpt: "Join us for a series of musical performances featuring our talented student musicians and guest artists.",
    icon: Calendar,
    featured: false,
  },
  {
    id: 5,
    title: "Mathematics Olympiad Results",
    date: "February 25, 2026",
    category: "Academics",
    excerpt: "Our students secured 5 gold medals and 3 silver medals at the national mathematics competition.",
    icon: Award,
    featured: false,
  },
  {
    id: 6,
    title: "Parent-Teacher Meeting Schedule Released",
    date: "February 20, 2026",
    category: "Notices",
    excerpt: "The schedule for this semester's parent-teacher conferences has been published. Please book your slots.",
    icon: Bell,
    featured: false,
  },
];

const notices = [
  { id: 1, title: "School Closed - Spring Break", date: "April 1-7, 2026", urgent: false },
  { id: 2, title: "Final Exam Schedule Released", date: "Due: March 20", urgent: true },
  { id: 3, title: "Summer Camp Registration Open", date: "Until: April 15", urgent: false },
  { id: 4, title: "Uniform Policy Update", date: "Effective: April 1", urgent: false },
];

export default function NewsPage() {
  const featuredNews = newsItems.find((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

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
              News & <span className="text-gradient">Notices</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay updated with the latest happenings, achievements, and announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices Bar */}
      <section className="py-6 bg-gold-50 border-y border-gold-200">
        <div className="container-custom">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="flex-shrink-0 font-semibold text-navy-900 flex items-center gap-2">
              <Bell className="w-5 h-5 text-gold-600" />
              Important Notices:
            </span>
            <div className="flex gap-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm ${
                    notice.urgent
                      ? "bg-red-100 text-red-700"
                      : "bg-white text-navy-700 border border-navy-200"
                  }`}
                >
                  <span className="font-medium">{notice.title}</span>
                  <span className="ml-2 text-gray-500">{notice.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Featured & News List */}
            <div className="lg:col-span-2">
              {/* Featured News */}
              {featuredNews && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-gold-500" />
                    <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                      Featured Story
                    </span>
                  </div>
                  <div className="card-premium overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                      <featuredNews.icon className="w-20 h-20 text-gold-400" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gold-500 text-navy-900 text-xs font-bold">
                          {featuredNews.category}
                        </span>
                        <span className="text-gray-500 text-sm">{featuredNews.date}</span>
                      </div>
                      <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                        {featuredNews.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {featuredNews.excerpt}
                      </p>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-gold-600 transition-colors"
                      >
                        Read Full Story
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* News List */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-12 bg-gold-500" />
                  <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                    Recent News
                  </span>
                </div>
                {regularNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-premium p-6 flex gap-6 group hover:border-gold-300 transition-colors"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-navy-100 flex items-center justify-center">
                      <news.icon className="w-8 h-8 text-navy-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded bg-gold-100 text-gold-700 text-xs font-semibold">
                          {news.category}
                        </span>
                        <span className="text-gray-500 text-sm">{news.date}</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{news.excerpt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-premium p-6"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Academics", "Events", "Facilities", "Programs", "Notices"].map((cat) => (
                    <button
                      key={cat}
                      className="w-full text-left px-4 py-2 rounded-lg hover:bg-navy-50 text-gray-600 hover:text-navy-800 transition-colors flex justify-between items-center"
                    >
                      {cat}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
