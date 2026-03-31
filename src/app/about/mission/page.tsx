"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Heart, Eye, Lightbulb, Shield, Globe, Users, BookOpen } from "lucide-react";

const coreValues = [
  { icon: Heart, title: "Compassion", description: "We foster empathy and kindness, encouraging students to care for others and contribute positively to their communities." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace creativity and critical thinking, preparing students to solve complex problems and adapt to a changing world." },
  { icon: Shield, title: "Integrity", description: "We uphold the highest ethical standards, teaching students to be honest, responsible, and accountable in all they do." },
  { icon: Globe, title: "Global Citizenship", description: "We develop awareness and appreciation of diverse cultures, preparing students to thrive in an interconnected world." },
];

const visionPoints = [
  { icon: Target, title: "Academic Excellence", description: "To be recognized as a leading institution that sets the standard for educational innovation and student achievement." },
  { icon: Users, title: "Holistic Development", description: "To nurture well-rounded individuals who excel academically, socially, emotionally, and physically." },
  { icon: BookOpen, title: "Lifelong Learning", description: "To instill a passion for continuous learning that extends beyond graduation and throughout life." },
  { icon: Eye, title: "Future Leaders", description: "To develop ethical leaders who will make meaningful contributions to society and shape a better world." },
];

export default function MissionPage() {
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
              Mission & <span className="text-gradient">Vision</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Our guiding principles that shape every aspect of the PM Shri experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Our Mission
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <blockquote className="relative">
              <span className="absolute -top-8 left-0 text-8xl text-gold-200 font-serif">"</span>
              <p className="font-heading text-3xl md:text-4xl font-medium text-navy-900 leading-relaxed relative z-10 px-8">
                छात्रों को प्रेरित और सशक्त बनाना ताकि वे करुणामय, नवप्रवर्तनशील और नैतिक नेता बन सकें, जो एक कठोर शैक्षणिक कार्यक्रम और समग्र चरित्र निर्माण के माध्यम से विश्व पर सकारात्मक प्रभाव डालें।
              </p>
              <span className="absolute -bottom-16 right-0 text-8xl text-gold-200 font-serif">"</span>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
                What We Believe
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900">
              Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 text-center group hover:border-gold-300 transition-colors"
              >
                <div className="w-16 h-16 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-100 transition-colors">
                  <value.icon className="w-8 h-8 text-navy-700 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                  Looking Forward
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold text-navy-900 mb-6">
                Our Vision for the Future
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                हम पीएम श्री को एक आदर्श संस्थान के रूप में देखते हैं जो नवाचार, समावेशिता और उत्कृष्टता के माध्यम से शिक्षा को परिवर्तित करता है। 2030 तक, हमारा लक्ष्य 21वीं सदी की चुनौतियों और अवसरों के लिए छात्रों को तैयार करने में वैश्विक स्तर पर अग्रणी के रूप में स्थापित होना है।
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                हमारी दृष्टि केवल अकादमिक उपलब्धि तक सीमित नहीं है, बल्कि यह चरित्र, रचनात्मकता और नागरिक जिम्मेदारी के विकास तक फैली हुई है। हम ऐसा वातावरण बनाने का प्रयास करते हैं जहां प्रत्येक छात्र अपनी अद्वितीय प्रतिभा को पहचाने और अपने सपनों को पूरा करने का आत्मविश्वास विकसित करे।
              </p>
              <p className="text-gray-600 leading-relaxed">
                हम निरंतर सुधार के लिए प्रतिबद्ध हैं - नई तकनीकों और शैक्षिक पद्धतियों को अपनाते हुए, साथ ही उन शाश्वत मूल्यों को संजोए रखते हैं जिन्होंने सात दशकों से अधिक समय से हमारी संस्था की पहचान बनाई है।
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {visionPoints.map((point, index) => (
                <div key={point.title} className="card-premium p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 lg:py-28 bg-navy-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/mission/mission2.jpg"
                  alt="Students learning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading text-xl font-bold">Excellence</p>
                  <p className="text-gold-400">In everything we do</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/mission/mission1.jpg"
                  alt="Collaboration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading text-xl font-bold">Community</p>
                  <p className="text-gold-400">Stronger together</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/mission/mission3.jpg"
                  alt="Achievement"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading text-xl font-bold">Success</p>
                  <p className="text-gold-400">For every student</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
