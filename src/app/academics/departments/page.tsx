"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, FlaskConical, Calculator, Globe, Computer, Palette, Music, Languages, Baby } from "lucide-react";

const departments = [
  {
    icon: Calculator,
    name: "Mathematics",
    description: "Building mathematical reasoning and problem-solving skills from arithmetic to advanced calculus.",
    courses: ["Algebra", "Geometry", "Pre-Calculus", "Calculus", "AP Statistics", "AP Calculus AB/BC"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: FlaskConical,
    name: "Science",
    description: "Inquiry-based science education with state-of-the-art laboratories and hands-on experimentation.",
    courses: ["Biology", "Chemistry", "Physics", "Environmental Science", "AP Biology", "AP Chemistry", "AP Physics"],
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: BookOpen,
    name: "English & Literature",
    description: "Developing critical reading, writing, and communication skills through classic and contemporary literature.",
    courses: ["English Language Arts", "Creative Writing", "Journalism", "AP English Literature", "AP English Language"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80",
  },


  {
    icon: Globe,
    name: "Social Studies",
    description: "Exploring history, geography, and social sciences to develop informed, engaged citizens.",
    courses: ["World History", "US History", "Geography", "Economics", "Government", "AP US History", "AP World History"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Languages,
    name: "Agriculture Vocational",
    description: "Hands-on training in modern farming techniques, crop production, animal husbandry, and sustainable agricultural practices to prepare students for real-world agricultural careers.",
    courses: [
      "Crop Production",
      "Soil Science",
      "Horticulture",
      "Dairy Farming",
      "Poultry Farming",
      "Agricultural Technology"
    ],
    image: "/images/events/agriculture.jpg",
  },
  {
    icon: Computer,
    name: "Vocational IT & ICT ",
    description: "Preparing students for the digital age with programming, digital literacy, and technology integration.",
    courses: ["Introduction to Programming", "Computer Science Principles", "Web Development", "Robotics", "AP Computer Science A"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Palette,
    name: "Art & Craft",
    description: "Nurturing creativity and artistic expression through various media and techniques.",
    courses: ["Studio Art", "Photography", "Digital Art", "Ceramics", "AP Studio Art"],
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=400&q=80",
  },
  {
    icon: Music,
    name: "Music , Dance & Drama",
    description: "Developing musical and theatrical talents through performance and theoretical study.",
    courses: ["Band", "Choir", "Orchestra", "Drama", "Music Theory", "AP Music Theory", "Dance", "Drama"],
    image: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=400&q=80",
  },
  {

    icon: Baby,
    name: "Bal Vatika (Pre-Primary)",
    description: "A joyful and nurturing early learning program focused on developing basic skills, creativity, social interaction, and emotional growth through play-based and activity-oriented learning.",
    courses: [
      "Rhymes & Storytelling",
      "Basic Literacy (Alphabets & Words)",
      "Basic Numeracy (Numbers & Counting)",
      "Art & Craft",
      "Play-Based Learning",
      "Social & Motor Skills Development"
    ],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80",
  },

];

export default function DepartmentsPage() {
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
              Academic <span className="text-gradient">Departments</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Eight distinguished departments offering comprehensive programs taught by expert faculty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden group"
              >
                <div className="grid md:grid-cols-3">
                  <div className="relative h-48 md:h-full overflow-hidden">
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-l" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                        <dept.icon className="w-5 h-5 text-navy-700" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy-900">{dept.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {dept.courses.slice(0, 4).map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 rounded bg-gold-100 text-gold-700 text-xs font-medium"
                        >
                          {course}
                        </span>
                      ))}
                      {dept.courses.length > 4 && (
                        <span className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-xs font-medium">
                          +{dept.courses.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
