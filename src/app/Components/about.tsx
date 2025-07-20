"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    const currentRef = textRef.current;
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div className=" mt-2 h-screen w-full flex items-center justify-center bg-green-900 overflow-hidden">
      <div className="md:grid md:grid-cols-7 w-full h-full max-w-full">
        {/* Image Section */}
        <div className="relative w-full h-60 md:h-full md:col-span-4">
          <Image
            src="/images/building.png"
            alt="School Building"
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* Text Section */}
        <div className="w-full bg-white py-6 flex flex-col justify-center items-center text-center h-full px-4 md:col-span-3">
          <div
            ref={textRef}
            className="w-full max-w-md mx-auto"
          >
            <h2 className={`md:text-5xl text-3xl font-bold text-green-900 mb-8 drop-shadow-lg italic ${inView ? "animate-fade-in-up" : "opacity-0"}`}>About the Founder</h2>
            <p className={`text-2xl md:text-3xl text-green-900 mb-2 font-semibold italic ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Tariq Mehmood Kamboh</p>
            <p className={`text-lg md:text-xl text-green-900 mb-2 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Qualification: <span className="font-medium">Bachelor of Science, Karachi University</span></p>
            <p className={`text-lg md:text-xl text-green-900 mb-2 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>Founded: <span className="font-medium">2002</span></p>
            <p className={`text-base md:text-lg text-green-900 mt-4 italic max-w-2xl mx-auto ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
              Since 2002, Mr. Tariq Mehmood Kamboh has been dedicated to providing the best quality education to children, nurturing their minds and character with passion and integrity. Under his visionary leadership, Shah Latif English Schooling System has become a beacon of excellence, inspiring students to achieve their dreams and become responsible citizens. His commitment to academic innovation, personal growth, and community values continues to shape the future of countless young learners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 