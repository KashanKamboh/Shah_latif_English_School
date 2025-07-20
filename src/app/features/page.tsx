"use client";

import React from "react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
    hoverBg: "hover:bg-pink-200",
    shortDesc: "<b>Text-based admission</b> <br/> <span>📝</span> Previous school leaving certificate required <br/> <span>📅</span> Admissions open January to April",
  },
  {
    title: "Fees Schedule",
    slug: "fees-schedule",
    icon: <span style={{fontSize: 48}}>💸</span>,
    color: "text-blue-600",
    hoverBg: "hover:bg-blue-200",
    shortDesc: `<b>Admission Fee:</b> 3000 <br/> <b>Monthly Fee:</b> 1500-2500 <br/> <span>💳</span> Exam Fee: 1000/exam`,
  },
  {
    title: "Examination Details",
    slug: "examination-details",
    icon: <span style={{fontSize: 48}}>📚</span>,
    color: "text-green-600",
    hoverBg: "hover:bg-green-200",
    shortDesc: `<b>Three Terms:</b> First, Mid, Final <br/> <span>🗓️</span> Monthly tests before each term`,
  },
  {
    title: "Publisher",
    slug: "publisher",
    icon: <span style={{fontSize: 48}}>📖</span>,
    color: "text-yellow-600",
    hoverBg: "hover:bg-yellow-200",
    shortDesc: `<b>Moonlight Publisher</b> <br/> <span>🌙</span> Lesson plans, reading, writing, teacher training`,
  },
  {
    title: "Facilities",
    slug: "facilities",
    icon: <span style={{fontSize: 48}}>🏫</span>,
    color: "text-purple-600",
    hoverBg: "hover:bg-purple-200",
    shortDesc: `<b>Science Lab</b>, <b>Computer Lab</b>, <b>Play Area</b> <br/> <span>🔬💻🏀</span> Solar system, exhibitions, staff room`,
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
    <div className="text-gray-500 text-center text-base min-h-[72px]" dangerouslySetInnerHTML={{ __html: shortDesc }} />
    <Link href={`/features/${slug}`} className="mt-6 px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-800 transition font-semibold">Read More</Link>
  </div>
);

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-12 px-4">
          <h2 className="md:text-6xl text-4xl font-bold italic text-green-900 mb-10 text-center">School Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full max-w-7xl">
            {features.map((feature) => (
              <FeatureBox key={feature.slug} {...feature} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features; 