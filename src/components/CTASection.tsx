"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Begin Your Journey
            <span className="block text-gradient">Towards Excellence</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl mx-auto">
            हमारे जुनूनी शिक्षार्थियों, समर्पित शिक्षकों और सहायक परिवारों के समुदाय में शामिल हों। 
            साथ मिलकर, हम आपके बच्चे की पूरी क्षमता को अनलॉक करेंगे और उन्हें संभावनाओं से भरे भविष्य के लिए तैयार करेंगे।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions/process"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow"
            >
              प्रवेश के लिए आवेदन करें
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 transition-all duration-300"
            >
              दौरा निर्धारित करें
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-white/50 text-sm mb-4">हजारों परिवारों द्वारा विश्वसनीय</p>
            <div className="flex flex-wrap justify-center gap-8 text-white/30 text-sm">
              <span>40 वर्षों की उत्कृष्टता</span>
              <span>•</span>
              <span>2,500+ छात्र</span>
              <span>•</span>
              <span>98% सफलता दर</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
