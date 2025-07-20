"use client"
import React, { useRef, useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
const Team =()=>{
    const teamMembers = [
  {
    name: "TARIQ MEHMOOD",
    image: "/images/abo.png",
    about: "Owner and Principal ",
    education: "BSc,Karachi University"
  },
  {
    name: "Amir Mehmood",
    image: "/images/sir.jpg",
    about: "Voice Principal.",
    education: "MA English, Karachi University"
  },
  {
    name: "Kashan Tariq",
    image: "/images/kashanpic.png",
    about: "Computer teacher and lab operator with 6 year experience.",
    education: "Masters in Computer science"
  },
  {
    name: "Kashaf Tariq",
    image: "/images/kashaf.png",
    about: "Science teacher with 4 years experience.",
    education: "FSc, student of BS"
  },
  {
    name: "Usman Tariq",
    image: "/images/kid5.png",
    about: "History and Social Studies specialist.",
    education: "MA History, BZU Multan"
  },
  {
    name: "Fatima Noor",
    image: "/images/kid6.png",
    about: "Arts and Crafts instructor.",
    education: "BFA, NCA Lahore"
  },
  {
    name: "Kashaf Ali",
    image: "/images/kashaf.png",
    about: "Computer Science teacher.",
    education: "BSCS, FAST NUCES"
  },
  {
    name: "Kashan Raza",
    image: "/images/kashanpic.jpg",
    about: "Chemistry and Biology expert.",
    education: "MSc Chemistry, GCU Lahore"
  },
  {
    name: "Sir Imran",
    image: "/images/sir.jpg",
    about: "Principal and senior educator.",
    education: "MEd, AIOU Islamabad"
  },
  {
    name: "Sana Malik",
    image: "/images/science.png",
    about: "Junior Science teacher.",
    education: "BSc Science, Punjab University"
  }
];
    // Define unique hover colors for each box
    const hoverColors = [
      "hover:bg-pink-100",
      "hover:bg-green-100",
      "hover:bg-yellow-100",
      "hover:bg-blue-100",
      "hover:bg-purple-100",
      "hover:bg-orange-100",
      "hover:bg-teal-100",
      "hover:bg-red-100",
      "hover:bg-indigo-100",
      "hover:bg-lime-100"
    ];
    const descRef = useRef<HTMLDivElement>(null);
    const [descInView, setDescInView] = useState(false);

    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setDescInView(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      if (descRef.current) {
        observer.observe(descRef.current);
      }
      return () => {
        if (descRef.current) observer.unobserve(descRef.current);
      };
    }, []);
    return(
        <div className="min-h-screen flex flex-col bg-green-900">
          <Header />
          <div className="w-full flex flex-col items-center justify-center mt-10 mb-8 px-4">
            <h2 className="text-4xl md:text-5xl font-bold italic text-white mb-4 text-center">Our Team</h2>
            <div ref={descRef} className={`max-w-2xl w-full flex justify-center`}>
              <p className={`w-full text-lg md:text-xl text-green-900 text-center font-medium bg-green-100 bg-opacity-80 rounded-xl px-6 py-4 shadow-md transition-all duration-700 ${descInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Our respected teachers, both those who have been with us in the past and those who are with us now, have always been the backbone of our school. Their dedication, knowledge, and passion for teaching have shaped generations and continue to inspire our students every day.
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap justify-center items-center gap-6 py-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg shadow-lg p-6 w-72 h-80 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 ${hoverColors[idx % hoverColors.length]}`}
              >
                <Image src={member.image} alt={member.name} width={128} height={128} className="w-32 h-32 object-cover mb-4 border-4 border-green-300" />
                <h3 className="text-xl font-bold mb-1 text-green-700">{member.name}</h3>
                <p className="text-gray-700 text-center mb-2">{member.about}</p>
                <p className="text-sm text-gray-500 text-center">{member.education}</p>
              </div>
            ))}
          </div>
          <Footer />
        </div>
    )
}
export default Team;