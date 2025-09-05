'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/resume-bg1.jpg",
  "/resume-bg2.jpg",
  "/resume-bg3.jpg",
  "/resume-bg4.jpg",
];

const ResumeMarketingContent = () => {
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
          Resume Marketing Made Easy
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Boost your career with <span className="text-orange-400 font-semibold">Resume Marketing</span> by <span className="text-orange-400">VJC Overseas</span>. Get <span className="text-orange-400">professionally tailored resumes</span>, global <span className="text-orange-400">job search support</span>, and expert guidance to <span className="text-orange-400">reach top recruiters</span>. Present your skills effectively and unlock new opportunities worldwide.
        </p>
      </div>
    </div>
  );
};

export default ResumeMarketingContent;
