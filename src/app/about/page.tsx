"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, BookOpen, Target, History, Lightbulb } from "lucide-react";

const milestones = [
  { year: "1984", title: "Foundation", description: "PM Shri Govt. MLB GIRLS Higher Secondary School was established with a vision to provide quality education rooted in values." },
  { year: "1999", title: "Expansion", description: "Added secondary school facilities and introduced advanced science laboratories." },
  { year: "2012", title: "Technology Integration", description: "Pioneered computer education with state-of-the-art computer labs." },
  { year: "2015", title: "Recognition", description: "Received accreditation for academic excellence in girls education." },
  { year: "2020", title: "New Facilities", description: "Inaugurated modern campus with upgraded sports facilities." },
  { year: "2024", title: "Digital Transformation", description: "Launched comprehensive digital learning platform and smart classrooms." },
];

const values = [
  { icon: BookOpen, title: "Academic Excellence", description: "Rigorous curriculum fostering critical thinking and innovation" },
  { icon: Users, title: "Community", description: "Inclusive environment celebrating diversity and collaboration" },
  { icon: Target, title: "Integrity", description: "Upholding highest ethical standards in all endeavors" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing new ideas and technologies for better learning" },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in education" },
  { icon: History, title: "Tradition", description: "Honoring our heritage while embracing the future" },
];

export default function AboutPage() {
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
            className="max-w-3xl"
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-gradient">PM Shri Govt. Girls MLB</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              For over seven decades, we have been shaping young minds and building
              character, creating a legacy of excellence in education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-navy-900 mb-6">
                उत्कृष्टता की विरासत
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                पीएम श्री सरकारी एमएलबी गर्ल्स उच्चतर माध्यमिक विद्यालय की स्थापना एक विशिष्ट लक्ष्य के साथ हुई थी: मन और चरित्र दोनों का पोषण करने वाली उत्कृष्ट शिक्षा प्रदान करना। जो एक छोटे से संस्थान के रूप में प्रारंभ हुआ, वह आज अकादमिक उत्कृष्टता और समग्र विकास के लिए प्रसिद्ध एक प्रमुख शैक्षिक संस्थान के रूप में विकसित हुआ है।
              </p>
              <p className="text-gray-600 leading-relaxed">
                हमारी यात्रा निरंतर नवाचार, गुणवत्ता के प्रति अटूट समर्पण, और हजारों छात्रों की सफलता से चिह्नित है जो अपने-अपने क्षेत्रों में नेता बने हैं। आज, हम गुणवत्तापूर्ण शिक्षा की शक्ति द्वारा जीवनों को बदलने के प्रमाण के रूप में खड़े हैं।
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <div className="aspect-[10/12] relative">
                  <Image
                    src="/images/school-image.jpeg"
                    alt="School Campus"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-4 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">40+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="mb-20">
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
                  Core Values
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-navy-900">
                What We Stand For
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-navy-700" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
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
                  Our Journey
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h2 className="font-heading text-4xl font-bold text-navy-900">
                Milestones Through the Years
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-navy-200 hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="card-premium p-6 inline-block">
                        <span className="text-gold-600 font-bold text-lg">{milestone.year}</span>
                        <h3 className="font-heading text-xl font-bold text-navy-900 mt-2 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 max-w-md">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-white shadow-lg z-10 flex-shrink-0" />
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
