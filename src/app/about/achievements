"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Target, Zap } from "lucide-react";
import Image from "next/image";

const achievements = [
  {
    category: "Academic Excellence",
    icon: Award,
    items: [
      {
        title: "100% Board Result",
        description: "Consistent 100% pass rate in MPBSE Class 10th and 12th board examinations for the last 5 years.",
        year: "2023-2024"
      },
      {
        title: "State Merit List",
        description: "15 of our brilliant students secured places in the top 100 State Merit List in the Science and Arts streams.",
        year: "2023"
      },
      {
        title: "Best PM SHRI School",
        description: "Recognized as the top-performing PM SHRI School in the district for outstanding academic infrastructure and results.",
        year: "2024"
      }
    ]
  },
  {
    category: "Sports & Athletics",
    icon: Trophy,
    items: [
      {
        title: "State Level Athletics Championship",
        description: "Our athletic team bagged 5 Gold, 3 Silver, and 2 Bronze medals at the State Level Championship.",
        year: "2023"
      },
      {
        title: "Division Level Kho-Kho Winners",
        description: "The senior girls' team emerged as the champions in the Divisional Kho-Kho tournament held in Bhopal.",
        year: "2024"
      },
      {
        title: "National Yoga Selection",
        description: "Three students from our school were selected to represent the state at the National Yoga Olympiad.",
        year: "2023"
      }
    ]
  },
  {
    category: "Co-Curricular & Innovation",
    icon: Star,
    items: [
      {
        title: "National Science Exhibition",
        description: "First prize awarded for the innovative 'Smart Water Management' model at the National Level Science Fair.",
        year: "2024"
      },
      {
        title: "Kala Utsav State Winners",
        description: "Our classical dance troupe secured the first position at the prestigious Kala Utsav MP State Level competition.",
        year: "2023"
      },
      {
        title: "ICT Excellence Award",
        description: "Honored with the ICT Excellence Award for maximizing technology integration in classroom learning.",
        year: "2024"
      }
    ]
  }
];

const highlights = [
  { value: "50+", label: "Regional Awards", icon: Target },
  { value: "500+", label: "Merit Students", icon: Award },
  { value: "25+", label: "State Championships", icon: Medal },
  { value: "10+", label: "National Recognitions", icon: Zap },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-400 mb-6 font-medium">
              <Trophy className="w-5 h-5" />
              <span>Celebrating Excellence</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Achievements</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A proud showcase of our students' extraordinary accomplishments in academics, sports, and co-curricular activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Stats */}
      <section className="py-16 bg-navy-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-navy-900/5 border border-navy-100 group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors">
                  <stat.icon className="w-7 h-7 text-gold-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Achievements List */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-24">
            {achievements.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center shadow-lg">
                    <section.icon className="w-8 h-8 text-gold-400" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900">
                      {section.category}
                    </h2>
                    <div className="h-1 w-20 bg-gold-500 mt-3 rounded-full" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="card-premium p-8 group hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="px-3 py-1 bg-navy-100 text-navy-800 text-sm font-bold rounded-md">
                          {item.year}
                        </div>
                        <Medal className="w-6 h-6 text-gold-400 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Banner Section */}
      <section className="py-20 bg-navy-900">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/school-image.jpeg"
              alt="School Achievement Celebration"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent flex flex-col justify-end p-8 md:p-16 text-center md:text-left">
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
                Proud Moments
              </h3>
              <p className="text-xl text-gray-200 max-w-2xl">
                Every award reflects the hard work of our students, the dedication of our faculty, and the unwavering support of parents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
