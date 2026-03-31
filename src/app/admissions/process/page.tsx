"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Calendar, CreditCard, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Online Application",
    description: "Fill out our comprehensive online application form with your child's academic and personal details.",
    duration: "15-20 minutes",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Campus Visit & Assessment",
    description: "Schedule a campus tour and complete the entrance assessment appropriate for your child's grade level.",
    duration: "2-3 hours",
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Submission",
    description: "Submit required documents including previous school records, birth certificate, and recommendation letters.",
    duration: "1 week",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Interview",
    description: "Family interview with our admissions committee to understand your educational goals and values alignment.",
    duration: "30-45 minutes",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Enrollment & Fee Payment",
    description: "Upon acceptance, complete enrollment by paying the registration fee and first term tuition.",
    duration: "1-2 weeks",
  },
];

const faqs = [
  {
    question: "What is the age requirement for admission?",
    answer: "Students must meet age requirements as of June 1st of the admission year: Pre-K (3+ years), Kindergarten (5+ years), and Grade 1 (6+ years).",
  },
  {
    question: "When does the admission process begin?",
    answer: "Applications for the upcoming academic year open in October and continue until all seats are filled. Early applications are encouraged.",
  },
  {
    question: "Is there a waiting list?",
    answer: "Yes, competitive grades may have a waiting list. Families on the waiting list are notified as seats become available.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, we offer merit-based and need-based scholarships. Scholarship applications must be submitted with the admission form.",
  },
];

export default function AdmissionsProcessPage() {
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
              Admission <span className="text-gradient">Process</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Your journey to joining the PM Shri family starts here. Follow these simple steps to secure your child&apos;s future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
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
                How to Apply
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              5 Steps to Join Our Community
            </h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-premium p-8 flex flex-col md:flex-row gap-6 items-start">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl gradient-gold flex items-center justify-center">
                    <span className="text-navy-900 font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-6 h-6 text-gold-500" />
                      <h3 className="font-heading text-xl font-bold text-navy-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gold-600">
                      <Calendar className="w-4 h-4" />
                      Estimated time: {step.duration}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-full h-8 w-0.5 bg-navy-200" />
                )}
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
              Start Your Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
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
                Common Questions
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
