"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Users, Lightbulb, Target } from "lucide-react";

const curriculumFeatures = [
  { icon: Lightbulb, title: "Inquiry-Based Learning", description: "Students learn through exploration, questioning, and discovery rather than passive memorization." },
  { icon: Target, title: "Personalized Learning Paths", description: "Adaptive curriculum that meets each student where they are and helps them reach their full potential." },
  { icon: Users, title: "Collaborative Projects", description: "Team-based assignments that develop communication, leadership, and teamwork skills." },
  { icon: Award, title: "Competency-Based Progression", description: "Students advance based on mastery of skills, not just time spent in class." },
];

const gradeLevels = [
  {
    level: "Elementary",
    grades: "Grades 1-5",
    focus: "Core Competencies",
    subjects: ["Language Arts", "Mathematics", "Science", "Social Studies", "Art & Music", "Physical Education", "Technology"],
    description: "Comprehensive curriculum building strong foundations in literacy, numeracy, and critical thinking skills."
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    focus: "Exploration & Discovery",
    subjects: ["English", "Mathematics", "Science", "History", "Geography", "Foreign Language", "Arts", "Technology", "Physical Education"],
    description: "Transitional program introducing specialized subjects while developing independent learning skills."
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    focus: "Specialization & Preparation",
    subjects: ["Advanced English", "Higher Mathematics", "Laboratory Sciences", "Social Sciences", "AP Courses", "STEM Electives", "Arts & Humanities"],
    description: "Rigorous college-preparatory curriculum with Advanced Placement courses and career exploration opportunities."
  },
];

export default function CurriculumPage() {
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
              Our <span className="text-gradient">Curriculum</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A comprehensive, student-centered approach to education that prepares learners for an ever-changing world
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
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
                Curriculum Philosophy
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900 mb-6">
              Education for the Future
            </h2>
            <p className="text-gray-600 text-lg">
              Our curriculum is designed to nurture critical thinking, creativity, and character. We combine traditional academic excellence with innovative teaching methods that prepare students for the challenges of tomorrow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-navy-700" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 lg:py-28 bg-navy-50">
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
                By Grade Level
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Curriculum Overview
            </h2>
          </motion.div>

          <div className="space-y-8">
            {gradeLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/4">
                    <div className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-3">
                      {level.grades}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">{level.level}</h3>
                    <p className="text-gold-600 font-medium text-sm">{level.focus}</p>
                  </div>
                  <div className="lg:w-3/4">
                    <p className="text-gray-600 mb-4">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1 rounded-lg bg-navy-100 text-navy-700 text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25", label: "Avg. Class Size" },
              { value: "1:12", label: "Student-Teacher Ratio" },
              { value: "40+", label: "Elective Courses" },
              { value: "98%", label: "AP Pass Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
