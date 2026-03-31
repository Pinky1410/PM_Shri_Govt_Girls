"use client";

import Link from "next/link";
import { Megaphone } from "lucide-react";

const notices = [
  { text: "Admissions open for academic year 2026-27", type: "important" },
  { text: "Annual Sports Day scheduled for December 15", type: "event" },
  { text: "Parent-Teacher Meeting on November 25", type: "meeting" },
  { text: "Winter vacation starts from December 26", type: "holiday" },
  { text: "MP Board Exam forms available now", type: "exam" },
  { text: "New Computer Lab inaugurated", type: "announcement" },
];

export default function NewsTicker() {
  // Quadruple the notices for seamless infinite scroll
  const allNotices = [...notices, ...notices, ...notices, ...notices];

  return (
    <Link href="/news" className="block bg-amber-100 text-gray-800 py-2 overflow-hidden relative z-40 hover:bg-amber-200 transition-colors">
      <div className="flex items-center">
        {/* Label */}
        <div className="flex items-center gap-2 px-3 bg-amber-200 py-1 flex-shrink-0">
          <Megaphone className="w-4 h-4" />
          <span className="font-bold text-xs uppercase tracking-wide">Notices</span>
        </div>

        <div className="flex-1 overflow-hidden relative">
          <style>
            {`
              @keyframes seamless-scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-25%);
                }
              }

              .seamless-marquee {
                animation: seamless-scroll 25s linear infinite;
                will-change: transform;
              }

              .seamless-marquee:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          
          {/* Scrolling Track - 4x width for seamless loop */}
          <div className="seamless-marquee flex items-center whitespace-nowrap">
            {allNotices.map((notice, index) => (
              <div key={index} className="flex items-center gap-2 px-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                <span className="text-xs font-medium">{notice.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
