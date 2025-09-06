'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/germany.jpg",
  "/canada.webp",
  "/australiaresume.jpg",
  "/ukk.jpg",
  "/usabgimg.jpg",
  "/du.webp",
  "/de.jpg",
];

const WorkAbroadContent = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-xl overflow-hidden pt-4 md:pt-6 px-6 md:px-10 pb-4 text-white"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      <div className="relative z-10 space-y-3 mt-0 md:-mt-4">
        <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 via-white to-sky-500 bg-clip-text text-transparent drop-shadow-lg">
          Work Abroad Opportunities
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Build your career overseas with{" "}
          <span className="text-orange-400 font-semibold">VJC Overseas</span>.  
          From <span className="text-orange-400">skilled work permits</span> to{" "}
          <span className="text-orange-400">job seeker visas</span>, we help you
          secure the right visa for{" "}
          <span className="text-orange-400">Germany, Canada, Australia, the UK,
          USA, Dubai, Denmark</span> and more.  
          Get <span className="text-orange-400">expert guidance</span> in
          documentation, visa filing, and overseas career planning to achieve
          your dream job abroad.
        </p>
      </div>
    </div>
  );
};

export default WorkAbroadContent;
