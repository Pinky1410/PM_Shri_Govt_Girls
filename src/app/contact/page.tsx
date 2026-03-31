"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Address", content: "E-Sector Barkheda\nBHEL, Bhopal, MP" },
    { icon: Phone, title: "Phone", content: "+91 755 294 118" },
    { icon: Mail, title: "Email", content: "govtmlbschool1986@gmail.com" },
    { icon: Clock, title: "Office Hours", content: "Monday - Friday\n9:00 AM - 4:00 PM" },
  ];

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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              We&apos;d love to hear from you. Reach out to us for any inquiries or to schedule a campus visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="card-premium p-8">
                <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="admission">Admission Inquiry</option>
                        <option value="general">General Information</option>
                        <option value="visit">Schedule a Visit</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-200 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16"
          >
            <div className="card-premium overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.426!2d77.442684!3d23.265879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c683333333333%3A0x4444444444444444!2sE-Sector%20Barkheda%20BHEL%20Bhopal!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PM Shri Govt. MLB GIRLS Higher Secondary School Location"
                className="w-full"
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              <MapPin className="w-4 h-4 inline mr-1" />
              E-Sector Barkheda, BHEL, Bhopal
              <a 
                href="https://share.google/aimode/zbczKhbzj2axQSFxZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy-600 hover:text-navy-800 ml-2 underline"
              >
                View on Google Maps
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
