"use client";

import { motion } from "framer-motion";
import {
  User,
  Lock,
  Bell,
  Calendar,
  FileText,
  BarChart3,
  MessageSquare,
  CreditCard,
  BookOpen,
  Clock,
} from "lucide-react";
import Link from "next/link";

const portalFeatures = [
  {
    icon: BarChart3,
    title: "Academic Progress",
    description: "Track your child's grades, attendance, and academic performance in real-time.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Calendar,
    title: "School Calendar",
    description: "View upcoming events, exams, holidays, and important school dates.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileText,
    title: "Report Cards",
    description: "Access and download digital report cards and progress reports instantly.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Teacher Communication",
    description: "Direct messaging with teachers and school administration.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: CreditCard,
    title: "Fee Payment",
    description: "View fee structure, payment history, and make online payments securely.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Get instant alerts for announcements, emergencies, and school updates.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: BookOpen,
    title: "Assignments",
    description: "Monitor homework, projects, and assignment submissions.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Clock,
    title: "Attendance Records",
    description: "Daily attendance tracking with detailed monthly reports.",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function ParentPortalPage() {
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Parent <span className="text-gradient">Portal</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay connected with your child's education journey. Access grades, 
              attendance, fees, and communicate with teachers—all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-gold-100 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-gold-600" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy-900">
                  Parent Login
                </h2>
                <p className="text-gray-600 mt-2">
                  Sign in to access your child's information
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID / Parent ID
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Enter your ID"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded text-gold-500 focus:ring-gold-500" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <Link href="#" className="text-gold-600 hover:text-gold-700">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Need help?{" "}
                  <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-medium">
                    Contact school administration
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                Portal Features
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Everything You Need
            </h2>
            <p className="text-gray-600 mt-4">
              The Parent Portal provides comprehensive access to all aspects of your child's school life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center group hover:border-gold-300 transition-colors"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium p-8 text-center"
            >
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">
                Need Help Accessing the Portal?
              </h3>
              <p className="text-gray-600 mb-6">
                If you're having trouble logging in or need to reset your password, 
                our school administration team is here to help. Contact us during 
                school hours for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Contact Support
                </Link>
                <a
                  href="tel:+91755294118"
                  className="btn-outline"
                >
                  Call School Office
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
