"use client"
import React, { useRef, useEffect, useState } from "react";

const Banner = () => {
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
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-400 to-green-800 text- py-12 px-6 text-center">
      <div ref={textRef}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Why Choose Shah Latif English School?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg md:text-xl font-medium ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          At Shah Latif English School, we offer a best-in-class study plan designed to empower every student. 
          Our modern facilities, qualified teachers, interactive classrooms, and commitment to academic excellence 
          make us the ideal choice for your child’s future.
        </p>
      </div>
    </section>
  );
};

export default Banner;

