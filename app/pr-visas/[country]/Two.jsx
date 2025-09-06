"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Canadapr from "./Canadapages/Canadapr";
import USAstud from "./USA-visa/USA-stud";
import UKBvisa from "./UK-visa/UKBvisa";
import Newzepr from "./Newzealand-visa/Newzepr";
import Link from "next/link";
import Form from "../Form";
import Ausstud from "./Australia-visa/Aus-stud";
import Canadanominal from "./Canadapages/Canadanominal";
import ModalFormWithPopup from "../../Popup/Popup";
import PRVisaContent from "../../Popup/prvisas";

const countryVisaData = {
  "germany-blue-card": [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canada-pr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australia-pr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/uk-pr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germany-blue-card", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usa-green-card", image: "/images/usa.jpg" },
  ],
  "canada-pr": [
    { name: "Canada Express Entry", path: "/pr-visas/canada-pr/canada-express-entry" },
    { name: "National Occupational Codes List ", path: "/pr-visas/canada-pr/national-occupational-codes-list"},
    { name: "Canada Provincial Nominee Program", path: "/pr-visas/canada-pr-provincial-nominee-program" },
    { name: "Canada Quebec Selected Workers Program", path: "/pr-visas/canada-pr/canada-quebec-selected-workers-program" },
    { name: "Canada ICT Program", path: "/pr-visas/canada-pr/canada-ict-program" },
    { name: "Canada FSTP", path: "/pr-visas/canada-pr/canada-fstp" },
    { name: "Canada FSWP", path: "/pr-visas/canada-pr/canada-fswp" },
    { name: "Canada Family Sponsorship", path: "/pr-visas/canada-pr/canada-family-sponsorship" },
    { name: "Canada Investor Program", path: "/pr-visas/canada-pr/canada-investor-program" },
    { name: "Canada Atlantic Immigration Pilot Program", path: "/pr-visas/canada-pr/canada-atlantic-immigration-pilot-program" },
  ],
  "canada-pr-provincial-nominee-program":[
    { name: "Canada Provincial Nominee Program", path: "/pr-visas/canada-pr-provincial-nominee-program" },
    { name: "Canada Prince Edward Island", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-prince-edward-island" },
    { name: "Canada Ontario", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-ontario" },
    { name: "Canada Saskatchewan", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-saskatchewan" },
    { name: "Canada Manitoba", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-manitoba" },
    { name: "Canada Nova Scotia", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-nova-scotia" },
    { name: "Canada Alberta", path: "/pr-visas/canada-pr-provincial-nominee-program/canada-alberta" },
  ],
  "australia-pr": [
    { name: "189 Skilled Independent Visa", path: "/pr-visas/australia-pr/189-skilled-independent-visa" },
    { name: "190 Skilled Nominated Visa", path: "/pr-visas/australia-pr/190-skilled-nominated-visa" },
    { name: "191\tPermanent Residence (Skilled Regional) Visa", path: "/pr-visas/australia-pr/191-permanent-residence-visa" },
    { name: "491\tSkilled Work Regional (Provisional) Visa", path: "/pr-visas/australia-pr/491-skilled-work-regional-visa" },
    { name: "494\tSkilled Employer Sponsored Regional (Provisional) Visa", path: "/pr-visas/australia-pr/494-skilled-employer-sponsered-regional-visa" },
  ],
  "uk-pr": [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canada-pr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australia-pr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/uk-pr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germany-blue-card", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usa-green-card", image: "/images/usa.jpg" },
  ],
  "new-zealand-pr": [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canada-pr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australia-pr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/uk-pr", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germany-blue-card", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usa-green-card", image: "/images/usa.jpg" },
  ],
  "usa-green-card": [
    { name: "Canada Permanent Residency Visa", path: "/pr-visas/canada-pr", image: "/1.jpg" },
    { name: "Australia Permanent Residency Visa", path: "/pr-visas/australia-pr", image: "/airplane.png" },
    { name: "UK Permanent Residency Visa", path: "/pr-visas/uk-r", image: "/dmbusi.jpg" },
    { name: "New Zealand Permanent Residency Visa", path: "/pr-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
    { name: "Germany Blue Card Visa", path: "/pr-visas/germany-blue-card", image: "/images/germany.jpg" },
    { name: "USA Green Card", path: "/pr-visas/usa-green-card", image: "/images/usa.jpg" },
  ],
};

const visaComponents = {
  "germany-blue-card": Goppcardvisa,
  "canada-pr": Canadapr,
  "usa-green-card": USAstud,
  "uk-pr": UKBvisa,
  "new-zealand-pr": Newzepr,
  "australia-pr": Ausstud,
  "canada-pr-provincial-nominee-program": Canadanominal,
};

const backgroundImages = {
  "germany-blue-card": "/germanypr.jpg",
  "canada-pr": "/canada-pr.jpeg",
  "usa-green-card": "/usapr.jpg",
  "australia-pr": "/Australia-PR.jpg",
  "uk-pr": "/dmbusi.jpg",
  "new-zealand-pr": "/nzpr.jpg",
  "canada-pr-provincial-nominee-program": "/canadapr-Provincial-Nominee-Program.jpg",
};

const MigrateCountry = () => {
  const router = useRouter();
  const { country } = useParams();
  const pathname = usePathname();

  const visas = countryVisaData[country] || [];
  const DefaultVisaComponent = visaComponents[country] || null;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div className={`relative bg-cover bg-center bg-black/50 min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`}>
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImages[country]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* FORM first on small, second on lg */}
        <div className="relative z-10 w-full lg:w-1/2 lg:mr-16 lg:mt-14 order-1 lg:order-2">
          <Form />
        </div>

        {/* HERO second on small, first on lg */}
        <div className="relative z-10 w-full lg:w-1/2 lg:ml-16 mt-[-2rem] text-center lg:text-left order-2 lg:order-1">
          <h1
            className="font-semibold uppercase leading-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-20 sm:mt-12"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            {country && typeof country === "string" ? country.charAt(0).toUpperCase() + country.slice(1) : ""}
          </h1>
          <p
            className="flex text-white tracking-tight text-center lg:text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10 items-center lg:items-start">
        {/* DETAILS first on small, second on lg */}
        <div className="w-full lg:flex-1 ml-0 lg:ml-10 overflow-y-auto max-h-[1000px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 order-1 lg:order-2">
          {DefaultVisaComponent ? <DefaultVisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>

        {/* SIDEBAR (Visa options) — last on small, first on lg */}
        <div className="w-full lg:w-[400px] flex-shrink-0 px-4 lg:pl-6 mb-8 lg:mb-0 order-2 lg:order-1">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country && typeof country === "string" ? country.charAt(0).toUpperCase() + country.slice(1) : ""}
          </h2>

          {/* Mobile Apply Now — make it last in the sidebar on small screens */}
          <div className="mt-4 mb-10 flex justify-center lg:hidden order-last lg:order-none">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
            </button>
          </div>

          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <Link href={path} key={path} className="w-full sm:w-[350px] block">
                <div
                  className={`flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 ${
                    pathname === path
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {name}
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* POPUP FORM */}
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<PRVisaContent />} />
    </div>
  );
};

export default MigrateCountry;
