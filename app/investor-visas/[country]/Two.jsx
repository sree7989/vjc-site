"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Canadainvestor from "./Canadainvestor";
import Austriainvest from "./Austriainvest";
import UKin from "./UKin";
import Portin from "./Portin";
import Germanyinvestor from "./Germanyinvestor";
import Usain from "./Usain";
import Australiainvest from "./Australiainvest";
import Uaeinvest from "./Uaeinvest";
 import Link from "next/link";
const visaData = [

  { name: "USA Investor Visa", path: "/investor-visas/usa", image: "/usainvest.png" },
  { name: "Canada Investor Visa", path: "/investor-visas/canada", image: "/canadainvestbg.png" },
  { name: "Germany Investor Visa", path: "/investor-visas/germany", image: "/canadainvestorbg.png" },
  { name: "Australia Investor Visa", path: "/investor-visas/australia", image: "/australiainvestbg2.png" },
  { name: "UK Investor Visa", path: "/investor-visas/uk", image: "/ukinvestorvisa.png" },
  { name: "UAE Investor Visa", path: "/investor-visas/uae", image: "/uaeinvestorbg.png" },
  { name: "Portugal Investor Visa", path: "/investor-visas/portugal", image: "/potugalinvestorbg.png" },
  { name: "Austria Investor Visa", path: "/investor-visas/austria", image: "/austriainvestbg2.png" },
];
const defaultVisa = {
  name: "investor Visa",
  path: "/investor-visas",
  image: "/usainvest.png",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

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
      {/* ===== TOP SECTION ===== */}
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
              "Start your investment journey with the right Investor Visa option. Choose your destination and let us guide you."
              </p>
            </motion.div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-16">
          <h2 className="text-3xl font-bold text-gray-800 -ml-8 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">"Secure Your Future,</span>
            <span className="block text-center">Invest for Residency."</span>
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Visa Buttons Section */}
          <div className="w-full md:w-1/3">
           

{visaData.map((visa) => (
  <div key={visa.path} className="mb-4 w-full">
    <Link href={visa.path} className="w-full block">
      <div
        className={`flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg transform hover:scale-105 ${
          selectedVisa.path === visa.path
            ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
            : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
        }`}
      >
        {visa.name}
        <ArrowRight className="w-6 h-6" />
      </div>
    </Link>
  </div>
))}

          </div>

          {/* Visa Info Content Box */}
          <div
            className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative md:-mt-32 sm:-mt-20 mt-0"
            style={{ maxHeight: "730px", minHeight: "550px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <div className="text-gray-700 text-lg leading-relaxed">
                Please select a visa type from the left to view more detailed information about that particular Permanent Residency visa.
              </div>
            ) : selectedVisa.path === "/investor-visas/canada" ? (
              <Canadainvestor />
            ) : selectedVisa.path === "/investor-visas/austria" ? (
              <Austriainvest />
            ) : selectedVisa.path === "/investor-visas/uk" ? (
              <UKin />
            ) : selectedVisa.path === "/investor-visas/portugal" ? (
              <Portin />
            ) : selectedVisa.path === "/investor-visas/germany" ? (
              <Germanyinvestor />
            ) : selectedVisa.path === "/investor-visas/usa" ? (
              <Usain />
            ) : selectedVisa.path === "/investor-visas/australia"? (
              <Australiainvest />
            ) : selectedVisa.path === "/investor-visas/uae" ? (
              <Uaeinvest />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Information about <strong>{selectedVisa.name}</strong> will be displayed here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
