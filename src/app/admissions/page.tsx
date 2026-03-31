"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Calendar, FileText, Users } from "lucide-react";

const requirements = [
  { grade: "Elementary (Grades 1-5)", age: "6-10 years", requirements: ["Previous school transcripts", "Birth certificate", "Entrance assessment", "Teacher recommendation", "Parent interview"] },
  { grade: "Middle School (Grades 6-8)", age: "11-13 years", requirements: ["Previous 2 years transcripts", "Birth certificate", "Entrance exam", "Teacher recommendations (2)", "Student essay", "Parent interview"] },
  { grade: "High School (Grades 9-12)", age: "14-17 years", requirements: ["Previous 2 years transcripts", "Birth certificate", "Entrance exam", "Teacher recommendations (2)", "Student essay", "Extracurricular portfolio", "Parent and student interview"] },
];

export default function AdmissionsPage() {
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
              Admissions <span className="text-gradient">Overview</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Begin your journey to excellence. Learn about our admission process and requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gold-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/admissions/process" className="card-premium p-6 flex items-center gap-4 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-900">Admission Process</h3>
                <p className="text-sm text-gray-600">Step-by-step guide</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-500 ml-auto" />
            </Link>
            <Link href="/admissions/eligibility" className="card-premium p-6 flex items-center gap-4 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-900">Eligibility</h3>
                <p className="text-sm text-gray-600">Requirements by grade</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-500 ml-auto" />
            </Link>
            <Link href="/admissions/fee-structure" className="card-premium p-6 flex items-center gap-4 hover:border-gold-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center">
                <FileText className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-900">Fee Structure</h3>
                <p className="text-sm text-gray-600">Tuition & fees</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gold-500 ml-auto" />
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements */}
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
                Requirements
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Admission Requirements by Grade
            </h2>
          </motion.div>

          <div className="space-y-6">
            {requirements.map((req, index) => (
              <motion.div
                key={req.grade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy-900">{req.grade}</h3>
                  <span className="text-gold-600 font-semibold">Age: {req.age}</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {req.requirements.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">
              <Users className="w-5 h-5 mr-2" />
              Schedule a Campus Tour
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
