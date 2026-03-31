"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Bell } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    date: "March 15, 2026",
    category: "Academics",
    description: "Our students showcased innovative projects at the regional science fair, winning top honors in multiple categories.",
    featured: true,
  },
  {
    id: 2,
    title: "New Sports Complex Inauguration",
    date: "March 10, 2026",
    category: "Facilities",
    description: "State-of-the-art swimming pool and indoor courts now open for student use.",
    featured: false,
  },
  {
    id: 3,
    title: "International Exchange Program Applications Open",
    date: "March 5, 2026",
    category: "Programs",
    description: "Students can now apply for semester exchange programs with partner schools in Europe and Asia.",
    featured: false,
  },
  {
    id: 4,
    title: "Spring Concert Series Begins Next Week",
    date: "March 1, 2026",
    category: "Events",
    description: "Join us for a series of musical performances featuring our talented student musicians.",
    featured: false,
  },
];

export default function NewsSection() {
  const featuredNews = newsItems.find((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured).slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              News & Announcements
            </h2>
            <p className="text-gray-500">Latest updates from our school</p>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          {featuredNews && (
            <Link href="/news" className="block">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded bg-amber-500 text-white text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                    <span className="mx-1">•</span>
                    <span className="text-amber-600">{featuredNews.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {featuredNews.description}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* News List */}
          <div className="space-y-3">
            {otherNews.map((news) => (
              <Link key={news.id} href="/news" className="block">
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex gap-3 hover:shadow-sm transition-shadow">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-100 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-gray-600" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Calendar className="w-3 h-3" />
                      {news.date}
                      <span className="mx-1">•</span>
                      <span className="text-amber-600 text-xs">{news.category}</span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
                      {news.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-1">
                      {news.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
