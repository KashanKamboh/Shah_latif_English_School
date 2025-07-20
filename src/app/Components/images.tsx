
"use client";

import React from "react";
import Image from "next/image";

const images = [
  "/images/event1.jpg",
  "/images/event2.jpg",
  "/images/event3.jpg",
  "/images/event4.jpg",
  "/images/event5.jpg",
  "/images/event6.jpg",
  "/images/event7.jpg",
  "/images/event8.jpg",
  
];

const EventsPage = () => {
  // Determine if running on client and screen is mobile
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const displayImages = isMobile ? images.slice(0, 3) : images;
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center py-8 px-2 sm:py-12 sm:px-4">
      <h2 className="md:text-5xl text-3xl font-bold italic text-green-900 mb-4 text-center">School Gallery</h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl">A glimpse into our vibrant school life — events, activities, and memorable moments that shape our students&rsquo; journey at Shah Latif English School.</p>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
        {displayImages.map((src, idx) => (
          <div key={idx} className="w-full aspect-[4/3] sm:aspect-square relative rounded-xl shadow overflow-hidden">
            <Image
              src={src}
              alt={`School image ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

