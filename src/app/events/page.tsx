"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    title: "पर्यावरण शिक्षण कार्यक्रम 2025",
    date: "March 23, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "PM Shri Govt Girls School",
    description: "Students showcase innovative science projects and compete for top honors.",
    category: "Academic",
    featured: true,
    image: "/images/events/पर्यावरण शिक्षण कार्यक्रम 2025.jpg",
    gallery: [
      "/images/events/Env_1.jpg",
      "/images/events/Env_2.jpg",
      "/images/events/Env_3.jpg",
      "/images/events/Env_4.jpg",
    ]
  },
  {
    id: 5,
    title: "अनुगूँज 2025",
    date: "",
    time: "10:00 AM - 12:00 PM",
    location: "PM Shri Govt Girls School",
    description: "कार्यक्रम में माननीय मुख्यमंत्री महोदय, माननीय शिक्षा मंत्री महोदय एवं शिक्षा विभाग के अधिकारीगणों की उपस्थिति में पीएम श्री एमएलबी कन्या उच्चतर माध्यमिक विद्यालय बरखेड़ा भेल भोपाल की छात्राओं की मनमोहक प्रस्तुति",
    category: "Ceremony",
    featured: true,
    image: "/images/events/अनुगूँज 2025 कार्यक्रम.jpg",
  },
  {
    id: 10,
    title: "World Water Day 2026",
    date: "March 22, 2026",
    time: "Morning Session",
    location: "PM SHRI Govt MLB Girls H.S. School Campus",
    description: "Our school celebrated World Water Day with great enthusiasm to raise awareness about the importance of freshwater. Students and teachers actively participated in various activities emphasizing water conservation effectively.",
    category: "Community",
    featured: true,
    fullWidth: false,
    reportImage: "/images/events/WaterReport.jpg",
    image: "/images/events/Water_1.jpg",
    gallery: [
      "/images/events/Water_2.jpg",
      "/images/events/Water_3.jpg",
      "/images/events/Water_4.jpg"
    ]
  },
  {
    id: 7,
    title: "Pravesh Utsav Program",
    date: "1 April, 2026",
    time: "10:00 AM",
    location: "Model Higher Secondary School, TT Nagar, Bhopal",
    description: "1 April 2026 , it was a proud and inspiring moment for me to be a part of the Pravesh Utsav Program, which was आयोजित in the premises of Model Higher Secondary School, TT Nagar, Bhopal. The program was graced by the presence of Dr. Mohan Yadav (Hon’ble Chief Minister of Madhya Pradesh) and Rao Uday Pratap Singh (Hon’ble Education Minister), along with other respected dignitaries and senior officials from the education department.\n\nI got the opportunity to represent the ICT Lab of our PM SHRI Govt MLB Girls H.S. School Barkheda BHEL Bhopal. On this occasion, my dear students confidently explained the importance of ICT in education, showcased their innovative work, and shared how it has positively improved their learning.\n\nThe presence of Dr. Sanjay Goyal (Secretary, Education Department) and Shilpa Gupta (Commissioner, Education Department), along with other senior officials, motivated us to strive for even better work in the future.\n\nDuring the program, a beautiful poster created by my students and me using AI tools was presented as a token of respect to the Hon’ble Chief Minister and Education Minister.\n\nThis experience was not only a matter of pride for us but also a great source of motivation to continue doing even better in the future.",
    category: "Ceremony",
    featured: true,

    image: "/images/events/Img1.jpg",
    gallery: [
      "/images/events/Img2.jpg",
      "/images/events/img3.jpg",
      "/images/events/img4.jpg",
      "/images/events/Img5.jpg",
      "/images/events/Img6.jpg",
      "/images/events/img7.jpg",
      "/images/events/img8.jpg",
      "/images/events/Img9.jpg",
      "/images/events/Img10.jpg",
      "/images/events/img11.jpg",
      "/images/events/img12.jpg",
      "/images/events/Img13.jpg",
      "/images/events/Img14.jpg",
      "/images/events/img15.jpg",
      "/images/events/img16.jpg",
      "/images/events/Img17.jpg",
      "/images/events/Img18.jpg"
    ]
  },
  {
    id: 8,
    title: "Educational Visit Trip and Career Guidance",
    date: "10 April 2026",
    time: "12 PM",
    location: "PMShri Govt Girls School",
    description: "Our students embarked on an inspiring educational visit and career guidance trip. The journey provided them with practical insights into various professional fields and gave them an opportunity to interact with experts.\n\nThey received valuable mentorship and learned about modern industry practices, helping them make informed choices about their future career paths. Such activities play a vital role in bridging the gap between theoretical knowledge and real-world application.",
    category: "Academic",
    featured: true,
    fullWidth: false, // Aap chahein to isko true karke colspan-2 (full width) bana sakte hain
    reportImage: "/images/events/Careerreport.jpg",
    image: "/images/events/Edu_1.jpg",
    gallery: [
      "/images/events/Edu_1.jpg",
      "/images/events/Edu_2.jpg",
     
      "/images/events/Edu_6.jpg",

    ]
  },
  {
    id: 9,
    title: "Peepul Team Visit - PM SHRI Activities & ICT Lab",
    date: "11 April 2026",
    time: "12 PM",
    location: "Campus Grounds & ICT Lab",
    description: "The esteemed Peepul team visited our campus to observe all PM SHRI school activities, with a special focus on the ICT Lab. The team reviewed the integration of technology in our curriculum and the active participation of students in various learning initiatives.\n\nThis visit underscored our commitment to modern educational standards and provided great encouragement to our faculty and students.",
    category: "Academic",
    featured: true,
    fullWidth: false,
    reportImages: [
      "/images/events/peepul_3.jpg",
      "/images/events/peepul_4.jpg"
    ],
    image: "/images/events/peepul_1.jpg",
    gallery: [
      "/images/events/peepul_1.jpg",
      "/images/events/peepul_2.jpg",
       "/images/events/Edu_3.jpg",
      "/images/events/edu_4.jpg",
      "/images/events/Edu_5.jpg",
      "/images/events/peepul_3.jpg",
      "/images/events/peepul_4.jpg",
    ]
  },

  {
    id: 11,
    title: "Bhimbetka Educational Visit",
    date: "April 2026",
    time: "Morning to Evening",
    location: "Bhimbetka Rock Shelters",
    description: "Our students had an inspiring educational excursion to the Bhimbetka Rock Shelters. They explored the rich historical heritage, ancient rock paintings, and learned about early human settlements in India. It was a wonderful day of learning and exploration outside the classroom.",
    category: "Academic",
    featured: true,
    fullWidth: false,
    image: "/images/events/visit_1.jpg",
    gallery: [
      "/images/events/visit_1.jpg",
      "/images/events/Visit_2.jpg",
      "/images/events/Visit_3.jpg",
      "/images/events/visit_4.jpg",
    ]
  }
];

export default function EventsPage() {
  const featuredEvents = upcomingEvents.filter((e) => e.featured);
  const regularEvents = upcomingEvents.filter((e) => !e.featured);

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
              School <span className="text-gradient">Events</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Stay updated with our exciting calendar of academic, cultural, and sporting events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                Featured Events
              </span>
            </div>
          </motion.div>

          <div className="columns-1 md:columns-2 gap-8 mb-20">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden group flex flex-col break-inside-avoid mb-8"
              >
                {event.image ? (
                  <div className={`relative ${(event as any).fullWidth ? 'h-80 md:h-[450px]' : 'h-[300px]'} w-full`}>
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="h-64 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-gold-400" />
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold">
                      {event.category}
                    </span>
                    <span className="text-navy-600 font-bold">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">{event.description}</p>

                  {/* Gallery Support */}
                  {(event as any).gallery && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                      {((event as any).gallery as string[]).map((img, idx) => (
                        <div key={idx} className="relative h-28 sm:h-36 rounded-lg overflow-hidden border border-gray-200 shadow-sm group-hover:border-gold-300 transition-colors">
                          <Image src={img} alt={`Gallery image ${idx + 2}`} fill className="object-cover object-top hover:scale-110 transition-transform duration-500 cursor-pointer" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Report Support */}
                  {(event as any).reportImages ? (
                    <div className="mb-6 flex flex-wrap gap-3">
                      {((event as any).reportImages as string[]).map((img, idx) => (
                        <a
                          key={idx}
                          href={img}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition shadow-md"
                        >
                          <FileText className="w-4 h-4" />
                          View Visit Report P-{idx + 1}
                        </a>
                      ))}
                    </div>
                  ) : (event as any).reportImage ? (
                    <div className="mb-6">
                      <a
                        href={(event as any).reportImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-lg font-semibold transition shadow-md"
                      >
                        <FileText className="w-4 h-4" />
                        View Visit Report
                      </a>
                    </div>
                  ) : null}

                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regular Events */}
          {regularEvents.length > 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-12 bg-gold-500" />
                  <span className="text-gold-600 font-semibold text-sm tracking-wider uppercase">
                    Upcoming Events
                  </span>
                </div>
              </motion.div>

              <div className="space-y-4">
                {regularEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-premium p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group"
                  >
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-navy-100 flex flex-col items-center justify-center">
                      <span className="text-xs text-gray-500 uppercase">{event.date.split(" ")[0]}</span>
                      <span className="text-2xl font-bold text-navy-800">{event.date.split(" ")[1]?.replace(",", "")}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded bg-gold-100 text-gold-700 text-xs font-semibold">
                          {event.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
