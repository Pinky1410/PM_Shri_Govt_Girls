"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Calendar, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: "40", label: "उत्कृष्टता के वर्ष" },
  { icon: Users, value: "2,500+", label: "नामांकित छात्र" },
  { icon: Award, value: "98%", label: "सफलता दर" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              Admissions Open for 2026-27
            </motion.div> */}

            {/* School Name */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-heading text-xl md:text-2xl lg:text-[1.65rem] font-bold text-gold-400 mb-4 leading-tight"
            >
              PM Shri Govt. MLB GIRLS<br />Higher Secondary School
            </motion.h2>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Empowering Girls
              <span className="block text-gradient">Building Futures</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
            >
              PM Shri Govt. MLB GIRLS Higher Secondary School में शिक्षा की उत्कृष्टता का अनुभव करें। 
              जहाँ अकादमिक कठोरता चरित्र विकास से मिलती है, और कन्याओं को कल के नेता बनने के लिए सशक्त बनाया जाता है।
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/admissions/process"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
              >
                अपनी यात्रा शुरू करें
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                हमारी कहानी देखें
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm mb-3">
                    <stat.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - PM Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-start justify-center pt-1"
          >
            <div className="relative w-full max-w-lg">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/30 to-gold-600/30 blur-2xl scale-110" />
              
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <Image
                  src="/images/hero/pm.jpeg"
                  alt="PM Shri School - Empowering Girls, Building Futures"
                  width={500}
                  height={600}
                  className="w-full h-[200%] object-cover"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-heading text-xl font-bold text-center">
                    Empowering Girls
                  </p>
                  <p className="text-gold-400 font-heading text-lg text-center">
                    Building Futures
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-navy-900" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-bold text-lg">PM Shri</p>
                    <p className="text-gray-600 text-sm">सरकारी विद्यालय</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-3 rounded-full bg-gold-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
