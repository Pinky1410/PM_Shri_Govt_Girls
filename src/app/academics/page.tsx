"use client";

import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Calculator, Languages, Palette, Music, Computer, Globe } from "lucide-react";

const curriculumLevels = [
  {
    level: "Primary School",
    grades: "Grades 1-5",
    age: "Ages 6-10",
    description: "Foundation years focusing on literacy, numeracy, and character development",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Arts", "Physical Education"],
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    age: "Ages 11-13",
    description: "Transition years with introduction to specialized subjects and critical thinking",
    subjects: ["English", "Mathematics", "Science", "History", "Geography", "Computer Science", "Foreign Languages"],
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    age: "Ages 14-17",
    description: "Preparation for higher education with advanced courses and career exploration",
    subjects: ["Advanced Sciences", "Mathematics", "Literature", "Social Sciences", "STEM", "Arts & Humanities"],
  },
];

const departments = [
  { icon: BookOpen, name: "Languages", description: "English, Literature, and Foreign Languages", color: "bg-blue-500" },
  { icon: Calculator, name: "Mathematics", description: "From basic arithmetic to advanced calculus", color: "bg-purple-500" },
  { icon: FlaskConical, name: "Sciences", description: "Physics, Chemistry, Biology, and Environmental Science", color: "bg-green-500" },
  { icon: Globe, name: "Social Studies", description: "History, Geography, Economics, and Civics", color: "bg-amber-500" },
  { icon: Computer, name: "Technology", description: "Computer Science, Programming, and Digital Literacy", color: "bg-cyan-500" },
  { icon: Palette, name: "Visual Arts", description: "Drawing, Painting, Sculpture, and Digital Arts", color: "bg-rose-500" },
  { icon: Music, name: "Performing Arts", description: "Music, Drama, Dance, and Theatre", color: "bg-indigo-500" },
  { icon: Languages, name: "World Languages", description: "Spanish, French, Mandarin, and Latin", color: "bg-teal-500" },
];

const stats = [
  { value: "25", label: "Average Class Size", suffix: "" },
  { value: "1:20", label: "Student-Teacher Ratio", suffix: "" },
  { value: "90", label: "University Acceptance", suffix: "%" },
  { value: "20+", label: "Elective Courses", suffix: "" },
];

export default function AcademicsPage() {
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
              Academic <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              A comprehensive curriculum designed to challenge, inspire, and prepare students for a bright future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-navy-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Levels */}
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
                Our Curriculum
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Structured Learning Pathways
            </h2>
          </motion.div>

          <div className="space-y-8">
            {curriculumLevels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-block px-4 py-2 rounded-full bg-navy-100 text-navy-700 text-sm font-semibold mb-4">
                      {level.grades}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">{level.level}</h3>
                    <p className="text-gold-600 font-medium text-sm">{level.age}</p>
                    <p className="text-gray-600 mt-4">{level.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="font-semibold text-navy-900 mb-4">Core Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-4 py-2 rounded-lg bg-navy-50 text-navy-700 text-sm font-medium"
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

      {/* Departments */}
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
                Departments
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Academic Departments
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-premium p-6 text-center group hover:border-gold-300 transition-colors"
              >
                <div className={`w-14 h-14 rounded-xl ${dept.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <dept.icon className={`w-7 h-7 ${dept.color.replace("bg-", "text-")}`} />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{dept.name}</h3>
                <p className="text-gray-600 text-sm">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
