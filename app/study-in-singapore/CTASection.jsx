'use client';

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SingaporeStudyServices() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-12 px-6 sm:px-12 text-black bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-4xl sm:text-4xl font-bold mb-4 animate-fade-in">
            Our SINGAPORE Study Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-800">
            Support that goes beyond applications.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">
          {/* Image */}
          <div className="lg:w-1/3 w-full">
            <Image
              src="/study-in-singapore-full-visa-process.png"
              alt="Counselling"
              width={500}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Bullet Points */}
          <div className="lg:w-2/3 w-full space-y-6 text-black">
            {[
              "Personalized University & Course Counselling: Get tailored advice on top SINGAPORE universities and programs that align with your ambitions.",
              "Complete Application & Visa Guidance: End-to-end support, from preparing documents to securing your SINGAPORE student visa.",
              "Experienced Counsellors: Friendly, qualified experts with deep knowledge of SINGAPORE’s education and visa system.",
              "Proven Success: Numerous successful student placements in prestigious SINGAPORE institutions.",
              "Transparent, Student-Centric Approach: Honest guidance and timely updates throughout the journey."
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <div className="text-orange-500 text-2xl mt-1">
                  <FaCheckCircle />
                </div>
                <p className="text-lg text-black">
                  <span className="font-bold">{text.split(':')[0]}:</span>
                  {text.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl overflow-hidden relative"
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/singapore-student-visa-process.jpg"
              alt="Singapore Visa Process"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Animated Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center p-6 sm:p-10"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              Get Started Today
            </h3>
            <p className="text-white text-1sm max-w-3xl mx-auto mb-6">
              Your dream of studying in Singapore starts now. Partner with VJC Overseas for trusted guidance and smooth visa processing. Book your free consultation today!
            </p>

            <Link href="/assessment">
              <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group">
                <span className="relative z-10">Apply Now</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-blue-400 transition-all duration-500 ease-out group-hover:left-0"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
