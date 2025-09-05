"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Form from "./Form";
import CanadaPR from "./CanadaPR";
import Australiapr from "./Australiapr";
import UKpr from "./UKpr";
import Germanybluecard from "./Germanybluecard";
import UsaStudy from "./UsaStudy";
import Denmark from "./Denmark";
import Ireland from "./Ireland";
import Dubai from "./Dubai";
import Austria from "./Austria";
import Singapore from "./Singapore";
import Newzealand from "./Newzealand";
import Malaysia from "./Malaysia";
import Poland from "./Poland";
import Malta from "./Malta";

import ModalFormWithPopup from "../../Popup/Popup"; // adjust path if needed
import ResumeMarketingContent from "../../Popup/resumemarketing";

const visaData = [
  { name: "Canada Resume Marketing", image: "/canadaresume1.webp", path: "/resume-marketing/canada" },
  { name: "Germany Resume Marketing", image: "/germanyresume.jpeg", path: "/resume-marketing/germany" },
  { name: "USA Resume Marketing", image: "/usaresume.jpg", path: "/resume-marketing/usa" },
  { name: "Australia Resume Marketing", image: "/australiaresume.jpg", path: "/resume-marketing/australia" },
  { name: "UK Resume Marketing", image: "/ukresume.jpg", path: "/resume-marketing/uk" },
  { name: "Denmark Resume Marketing", image: "/denmarkresume.jpg", path: "/resume-marketing/denmark" },
  { name: "Ireland Resume Marketing", image: "/irelandresume.jpg", path: "/resume-marketing/ireland" },
  { name: "Dubai Resume Marketing", image: "/uaeresume.jpg", path: "/resume-marketing/dubai" },
  { name: "Austria Resume Marketing", image: "/austriaresume.jpg", path: "/resume-marketing/austria" },
  { name: "Singapore Resume Marketing", image: "/singaporeresume.jpg", path: "/resume-marketing/singapore" },
  { name: "New Zealand Resume Marketing", image: "/nzresume.jpg", path: "/resume-marketing/new-zealand" },
  { name: "Malaysia Resume Marketing", image: "/malaysiaresume.jpg", path: "/resume-marketing/malaysia" },
  { name: "Poland Resume Marketing", image: "/polandresume.jpg", path: "/resume-marketing/poland" },
  { name: "Malta Resume Marketing", image: "/maltaresume.jpg", path: "/resume-marketing/malta" },
];

const defaultVisa = {
  name: "Permanent Residency Visa",
  path: "/Jobseeker",
  image: "/1.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    } else {
      setSelectedVisa(defaultVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== TOP HERO SECTION ===== */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 py-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                Kickstart your career abroad with the perfect resume marketing strategy. Select your destination, and let us help you stand out to top employers!
              </p>
              {/* ===== APPLY BUTTON: LARGE SCREENS ONLY ===== */}
              <div className="  mt-6">
                <button
                  className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                  <span className="relative z-10">Apply Now</span>
                </button>
              </div>

            </motion.div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-24">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">

          {/* === RIGHT SIDE (CONTENT) - FIRST ON MOBILE === */}
          <div
            className="w-full md:w-2/3 order-1 md:order-2 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md"
            style={{ maxHeight: "1200px", minHeight: "900px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <>
                <div className="text-gray-700 text-lg leading-relaxed">
                  Kickstart your career abroad with the perfect resume marketing strategy. Select your destination, and let us help you stand out to top employers!
                </div>
                
                {/* ===== APPLY BUTTON: LARGE SCREENS ONLY ===== */}
                <div className="mt-6">
                  <button
                    className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
                    onClick={() => setIsOpen(true)}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                    <span className="relative z-10">Apply Now</span>
                  </button>
                </div>
              </>
            ) : selectedVisa.path === "/resume-marketing/canada" ? (
              <CanadaPR />
            ) : selectedVisa.path === "/resume-marketing/australia" ? (
              <Australiapr />
            ) : selectedVisa.path === "/resume-marketing/uk" ? (
              <UKpr />
            ) : selectedVisa.path === "/resume-marketing/germany" ? (
              <Germanybluecard />
            ) : selectedVisa.path === "/resume-marketing/usa" ? (
              <UsaStudy />
            ) : selectedVisa.path === "/resume-marketing/denmark" ? (
              <Denmark />
            ) : selectedVisa.path === "/resume-marketing/ireland" ? (
              <Ireland />
            ) : selectedVisa.path === "/resume-marketing/dubai" ? (
              <Dubai />
            ) : selectedVisa.path === "/resume-marketing/austria" ? (
              <Austria />
            ) : selectedVisa.path === "/resume-marketing/singapore" ? (
              <Singapore />
            ) : selectedVisa.path === "/resume-marketing/new-zealand" ? (
              <Newzealand />
            ) : selectedVisa.path === "/resume-marketing/malaysia" ? (
              <Malaysia />
            ) : selectedVisa.path === "/resume-marketing/poland" ? (
              <Poland />
            ) : selectedVisa.path === "/resume-marketing/malta" ? (
              <Malta />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Information about <strong>{selectedVisa.name}</strong> will be displayed here.
              </div>
            )}
          </div>

          {/* === LEFT SIDE (HEADING + SUBMENU) - SECOND ON MOBILE === */}
          <div className="w-full md:w-1/3 order-2 md:order-1 flex flex-col gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
                <span className="block">Get Hired Faster</span>
                <span className="block">with Resume Marketing!</span>
              </h2>
            </div>
             {/* ===== APPLY BUTTON: SMALL SCREENS UNDER LEFT HEADING ===== */}
            <div className="lg:hidden mt-4 flex justify-center md:justify-start">
              <button
                className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
                onClick={() => setIsOpen(true)}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                <span className="relative z-10">Apply Now</span>
              </button>
            </div>

            {visaData.map((visa) => (
              <Link key={visa.path} href={visa.path} className="block w-full no-underline">
                <div
                  className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg ${
                    selectedVisa.path === visa.path
                      ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                      : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  } transform hover:scale-105 mb-4`}
                >
                  {visa.name}
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* ===== POPUP FORM ===== */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<ResumeMarketingContent/>}
      />
    </div>
  );
};

export default Migrate;
