
"use client";

import React, { useRef, useEffect, useState } from "react";

import Image from "next/image";

const Hero = () => {
  // Separate refs and state for mobile and desktop
  const mobileRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const [mobileInView, setMobileInView] = useState(false);
  const [desktopInView, setDesktopInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === mobileRef.current) setMobileInView(entry.isIntersecting);
          if (entry.target === desktopRef.current) setDesktopInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    if (mobileRef.current) observer.observe(mobileRef.current);
    if (desktopRef.current) observer.observe(desktopRef.current);
    return () => {
      if (mobileRef.current) observer.unobserve(mobileRef.current);
      if (desktopRef.current) observer.unobserve(desktopRef.current);
    };
  }, []);

  return (
    <div>
      <section>
      {/* Mobile: Only text, no image */}
      <div className="block md:hidden w-full">
        <div ref={mobileRef} className="flex flex-col items-center justify-center text-center w-full px-4 py-6 bg-green-900">
          <h2 className={`text-3xl font-bold text-white mb-6 italic transition-all duration-700 ${mobileInView ? "animate-fade-in-up" : "opacity-0"}`}>SHAH LATIF ENGLISH SCHOOLING SYSTEM</h2>
          <p className={`text-xl text-white leading-relaxed italic transition-all duration-700 ${mobileInView ? "animate-fade-in-up" : "opacity-0"}`}>At Shah Latif English Schooling System, we empower students to become confident, creative, and compassionate leaders of tomorrow. Our commitment is to foster a vibrant learning environment where academic excellence, personal growth, and strong moral values go hand in hand. Join us on a journey where every child’s potential is nurtured and their dreams are given wings.</p>
          <a href="/register" className="mt-6 inline-block px-6 py-3 bg-white text-green-900 font-bold rounded-full shadow hover:bg-green-100 transition-all">Register Now</a>
        </div>
      </div>
      {/* Desktop: Background image with overlayed text */}
      <div className="hidden md:flex relative h-screen w-full items-center justify-center bg-green-900 overflow-hidden">
        <Image
          src="/images/school3.png"
          alt="Hero"
          fill
          className="object-cover w-full h-full absolute inset-0 z-0 opacity-70"
          sizes="100vw"
        />
        <div
          ref={desktopRef}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center w-full px-4"
        >
          <h2 className={`md:text-6xl text-3xl font-bold text-white mb-12 drop-shadow-lg italic transition-all duration-700 ${desktopInView ? "animate-fade-in-up" : "opacity-0"}`}>SHAH LATIF ENGLISH SCHOOLING SYSTEM</h2>
          <p className={`md:text-3xl text-xl text-white leading-relaxed italic transition-all duration-700 ${desktopInView ? "animate-fade-in-up" : "opacity-0"}`}>At Shah Latif English Schooling System, we empower students to become confident, creative, and compassionate leaders of tomorrow. Our commitment is to foster a vibrant learning environment where academic excellence, personal growth, and strong moral values go hand in hand. Join us on a journey where every child’s potential is nurtured and their dreams are given wings.</p>
          <a href="/register" className="mt-8 inline-block px-8 py-4 bg-white text-green-900 font-bold rounded-full shadow hover:bg-green-100 transition-all text-xl">Register Now</a>
        </div>
      </div>
      
      </section>
    </div>
  );
};

export default Hero;

