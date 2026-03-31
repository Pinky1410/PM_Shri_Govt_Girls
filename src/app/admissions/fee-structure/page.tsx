"use client";

import { motion } from "framer-motion";
import { IndianRupee, Info, GraduationCap, BookOpen, Monitor, CreditCard, HelpCircle } from "lucide-react";

const feeStructure = [
  { 
    item: "Tuition Fee (Girls)", 
    class9_10: "₹0 (Exempt)", 
    class11_12: "₹0 (Exempt)", 
    frequency: "Annual",
    note: "Free education for all girl students under government scheme"
  },
  { 
    item: "Admission Fee", 
    class9_10: "₹25", 
    class11_12: "₹25", 
    frequency: "One-time",
    note: "Payable at the time of admission only"
  },
  { 
    item: "Vidyalaya Vikas Nidhi", 
    class9_10: "₹500", 
    class11_12: "₹500", 
    frequency: "Annual",
    note: "School development fund contribution"
  },
  { 
    item: "Computer Fund", 
    class9_10: "₹100", 
    class11_12: "₹100–₹150", 
    frequency: "Monthly (Optional)",
    note: "Optional charges for computer science or specific vocational elective subjects"
  },
  { 
    item: "Re-admission Fee", 
    class9_10: "₹100", 
    class11_12: "₹100", 
    frequency: "If applicable",
    note: "Applicable for students rejoining after leave"
  },
  { 
    item: "Identity Card", 
    class9_10: "₹20–₹50", 
    class11_12: "₹20–₹50", 
    frequency: "Annual",
    note: "Student ID card printing and maintenance"
  },
  { 
    item: "Examination Fee", 
    class9_10: "As per Board", 
    class11_12: "As per Board", 
    frequency: "Annual",
    note: "As prescribed by MP Board/State Board"
  },
];

export default function FeeStructurePage() {
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
              Fee <span className="text-gradient">Structure</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Transparent pricing for world-class education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Fees */}
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
                Tuition & Fees
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              2026-2027 Academic Year
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left p-4 rounded-tl-lg font-semibold">Fee Component</th>
                  <th className="text-left p-4 font-semibold">Class 9 & 10</th>
                  <th className="text-left p-4 font-semibold">Class 11 & 12</th>
                  <th className="text-left p-4 rounded-tr-lg font-semibold">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={fee.item} className={index % 2 === 0 ? "bg-white" : "bg-navy-50"}>
                    <td className="p-4">
                      <div className="font-semibold text-navy-900">{fee.item}</div>
                      <div className="text-xs text-gray-500 mt-1">{fee.note}</div>
                    </td>
                    <td className="p-4 text-gold-600 font-bold">{fee.class9_10}</td>
                    <td className="p-4 text-gold-600 font-bold">{fee.class11_12}</td>
                    <td className="p-4 text-gray-600">{fee.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Key Highlights
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GraduationCap, title: "Free Education", desc: "Tuition fee exempted for all girl students under PM Shri scheme" },
                { icon: IndianRupee, title: "Affordable", desc: "Minimal fees for quality government school education" },
                { icon: BookOpen, title: "MP Board Curriculum", desc: "Following Madhya Pradesh Board of Secondary Education standards" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-navy-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-6 bg-gold-50 rounded-xl flex gap-4"
          >
            <HelpCircle className="w-6 h-6 text-gold-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-navy-900 mb-1">Important Notes</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Fees are subject to revision as per government directives</li>
                <li>• Computer fund is optional for students not opting for computer subjects</li>
                <li>• Examination fees vary as per MP Board/State Board notifications</li>
                <li>• Contact school office for latest fee updates and payment schedules</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
