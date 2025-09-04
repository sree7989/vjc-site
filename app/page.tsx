"use client";

import React, { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import Desc from "@/app/components/Scroll/components/Description";
import NewSteps from "@/app/components/NewSteps";
import ServicesDec from "@/app/components/ServicesDec";
import Popupform from "@/app/components/Popupform";
import Awardsection from "@/app/components/Awardsection";

// Dynamic Imports (only for heavy/rarely used components)
const Scroll = dynamic(() => import('@/app/components/Scroll/index'), { ssr: false });
const CTA = dynamic(() => import('@/app/components/CTA'), { ssr: false });
const Parallex = dynamic(() => import('@/app/components/Parallex/parallex'), { ssr: false });

// Utility function for scroll-to-top
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Loading indicator component
function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      {/* Critical Content */}
      <Hero />

      <Suspense fallback={<LoadingIndicator />}>
        <Desc />
        <Awardsection />
        <ServicesDec />
        <Scroll />
        <NewSteps />
        <CTA />
        <Parallex />
      </Suspense>
    </>
  );
}