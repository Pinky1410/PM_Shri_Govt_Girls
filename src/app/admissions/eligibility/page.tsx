"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const eligibilityCriteria = [
  {
    level: "Early Childhood",
    grades: "Pre-K to Kindergarten",
    ageCriteria: "Must be 3 years old by June 1st for Pre-K, 5 years old for Kindergarten",
    academicReqs: ["Basic cognitive assessment", "Developmental readiness evaluation", "Social interaction observation"],
    documents: ["Birth certificate", "Immunization records", "Health certificate"],
  },
  {
    level: "Elementary School",
    grades: "Grades 1-5",
    ageCriteria: "Age appropriate for grade level as of June 1st",
    academicReqs: ["Previous school records", "Basic literacy and numeracy skills", "Entrance assessment"],
    documents: ["Birth certificate", "Previous school transcripts", "Recommendation letter from previous teacher"],
  },
  {
    level: "Middle School",
    grades: "Grades 6-8",
    ageCriteria: "Age appropriate for grade level as of June 1st",
    academicReqs: ["Strong academic record (B average or above)", "Entrance examination", "Interview with admissions committee"],
    documents: ["Birth certificate", "Previous 2 years transcripts", "Two recommendation letters", "Student essay"],
  },
  {
    level: "High School",
    grades: "Grades 9-12",
    ageCriteria: "Age appropriate for grade level as of June 1st",
    academicReqs: ["Excellent academic record (B+ average or above)", "Entrance examination", "Interview with student and parents", "Demonstrated extracurricular involvement"],
    documents: ["Birth certificate", "Previous 2 years transcripts", "Two recommendation letters", "Student essay", "Portfolio of achievements"],
  },
];

export default function EligibilityPage() {
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
              Eligibility <span className="text-gradient">Criteria</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Learn about the requirements for admission at each grade level
            </p>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Cards */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="space-y-8">
            {eligibilityCriteria.map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="inline-block px-4 py-2 rounded-full bg-gold-100 text-gold-700 text-sm font-semibold mb-4">
                      {item.grades}
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-navy-900 mb-4">{item.level}</h2>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-gold-500" />
                      <span className="text-sm">{item.ageCriteria}</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">Academic Requirements</h4>
                      <ul className="space-y-2">
                        {item.academicReqs.map((req) => (
                          <li key={req} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-3">Required Documents</h4>
                      <ul className="space-y-2">
                        {item.documents.map((doc) => (
                          <li key={doc} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-navy-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-8 bg-navy-50 rounded-2xl"
          >
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">
              Ready to Apply?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you meet the eligibility criteria, we encourage you to begin your application process. Our admissions team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions/process" className="btn-primary">
                Start Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Admissions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
