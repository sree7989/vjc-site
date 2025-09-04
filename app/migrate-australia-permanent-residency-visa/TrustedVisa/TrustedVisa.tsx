"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useEffect } from "react";

export default function TrustedVisaSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    if (inView) {
      leftControls.start("visible");
      rightControls.start("visible");
    } else {
      leftControls.start("hidden");
      rightControls.start("hidden");
    }
  }, [inView, leftControls, rightControls]);

  return (
    <section
      ref={ref}
      className="relative bg-white py-20 px-6 md:pl-20 md:px-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/assets/auspr/trustedbg.png"
            alt="Earth Background"
            fill
            className="object-left-top object-contain"
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate={leftControls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
        

          {/* Inserted New Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-orange-600">
              Dreaming of a new life Down Under?
            </h3>
            <p className="text-gray-600">
              Australia’s Permanent Residence (PR) visa offers a pathway to long-term
              settlement, work rights, and eventually, Australian citizenship. Whether
              you're a skilled professional, a business investor, or looking to reunite
              with family, PR opens the door to a future full of opportunity.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-orange-600">
              What is an Australian PR Visa?
            </h3>
            <p className="text-gray-600">
              An Australian Permanent Residence visa allows non-citizens to live, work,
              and study in Australia indefinitely. As a PR holder, you enjoy many of the
              rights and benefits of citizens, including access to healthcare (Medicare),
              education, and the ability to sponsor eligible family members.
            </p>
          </div>

          {/* Highlights */}
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

          {/* CTA Button */}
          <Link
            href="/pr-visas/australiapr"
            className="relative overflow-hidden inline-block px-6 py-3 mt-6 rounded-md font-semibold text-white bg-orange-500 group"
          >
            <span className="relative z-10">Explore Australia PR</span>
            <span className="absolute inset-0 bg-sky-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center md:justify-start w-full h-full"
          initial="hidden"
          animate={rightControls}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
            },
          }}
        >
          <div className="relative w-full max-w-[550px] h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/assets/canadapr/trustedfamily.png"
              alt="Happy PR Clients"
              fill
              className="object-cover z-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
