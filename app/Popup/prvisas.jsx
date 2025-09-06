'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/bali-tour.jpg", // You can replace these with PR-relevant images if needed
  "/Tour-du-lich-maldives.jpg",
  "/Andaman-and-Nicobar-Islands-Package.jpg",
  "/dubaivisit.avif",
];

const PRVisaContent = () => {
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
          Permanent Residency Visas Made Simple
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Take the next big step in your life with <span className="text-orange-400 font-semibold">PR visas</span> through <span className="text-orange-400">VJC Overseas</span>. Our team of experts provides <span className="text-orange-400">comprehensive guidance</span>, end-to-end documentation, and strategic support to help you <span className="text-orange-400">settle permanently</span> in countries like Canada, Australia, Germany, and more. Start your journey to a new future today.
        </p>
      </div>
    </div>
  );
};

export default PRVisaContent;
