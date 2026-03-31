"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

export default function PrincipalDesk() {
  return (
    <section className="py-20 lg:py-28 bg-navy-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230f2440' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <div className="aspect-square relative">
                  <Image
                    src="/images/principal.jpeg"
                    alt="Principal Mrs. Smita Meshram"
                    fill
                    className="object-cover"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 md:bottom-4 md:-right-4 bg-white rounded-xl shadow-xl p-4 max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                    <span className="text-navy-900 font-bold text-lg">15+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Years of</p>
                    <p className="text-sm text-gray-600">Leadership</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Principal's Desk
              </span>
            </motion.div>

            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <Quote className="w-12 h-12 text-gold-400" />
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-navy-800 leading-relaxed mb-8"
            >
              &ldquo;शिक्षा केवल पाठ्यक्रम तक सीमित नहीं है; यह चरित्र का पोषण, जिज्ञासा को बढ़ावा देना, और युवा मनों को कल के करुणामय नेताओं के रूप में सशक्त बनाना है।&rdquo;
            </motion.p>

            {/* Motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-6 p-4 bg-gold-50 rounded-lg border-l-4 border-gold-500"
            >
              <p className="text-gold-700 font-heading font-semibold text-lg">
                हमारा ध्येय: "विद्या ददाति विनयम्" - ज्ञान विनम्रता प्रदान करता है
              </p>
            </motion.div>

            {/* Principal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                Principal
              </h3>
              <p className="text-gold-600 font-medium">
                PM Shri Govt. MLB GIRLS Higher Secondary School
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                href="/about/principal-message"
                className="group inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-gold-600 transition-colors"
              >
                पूरा संदेश पढ़ें
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
