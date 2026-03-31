"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/activities/dance.jpeg",
    alt: "Dance Performance",
    category: "Events",
  },
  {
    src: "/images/activities/Events.jpeg",
    alt: "School Events",
    category: "Events",
  },
  {
    src: "/images/activities/Events2.jpeg",
    alt: "Annual Events",
    category: "Events",
  },
  {
    src: "/images/activities/activity2.jpeg",
    alt: "School Activities",
    category: "Activities",
  },
  {
    src: "/images/activities/activity3.jpeg",
    alt: "Student Activities",
    category: "Activities",
  },
  {
    src: "/images/activities/activity33.jpeg",
    alt: "Creative Activities",
    category: "Activities",
  },
  {
    src: "/images/activities/training.jpeg",
    alt: "Training Programs",
    category: "Activities",
  },
  {
    src: "/images/activities/training3.jpeg",
    alt: "Skill Training",
    category: "Activities",
  },
  {
    src: "/images/activities/visits.jpeg",
    alt: "Educational Visits",
    category: "Events",
  },
  {
    src: "/images/activities/school_activity.jpeg",
    alt: "Campus Life",
    category: "Campus",
  },
  {
    src: "/images/facilities/ict_lab.jpeg",
    alt: "ICT Lab",
    category: "Facilities",
  },
  {
    src: "/images/activities/event1.jpeg",
    alt: "Annual Day Celebration",
    category: "Events",
  },
  {
    src: "/images/activities/event2.jpeg",
    alt: "Cultural Event",
    category: "Events",
  },
  {
    src: "/images/activities/training2.jpeg",
    alt: "Soft Skill Training",
    category: "Activities",
  },
  {
    src: "/images/activities/training4.jpeg",
    alt: "Professional Development",
    category: "Activities",
  },
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + galleryImages.length) % galleryImages.length
        : (selectedImage + 1) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
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
              Memories & Moments
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Life at PM Shri School
          </h2>
          <p className="text-gray-600 text-lg">
            Glimpses of vibrant campus life, academic excellence, and memorable moments
            that define our community.
          </p>
        </motion.div>

        {/* Gallery Grid - Show only first 9 images (3 rows) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.slice(0, 9).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => openLightbox(index)}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 || index === 5 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>

                {/* Zoom Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-navy-800" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a href="/gallery" className="btn-primary">
            View Full Gallery
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[80vh] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/80 to-transparent rounded-b-lg">
              <p className="text-white font-medium text-lg">
                {galleryImages[selectedImage].alt}
              </p>
              <p className="text-gold-400 text-sm">
                {galleryImages[selectedImage].category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
