"use client"
import React, { useRef, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function About() {
  // Refs and state for each animated section
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const excellenceRef = useRef<HTMLDivElement>(null);
  const founderRef = useRef<HTMLDivElement>(null);

  const [headingInView, setHeadingInView] = useState(false);
  const [introInView, setIntroInView] = useState(false);
  const [visionInView, setVisionInView] = useState(false);
  const [missionInView, setMissionInView] = useState(false);
  const [valuesInView, setValuesInView] = useState(false);
  const [excellenceInView, setExcellenceInView] = useState(false);
  const [founderInView, setFounderInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headingRef.current && entry.isIntersecting) setHeadingInView(true);
          if (entry.target === introRef.current && entry.isIntersecting) setIntroInView(true);
          if (entry.target === visionRef.current && entry.isIntersecting) setVisionInView(true);
          if (entry.target === missionRef.current && entry.isIntersecting) setMissionInView(true);
          if (entry.target === valuesRef.current && entry.isIntersecting) setValuesInView(true);
          if (entry.target === excellenceRef.current && entry.isIntersecting) setExcellenceInView(true);
          if (entry.target === founderRef.current && entry.isIntersecting) setFounderInView(true);
        });
      },
      { threshold: 0.2 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    if (introRef.current) observer.observe(introRef.current);
    if (visionRef.current) observer.observe(visionRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (excellenceRef.current) observer.observe(excellenceRef.current);
    if (founderRef.current) observer.observe(founderRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (introRef.current) observer.unobserve(introRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (excellenceRef.current) observer.unobserve(excellenceRef.current);
      if (founderRef.current) observer.unobserve(founderRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative w-full min-h-[80vh] flex items-center justify-center">
        {/* Full page background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/building.png"
            alt="School Building"
            fill
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-80" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-12 text-center">
          <h1 ref={headingRef} className={`text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg italic transition-all duration-700 ${headingInView ? 'animate-fade-in-up' : 'opacity-0'}`}>About</h1>
          <p ref={introRef} className={`text-lg md:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg mb-8 transition-all duration-700 ${introInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Shah Latif English Schooling System is dedicated to nurturing young minds and empowering students to become confident, creative, and compassionate leaders. Our mission is to provide a vibrant learning environment where academic excellence, personal growth, and strong moral values go hand in hand. We believe in holistic development and strive to inspire every child to reach their full potential.
          </p>

          {/* Four Headings with Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
            <div ref={visionRef} className={`bg-white bg-opacity-90 rounded-xl p-6 shadow text-green-900 transition-all duration-700 ${visionInView ? 'animate-fade-in-up' : 'opacity-0'}`}> 
              <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
              <p>To be a leading institution recognized for academic excellence, character building, and innovative teaching, preparing students for a successful future.</p>
            </div>
            <div ref={missionRef} className={`bg-white bg-opacity-90 rounded-xl p-6 shadow text-green-900 transition-all duration-700 ${missionInView ? 'animate-fade-in-up' : 'opacity-0'}`}> 
              <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
              <p>To foster a vibrant and inclusive learning environment where every child’s potential is nurtured, and their dreams are given wings through quality education and strong values.</p>
            </div>
            <div ref={valuesRef} className={`bg-white bg-opacity-90 rounded-xl p-6 shadow text-green-900 transition-all duration-700 ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}> 
              <h2 className="text-2xl font-bold mb-2">Core Values</h2>
              <p>Integrity, respect, creativity, compassion, and a commitment to lifelong learning are at the heart of everything we do at Shah Latif English Schooling System.</p>
            </div>
            <div ref={excellenceRef} className={`bg-white bg-opacity-90 rounded-xl p-6 shadow text-green-900 transition-all duration-700 ${excellenceInView ? 'animate-fade-in-up' : 'opacity-0'}`}> 
              <h2 className="text-2xl font-bold mb-2">Academic Excellence</h2>
              <p>We offer a well-rounded curriculum, experienced faculty, and modern facilities to ensure our students excel academically and personally.</p>
            </div>
          </div>

          {/* Founder Section from about.tsx */}
          <div ref={founderRef} className={`bg-white bg-opacity-95 rounded-2xl shadow-xl max-w-2xl w-full p-8 flex flex-col items-center mt-8 transition-all duration-700 ${founderInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 italic">About the Founder</h2>
            <p className="text-2xl md:text-3xl text-green-900 mb-2 font-semibold italic">Tariq Mehmood Kamboh</p>
            <p className="text-lg md:text-xl text-green-900 mb-2">Qualification: <span className="font-medium">Bachelor of Science, Karachi University</span></p>
            <p className="text-lg md:text-xl text-green-900 mb-2">Founded: <span className="font-medium">2002</span></p>
            <p className="text-base md:text-lg text-green-900 mt-4 italic max-w-2xl mx-auto">
              Since 2002, Mr. Tariq Mehmood Kamboh has been dedicated to providing the best quality education to children, nurturing their minds and character with passion and integrity. Under his visionary leadership, Shah Latif English Schooling System has become a beacon of excellence, inspiring students to achieve their dreams and become responsible citizens. His commitment to academic innovation, personal growth, and community values continues to shape the future of countless young learners.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}