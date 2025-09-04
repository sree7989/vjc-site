"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TrustedVisaSectionProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TrustedVisaSection({ setIsOpen }: TrustedVisaSectionProps) {
  return (
    <section className="relative bg-white py- px-6 md:pl-20 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/assets/canadapr/trustedbg.png"
            alt="canada pr explore"
            fill
            className="object-left-top object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sky-800 font-semibold uppercase tracking-widest">
            Why Choose VJC Overseas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Trusted Canada PR & Immigration Experts
          </h2>
          <p className="text-gray-600">
            VJC Overseas offers expert guidance for Canada Permanent Residency.
            From eligibility checks to documentation, our experienced team
            ensures a smooth and successful application process for Federal
            Express Entry, PNP, and other PR pathways.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-3xl">🛂</span>
              <div>
                <h4 className="font-semibold text-gray-800">
                  PR Eligibility Check
                </h4>
                <p className="text-sm text-gray-500">
                  Get assessed by professionals before you apply.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-500 text-3xl">🎯</span>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Tailored Guidance
                </h4>
                <p className="text-sm text-gray-500">
                  We build a personalized roadmap to PR success.
                </p>
              </div>
            </div>
          </div>

          {/* Button opens popup */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative overflow-hidden inline-block px-6 py-3 mt-6 rounded-md font-semibold text-white bg-orange-500 group"
          >
            <span className="relative z-10">Explore Canada PR</span>
            <span className="absolute inset-0 bg-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center md:justify-start w-full h-full"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="relative w-full max-w-[550px] h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/canadapr/trustedfamily.png"
              alt="Happy PR Clients"
              fill
              className="object-cover z-30"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
