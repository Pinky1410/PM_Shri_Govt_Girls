"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/images/activities/dance.jpeg", alt: "Dance Performance", category: "Events" },
  { src: "/images/activities/activity2.jpeg", alt: "School Activities", category: "Events" },
  { src: "/images/activities/activity3.jpeg", alt: "Student Activities", category: "Events" },
  { src: "/images/activities/visits.jpeg", alt: "School Visits & Excursions", category: "Events" },
  { src: "/images/activities/school_activity.jpeg", alt: "Student Activities", category: "Campus" },
  { src: "/images/facilities/ict_lab.jpeg", alt: "ICT Lab", category: "Facilities" },
  { src: "/images/facilities/yoga_fitness.jpeg", alt: "Yoga & Fitness", category: "Facilities" },
  { src: "/images/hero/pm.jpeg", alt: "PM Shri School", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80", alt: "Campus Building", category: "Campus" },
  { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80", alt: "Students in Library", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80", alt: "Classroom Learning", category: "Academics" },
  { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80", alt: "Science Lab", category: "Facilities" },
];

const categories = ["All", "Campus", "Academics", "Events", "Facilities"];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.findIndex(img => img.src === filteredImages[index].src);
    setSelectedImage(actualIndex);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "prev"
      ? (selectedImage - 1 + galleryImages.length) % galleryImages.length
      : (selectedImage + 1) % galleryImages.length;
    setSelectedImage(newIndex);
  };

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
              Photo <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Capturing moments of learning, achievement, and joy at PM Shri Govt. MLB GIRLS Higher Secondary School
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-navy-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 || index === 6 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`relative overflow-hidden ${index === 0 || index === 6 ? "aspect-square" : "aspect-square"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.category}
                  </div>
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-navy-800" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy-900/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[85vh] w-full mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/80 to-transparent rounded-b-lg">
              <p className="text-white font-medium text-lg">{galleryImages[selectedImage].alt}</p>
              <p className="text-gold-400 text-sm">{galleryImages[selectedImage].category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
