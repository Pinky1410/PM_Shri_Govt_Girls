"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { useState } from "react";

const facultyStats = [
  { icon: Users, value: "20+", label: "Faculty Members" },
  { icon: GraduationCap, value: "85%", label: "Hold Advanced Degrees" },
  { icon: Award, value: "15", label: "Average Years Experience" },
  { icon: BookOpen, value: "60+", label: "Published Authors" },
];

const facultyHighlights = [
  {
    name: "Mrs. Smita Meshram",
    role: "Principal",
    bio: "Leading the institution with vision and dedication, fostering academic excellence and holistic student development.",
    image: "/images/principal.jpeg",
  },

  {
    name: "Dr. Jitendra Pal Singh Chauhan",
    role: "PMSHRI and  ICT Prabhari",
    bio: "Overseeing ICT lab operations and digital infrastructure, ensuring cutting-edge technology education for all students.",
    image: "/images/faculty/PMShri_Incharge.jpg",
  },
  {
    name: "Mr. D.C. Modak",
    role: "Head Master",
    bio: "Work Experience 35+ years in teaching.",
    image: "/images/faculty/DC_Modak.jpg",
  },
  {
    name: "Mrs. Sandhya_Jain",
    role: "senior Lecturer",
    bio: "Work Experience 35 years in teaching.",
    image: "/images/faculty/Sandhya_Jain.jpg",
  },
  {
    name: "Mrs. Bhavana Mehta",
    role: "Physics UMS",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Bhavana_Mehta.jpg",
  },
  {
    name: "Mrs. Mamta Dixit",
    role: "Account UMS",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/Mamta_dixit.jpg",
  },
  {
    name: "Mrs. Priti Mishra",
    role: "English UMS",
    bio: "Work Experience 35+ years in teaching.",
    image: "/images/faculty/Priti_Mishra.jpg",
  },

  {
    name: "Mr. Rakesh Rajoriya",
    role: "Hindi UMS",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/Rakesh_Rajoriya.jpg",
  },

  {
    name: "Dr. Vijeta Bhatnagar",
    role: "Commerce UMS",
    bio: "Work Experience 13+ years in teaching.",
    image: "/images/faculty/Dr.Vijeta_Bhatnagar.jpg",
  },

  {
    name: "Mr. Yashwant Bhuarya",
    role: "Hindi UMS",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/Yashwant_bhuarya.jpg",
  },
  {

    name: "Mrs. Roshni Toppo",
    role: "Arts (geogrophy) UMS",
    bio: "Work Experience 13+ years in teaching.",
    image: "/images/faculty/Roshni_Toppo.jpg",
  },
  {
    name: "Mrs. Aarti Singh RAI",
    role: "Chemistry UMS",
    bio: "Work Experience 13+ years in teaching.",
    image: "/images/faculty/Aarti.jpg",
  },
  {
    name: "Mrs. Reena Mishra",
    role: "Biology UMS",
    bio: "Work Experience 5+ years in teaching.",
    image: "/images/faculty/Rina_Mishra.jpg",
  },
  {
    name: "Mrs. Priyanka Rathore",
    role: "Maths UMS",
    bio: "Work Experience 5+ years in teaching.",
    image: "/images/faculty/Priyank_rathore.jpg",
  },
  {
    name: "Mrs. Rupali Dubey",
    role: "Economic UMS",
    bio: "Work Experience 1+ years in teaching.",
    image: "/images/faculty/Rupali_Dubey.jpg",
  },

  //High School

  {
    name: "Mrs. Anita Vashisht",
    role: "Science MS",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Anita_Vashith.jpg",
  },

  {
    name: "Mrs. Priti Saxena",
    role: "Maths MS",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Priti_Saxena.jpg",
  },
  {
    name: "Mrs. Savita Varudkar",
    role: "Hindi MS",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Savita_Varudkar.jpg",
  },
  {
    name: "Mrs. Reeta Gupta",
    role: "Maths MS",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/Rita_Gupta.jpg",
  },

  {
    name: "Mrs. Parwati Uikey",
    role: "Hindi MS",
    bio: "Work Experience 35+ years in teaching.",
    image: "/images/faculty/Parwati_Uiky.jpg",
  },

  {
    name: "Mrs. Anuradha Chouhan",
    role: "English MS",
    bio: "Work Experience 20+ years in teaching.",
    image: "/images/faculty/Anuradha_Chouhan.jpg",
  },
  {
    name: "Mrs. Sugandhi Shriwastav",
    role: "English MS",
    bio: "Work Experience 6+ years in teaching.",
    image: "/images/faculty/Sugandhi_Shriwastav.jpg",
  },

  {
    name: "Mrs. Krishna Malviya",
    role: "Lab Assistant & NCC Incharge",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Krishna_Malviya.jpg",
  },
  {
    name: "Mr. Aakash Tiwari",
    role: "Lab Assistant",
    bio: "Work Experience 5+ years in teaching.",
    image: "/images/faculty/Aakash_Tiwari.jpg",
  },
  //Middle School

  {
    name: "Mrs. Jaishri Thakre",
    role: "Middle School Teacher",
    bio: "Work Experience 35+ years in teaching.",
    image: "/images/faculty/Jaishri_Thakre.jpg",
  },

  {
    name: "Mr. Rajesh  Sonpure",
    role: " Maths Middle School Teacher",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/Rajesh_Sonpure.jpg",
  },

  {
    name: "Mrs. Babita Yadav",
    role: "Science Teacher",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Babita_yadav.jpg",
  },

  {
    name: "Mrs. Sunita Singh",
    role: "Sanskrit Teacher",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Sunita_singh.jpg",
  },
  {
    name: "Mrs. Rashmi Khare",
    role: "Middle School teacher",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Rashmi_Khare.jpg",
  },
  {
    name: "Mrs. Yogeshwari Patle",
    role: "Sanskrit Teacher",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Yogeshwari_Patle.jpg",
  },

  {
    name: "Mrs. Samita Debnath",
    role: "English Teacher",
    bio: "Work Experience 15+ years in teaching.",
    image: "/images/faculty/Samita_Debnath.jpg",
  },



  // Pre-primary & Primary Teachers
  {
    name: "Mrs. Meera Handa",
    role: "Primary Teacher",
    bio: "Work Experience 35+ years in teaching.",
    image: "/images/faculty/Meera_handa.jpg",
  },


  {
    name: "Mrs. Meena sisodiya",
    role: "Primary Teacher",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Meena_sisodiya.jpg",
  },


  {
    name: "Mrs. Leena Singh",
    role: "Primary Teacher",
    bio: "Work Experience 30+ years in teaching.",
    image: "/images/faculty/Leena_singh.jpg",
  },

  {
    name: "Mrs. Abha Shriwastav",
    role: "Lab Assistant",
    bio: "Work Experience 20+ years in teaching.",
    image: "/images/faculty/Abha_Shriwastav.jpg",
  },

  {
    name: "Mr. RAMDAS Chouhan",
    role: "Primary teacher",
    bio: "Work Experience 20+ years in teaching.",
    image: "/images/faculty/Ramdas_Chouhan.jpg",
  },

  {
    name: "Mr. Sandeep Muchikar",
    role: "Primary teacher",
    bio: "Work Experience 20+ years in teaching.",
    image: "/images/faculty/Sandeep_Muchikar.jpg",
  },

  {
    name: "Mr. RamNaryan Dangi",
    role: "Primary teacher",
    bio: "Work Experience 25+ years in teaching.",
    image: "/images/faculty/RamNaryan_Dangi.jpg",
  },


  // Vocational Trainer

  {
    name: "Mrs. Neha Goswami",
    role: "IT Teacher(VT)",
    bio: "Work Experience 6+ years in teaching.",
    image: "/images/faculty/Neha_Goswami.jpg",
  },

  {
    name: "Mrs. Mamta Parmar",
    role: "Agriculture Teacher(VT)",
    bio: "Work Experience 2+ years in teaching.",
    image: "/images/faculty/Mamta_parmar.jpg",
  },
  // ICT Computer Instructor
  {
    name: "Mrs. Bhomershwari Pardhi",
    role: "ICT Computer Instructor",
    bio: "Dedicated to training students in computer skills, programming fundamentals, and digital literacy programs. Work Experience 3+ years in teaching.",
    image: "/images/faculty/ICT trainer.jpeg",
  },



  // Other Faculty


  {
    name: "Mrs. Swati Verma",
    role: "Pre-Primary Guest Teacher",
    bio: "Work Experience 1+ years in teaching.",
    image: "/images/faculty/Swati_verma.jpg",
  },

  {
    name: "Mrs. Sabeena Masih",
    role: "Pre-Primary Helper Teacher",
    bio: "Work Experience 2+ years in teaching.",
    image: "/images/faculty/Sabeena_Masih.jpg",
  },

  {
    name: "Miss. Savita Sahu ",
    role: "Computer operator",
    bio: "Work Experience 10+ years in teaching.",
    image: "/images/faculty/Savita_Sahu.jpg",
  },

  // School helping staff
  {
    name: "Mrs. Kamna Rajpoot",
    role: "School helping staff",
    bio: "Work Experience 20+ years.",
    image: "/images/faculty/Kamna.jpg",
  },
  {
    name: "Mr. Harprasad Maithil",
    role: "School helping staff",
    bio: "Work Experience 15+ years.",
    image: "/images/faculty/HariParasad_Maithil.jpg",
  },

];

export default function FacultyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Principal",
    "Prabhari & Management",
    "Higher Secondary Staff",
    "High School Staff",
    "Middle School Staff",
    "Pre-primary & Primary Staff",
    "Vocational Trainer",
    "ICT Computer Instructor",
    "Other Faculty",
    "School Helping Staff"
  ];

  const getCategory = (faculty: any) => {
    if (faculty.role === "Principal") return "Principal";
    if (["Dr. Jitendra Pal Singh Chauhan", "Mr. D.C. Modak", "Mrs. Sandhya_Jain"].includes(faculty.name)) return "Prabhari & Management";

    if (["Mrs. Swati Verma", "Mrs. Sabeena Masih", "Miss. Savita Sahu "].includes(faculty.name)) return "Other Faculty";

    if (faculty.role.includes("UMS")) return "Higher Secondary Staff";
    if (faculty.role.includes("MS") && !faculty.role.includes("UMS") || faculty.name === "Mrs. Krishna Malviya" || faculty.name === "Mr. Aakash Tiwari") return "High School Staff";
    if (faculty.role.includes("Middle") || faculty.role === "Science Teacher" || faculty.role === "Sanskrit Teacher" || faculty.name === "Mrs. Samita Debnath") return "Middle School Staff";
    if (faculty.role.includes("Primary") || (faculty.role === "Lab Assistant" && faculty.name === "Mrs. Abha Shriwastav")) return "Pre-primary & Primary Staff";
    if (faculty.role.includes("(VT)")) return "Vocational Trainer";
    if (faculty.role === "ICT Computer Instructor") return "ICT Computer Instructor";
    if (faculty.role === "School helping staff") return "School Helping Staff";
    return "Other Faculty";
  };

  const filteredFaculty = selectedCategory === "All"
    ? facultyHighlights
    : facultyHighlights.filter(f => getCategory(f) === selectedCategory);

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
              Our <span className="text-gradient">Faculty</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              World-class educators dedicated to inspiring and nurturing the next generation of leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facultyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-navy-700" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy-800 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-20 lg:py-28">
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
                Explore Our Faculty
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-navy-900 mb-8">
              Faculty Directory
            </h2>

            <div className="max-w-xs mx-auto mb-10">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 bg-white shadow-sm text-navy-900 font-medium"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty.map((faculty, index) => (

              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden text-center group"
              >
                <div className="relative h-[400px] overflow-hidden bg-gray-100">
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 text-white">
                    <p className="text-gold-400 text-sm">{faculty.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-1">{faculty.name}</h3>
                  <p className="text-gray-600 text-sm">{faculty.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Faculty Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16 p-8 bg-navy-50 rounded-2xl"
          >
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-4">
              Meet Our Full Faculty
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of 180+ dedicated educators brings diverse expertise and a shared commitment to student success. Visit our campus to meet the entire faculty team.
            </p>
            <button className="btn-primary">Schedule a Campus Visit</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
