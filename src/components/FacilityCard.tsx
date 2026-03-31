"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, LucideIcon } from "lucide-react";

interface FacilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  video?: string;
  isVideo?: boolean;
  index?: number;
}

export default function FacilityCard({
  title,
  description,
  icon: Icon,
  image,
  video,
  isVideo = false,
  index = 0,
}: FacilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
    >
      {/* Image / Video */}
      <div className="relative h-48 overflow-hidden bg-navy-900">
        {isVideo && video ? (
          <div className="relative w-full h-full">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
            {/* Video Badge */}
            <div className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
              LIVE
            </div>
            {/* Play Icon on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                <Play className="w-5 h-5 text-navy-900 ml-0.5" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <Image
              src={image || "/images/facilities/ict_lab.jpeg"}
              alt={title}
              fill
              loading="lazy"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors">
          <Icon className="w-6 h-6 text-gold-400" />
        </div>
        <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-gold-500/0 group-hover:border-gold-500/30 transition-colors pointer-events-none" />
    </motion.div>
  );
}
