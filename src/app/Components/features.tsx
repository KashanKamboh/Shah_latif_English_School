
"use client";

import React, { useRef, useEffect, useState } from "react";

import Link from "next/link";

const features = [
  {
    title: "Admission Procedure",
    slug: "admission-procedure",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#FEE2E2"/>
        <path d="M34 16L22 28L16 22" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="23" stroke="#F472B6" strokeWidth="2"/>
      </svg>
    ),
    color: "text-pink-600",
    hoverBg: "hover:bg-pink-100",
    shortDesc: "There is no written test for pre-school. The admission test for primary and secondary school is based...",
  },
  {
    title: "Fees Schedule",
    slug: "fees-schedule",
    icon: <span style={{fontSize: 48}}>💸</span>,
    color: "text-blue-600",
    hoverBg: "hover:bg-blue-100",
    shortDesc: "Our fee schedule is affordable and flexible for all families.",
  },
  {
    title: "Examination Details",
    slug: "examination-details",
    icon: <span style={{fontSize: 48}}>📚</span>,
    color: "text-green-600",
    hoverBg: "hover:bg-green-100",
    shortDesc: "We conduct regular assessments and exams throughout the year.",
  },
  {
    title: "Faculty",
    slug: "faculty",
    icon: <span style={{fontSize: 48}}>👩‍🏫</span>,
    color: "text-yellow-600",
    hoverBg: "hover:bg-yellow-100",
    shortDesc: "Meet our experienced and dedicated teaching staff.",
  },
  {
    title: "Facilities",
    slug: "facilities",
    icon: <span style={{fontSize: 48}}>🏫</span>,
    color: "text-purple-600",
    hoverBg: "hover:bg-purple-100",
    shortDesc: "Explore our modern and student-friendly facilities.",
  },
];

type FeatureBoxProps = {
  icon: React.ReactNode;
  title: string;
  color: string;
  shortDesc: string;
  hoverBg: string;
  slug: string;
};

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, color, shortDesc, hoverBg, slug }) => (
  <div className={`bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center w-full h-80 justify-center transition-colors duration-300 cursor-pointer ${hoverBg}`}>
    <div className="mb-4">{icon}</div>
    <div className={`text-2xl font-bold mb-2 text-center ${color}`}>{title}</div>
    <div className="text-gray-500 text-center text-base" dangerouslySetInnerHTML={{ __html: shortDesc }} />
    <Link href={`/features/${slug}`} className="mt-6 px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-800 transition font-semibold">Read More</Link>
  </div>
);

const Features = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-12 px-4">
      <div ref={textRef} className="w-full flex flex-col items-center">
        <h2 className={`md:text-6xl text-4xl font-bold italic text-green-900 mb-10 text-center ${inView ? "animate-fade-in-up" : "opacity-0"}`}>School Features</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-7xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          {features.map((feature) => (
            <FeatureBox key={feature.slug} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Features; 