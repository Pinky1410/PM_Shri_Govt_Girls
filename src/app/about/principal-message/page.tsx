"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Award, GraduationCap, BookOpen, Users } from "lucide-react";

const achievements = [
  { icon: GraduationCap, value: "500+", label: "Alumni Worldwide" },
  { icon: Award, value: "25+", label: "Awards Won" },
  { icon: BookOpen, value: "40", label: "Years in Education" },
  { icon: Users, value: "90%", label: "College Acceptance" },
];

export default function PrincipalMessagePage() {
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
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-400 font-semibold text-sm tracking-wider uppercase">
                Principal&apos;s Desk
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Message from the <span className="text-gradient">Principal</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Profile Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-32">
                <div className="relative mb-6">
                  <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/principal.jpeg"
                      alt="Principal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold-500 flex items-center justify-center shadow-xl">
                    <span className="text-navy-900 font-bold text-center text-sm leading-tight">
                      15+ Years<br />Leading
                    </span>
                  </div>
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy-900 mb-1">
                  Principal
                </h2>
                <p className="text-gold-600 font-medium mb-6">PM Shri Govt. MLB GIRLS HSS</p>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-navy-900">Experience:</span> 25+ years in education
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Quote className="w-16 h-16 text-gold-400 mb-8" />
              
              <div className="prose prose-lg max-w-none">
                {/* Opening Quote */}
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-heading italic">
                  &ldquo;PM Shri Govt. MLB GIRLS Higher Secondary School में आपका स्वागत है, जहाँ हम मानते हैं कि शिक्षा दुनिया को बदलने के लिए हमारा सबसे शक्तिशाली उपकरण है।&rdquo;
                </p>

                {/* Motto */}
                <div className="my-8 p-6 bg-gold-50 rounded-lg border-l-4 border-gold-500">
                  <p className="font-heading text-xl text-gold-700 font-bold text-center">
                    हमारा ध्येय
                  </p>
                  <p className="text-navy-800 text-center text-lg mt-2 font-heading">
                    "विद्या ददाति विनयम्" 
                  </p>
                  <p className="text-gray-600 text-center mt-1">
                    - ज्ञान विनम्रता प्रदान करता है
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  प्रिय अभिभावकों, छात्रों और आगंतुकों,
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  मुझे बहुत गर्व और खुशी के साथ आपका हमारे स्कूल समुदाय में स्वागत करते हुए। वर्षों से, 
                  हमारा स्कूल अकादमिक उत्कृष्टता और चरित्र विकास का प्रतीक बनकर खड़ा है, हजारों युवा मनों का 
                  पोषण करते हुए जो आगे चलकर दुनिया के नेता, नवप्रवर्तक और करुणामय नागरिक बने हैं।
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  हमारे स्कूल में, हम मानते हैं कि शिक्षा पाठ्यपुस्तकों और परीक्षाओं से कहीं आगे तक फैली हुई है। हमारा 
                  समग्र दृष्टिकोण यह सुनिश्चित करता है कि हर बच्चा अपनी अद्वितीय प्रतिभाओं की खोज करे, महत्वपूर्ण सोच 
                  कौशल विकसित करे, और उन मूल्यों का पोषण करे जो उनके जीवन भर उनका मार्गदर्शन करेंगे। हम एक ऐसा माहौल 
                  बनाते हैं जहाँ जिज्ञासा को प्रोत्साहन मिलता है, रचनात्मकता का जश्न मनाया जाता है, और चरित्र का निर्माण होता है।
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  हमारे समर्पित शिक्षक केवल शिक्षक नहीं हैं; वे Mentor, मार्गदर्शक और आजीवन शिक्षार्थी 
                  हैं। वे प्रत्येक छात्र की सफलता के प्रति जुनून, विशेषज्ञता और वास्तविक प्रतिबद्धता लाते हैं। 
                  व्यक्तिगत ध्यान और अभिनव शिक्षण पद्धतियों के माध्यम से, वे यह सुनिश्चित करते हैं कि हर छात्र 
                  अपनी पूरी क्षमता तक पहुँचे।
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  हमें हमारी अत्याधुनिक सुविधाओं, व्यापक पाठ्यक्रम और विविध सह-पाठ्यक्रम 
                  कार्यक्रमों पर गर्व है। विज्ञान प्रयोगशालाओं से लेकर खेल मैदानों तक, कला स्टूडियो से लेकर वाद-विवाद क्लबों तक, हम 
                  छात्रों को अन्वेषण, प्रयोग और उत्कृष्टता प्राप्त करने के पर्याप्त अवसर प्रदान करते हैं।
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  भविष्य की ओर देखते हुए, हम नवाचार और परिवर्तन को अपनाते हुए अपने संस्थापक सिद्धांतों के प्रति प्रतिबद्ध रहते हैं। 
                  हम अपने छात्रों को केवल परीक्षाओं के लिए नहीं, बल्कि जीवन के लिए तैयार करते हैं - उन्हें 
                  कौशल, ज्ञान और मूल्यों से लैस करते हुए जिनकी उन्हें एक बदलती हुई दुनिया में नेविगेट करने के लिए आवश्यकता है।
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  मैं आपसे हमारी वेबसाइट का पता लगाने, हमारे परिसर का दौरा करने, और हमारे स्कूल को परिभाषित करने वाली 
                  गर्मजोशी और उत्कृष्टता का अनुभव करने का आग्रह करता हूँ। चाहे आप एक संभावित परिवार हों, एक पूर्व छात्र हों, 
                  या एक समुदाय साथी हों, आप यहाँ हमेशा स्वागत योग्य हैं।
                </p>

                <p className="text-gray-600 leading-relaxed mb-8">
                  साथ मिलकर, आइए शिक्षा की परिवर्तनकारी शक्ति के माध्यम से प्रेरित करना, नवाचार करना और जीवन पर प्रभाव डालना जारी रखें।
                </p>

                <div className="border-l-4 border-gold-500 pl-6 py-2 bg-gold-50 rounded-r-lg">
                  <p className="font-heading text-lg text-navy-900 font-semibold">
                    With warm regards,
                  </p>
                  <p className="font-heading text-xl text-navy-900 font-bold mt-2">
                    Principal
                  </p>
                  <p className="text-gold-600">PM Shri Govt. MLB GIRLS Higher Secondary School</p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-navy-50 rounded-xl"
                  >
                    <item.icon className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-navy-900">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
