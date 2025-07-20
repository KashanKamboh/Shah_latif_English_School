
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

interface Service {
  title: string;
  description: string;
  highlights: string[];
  icon: string;
  hoverColor: string;
}

const services: Service[] = [
  {
    title: "Academic Programs",
    icon: "📚",
    description:
      "We offer a well-rounded academic curriculum tailored to different grade levels, promoting excellence through active learning.",
    highlights: [
      "Curriculum Overview (Montessori to Secondary)",
      "Wide Range of Subjects Offered",
      "Board & International Exam Preparation",
    ],
    hoverColor: "hover:bg-pink-300",
  },
  {
    title: "Extracurricular Activities",
    icon: "🎨",
    description:
      "Our extracurricular programs aim to enhance students' creativity, leadership, and teamwork beyond the classroom.",
    highlights: [
      "Sports Programs (Cricket, Football, etc.)",
      "Arts & Crafts Workshops",
      "Speech and Quiz Competitions",
    ],
    hoverColor: "hover:bg-yellow-300",
  },
  {
    title: "Modern Facilities",
    icon: "🏫",
    description:
      "Our school features modern infrastructure and learning environments that inspire students to grow academically and socially.",
    highlights: [
      "Science & Computer Labs",
      "Playground & Sports Ground",
    ],
    hoverColor: "hover:bg-purple-300",
  },
  {
    title: "Student Support Services",
    icon: "💬",
    description:
      "We are committed to supporting every student’s academic and personal journey through health initiatives and regular evaluations.",
    highlights: [
      "Health & Wellness Day",
      "Parent-Teacher Meetings",
      "Progress Reports & Academic Feedback",
    ],
    hoverColor: "hover:bg-blue-300",
  },
  {
    title: "Technology Integration",
    icon: "💻",
    description:
      "We use modern technology to enhance learning and simplify communication between students, parents, and staff.",
    highlights: [
      "Online Student Management System",
      "Digital Communication Tools",
    ],
    hoverColor: "hover:bg-green-300",
  },
  {
    title: "Safety & Security",
    icon: "🛡️",
    description:
      "Ensuring a safe environment is our top priority with strict monitoring and secure identification protocols.",
    highlights: [
      "CCTV Surveillance",
      "Secure Entry/Exit",
      "Student & Staff ID Cards",
    ],
    hoverColor: "hover:bg-orange-300",
  },
  {
    title: "Special Services",
    icon: "🌟",
    description:
      "We offer optional services to enhance learning and development during and after school hours.",
    highlights: [
      "Summer Camps & Activities",
      "Language Courses (English, Arabic)",
      "Evening Tuition Services",
    ],
    hoverColor: "hover:bg-rose-300",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-green-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=" italic text-4xl font-bold text-center text-white mb-16"
        >
          Our School Services
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-white rounded-2xl p-6 shadow-md transition duration-300 text-green-900 ${service.hoverColor} hover:scale-105`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">
                {service.title}
              </h2>
              <p className="mb-4 text-green-800">{service.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-green-800">
                {service.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ServicesPage;

