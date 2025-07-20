
"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

const features = [
  {
    title: "Admission Procedure",
    slug: "admission-procedure",
    fullDesc: `
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">📝</span> Admission Process</h3>
      <ul class="list-disc pl-5 mb-2">
        <li>Admissions are <b>text-based</b> (no written test for pre-school).</li>
        <li>For primary and secondary, assessment is based on previous academic record and interview.</li>
      </ul>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">📄</span> Required Documents</h3>
      <ul class="list-disc pl-5 mb-2">
        <li>Previous school leaving certificate is mandatory.</li>
        <li>Birth certificate and recent photographs.</li>
      </ul>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">📅</span> Admission Timeline</h3>
      <ul class="list-disc pl-5">
        <li>Admissions are open from <b>January to April</b> every year.</li>
      </ul>
    `,
  },
  {
    title: "Fees Schedule",
    slug: "fees-schedule",
    fullDesc: `
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">💸</span> Admission & Monthly Fees</h3>
      <ul class="list-disc pl-5 mb-2">
        <li><b>Admission Fee:</b> 3000 per student</li>
        <li><b>Prep to Prep III:</b> 1500/month</li>
        <li><b>Class 1 to 5th:</b> 1800/month</li>
        <li><b>Class 6th to 8th:</b> 2000/month</li>
        <li><b>Class 9th, 10th:</b> 2500/month</li>
      </ul>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">💳</span> Examination Fee</h3>
      <ul class="list-disc pl-5">
        <li>1000 per exam (all classes)</li>
      </ul>
    `,
  },
  {
    title: "Examination Details",
    slug: "examination-details",
    fullDesc: `
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">📚</span> Examination System</h3>
      <ul class="list-disc pl-5 mb-2">
        <li>Academic year is divided into <b>three terms</b>: First, Mid, and Final.</li>
        <li>Each term has its own syllabus and lesson plan.</li>
        <li>Monthly tests are conducted before each term exam.</li>
      </ul>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🗓️</span> Exam Schedule</h3>
      <ul class="list-disc pl-5">
        <li><b>First Term:</b> Exams in August</li>
        <li><b>Mid Term:</b> Exams in December</li>
        <li><b>Final Term:</b> Exams in April</li>
      </ul>
      <p class="mt-2">The entire syllabus is divided across the three terms for balanced learning and assessment.</p>
    `,
  },
  {
    title: "Publisher",
    slug: "publisher",
    fullDesc: `
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🌙</span> Moonlight Publisher</h3>
      <ul class="list-disc pl-5 mb-2">
        <li>All classes use <b>Moonlight Publisher</b> books.</li>
        <li>Comprehensive lesson plans for every subject.</li>
        <li>Focus on reading, writing, and conceptual learning.</li>
        <li>Regular <b>teacher training</b> and workshops.</li>
        <li>Online resources and support available.</li>
      </ul>
      <a href="https://moonlightpublishers.com/" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Visit Moonlight Publishers Website</a>
    `,
  },
  {
    title: "Facilities",
    slug: "facilities",
    fullDesc: `
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🔬</span> Science Lab</h3>
      <p>Modern science lab for practical learning and experiments.</p>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">💻</span> Computer Lab</h3>
      <p>Well-equipped computer lab for digital literacy and IT skills.</p>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🏀</span> Play Area</h3>
      <p>Safe and spacious play area for physical activities and sports.</p>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">☀️</span> Solar System Activities</h3>
      <p>Hands-on solar system models and science exhibitions to inspire curiosity.</p>
      <h3 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🧑‍🏫</span> Staff Room</h3>
      <p>Comfortable staff room for teachers and faculty.</p>
    `,
  },
];

const FeatureDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const feature = features.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Feature Not Found</h2>
        <button onClick={() => router.back()} className="px-4 py-2 bg-green-900 text-white rounded-full">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6 text-center">{feature.title}</h2>
        <div className="text-lg text-green-900 mb-8 text-left w-full" dangerouslySetInnerHTML={{ __html: feature.fullDesc }} />
        <button onClick={() => router.back()} className="px-6 py-2 bg-green-900 text-white rounded-full hover:bg-green-800 transition">Back</button>
      </div>
    </div>
  );
};


export default FeatureDetail; 