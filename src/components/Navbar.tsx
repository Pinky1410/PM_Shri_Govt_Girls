"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "History", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission" },
      { name: "Principal's Message", href: "/about/principal-message" },
    ],
  },
  {
    name: "Academics",
    href: "/academics",
    children: [
      { name: "Curriculum", href: "/academics/curriculum" },
      { name: "Departments", href: "/academics/departments" },
      { name: "Faculty", href: "/academics/faculty" },
    ],
  },
  {
    name: "Admissions",
    href: "/admissions",
    children: [
      { name: "Admission Process", href: "/admissions/process" },
      { name: "Eligibility", href: "/admissions/eligibility" },
      { name: "Fee Structure", href: "/admissions/fee-structure" },
    ],
  },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "News & Notices", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2 hidden md:block w-full">
        <div className="container-custom px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+91755294118"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 755 294 118</span>
            </a>
            <a
              href="mailto:govtmlbschool1986@gmail.com"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>govtmlbschool1986@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>E-Sector Barkheda, BHEL, Bhopal</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg py-1"
            : "bg-white/95 backdrop-blur-sm py-2"
        }`}
      >
        <div className="container-custome px-10">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-glow transition-shadow bg-white">
                <Image
                  src="/images/school-logo.jpeg"
                  alt="PM Shri School Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading font-bold text-navy-900 text-base leading-tight">
                  PM Shri Govt. MLB
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  GIRLS HSS
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-navy-800 rounded-lg hover:bg-navy-50 transition-all duration-200"
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/admissions/process" className="btn-primary">
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-navy-800" />
              ) : (
                <Menu className="w-6 h-6 text-navy-800" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container-full px-4 py-4">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => !item.children && setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors"
                      >
                        {item.name}
                        {item.children && (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </Link>
                      {item.children && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/admissions/process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
