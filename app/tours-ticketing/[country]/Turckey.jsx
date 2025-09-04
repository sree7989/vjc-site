'use client';
import React from 'react';
import Image from 'next/image';

const TurkeyTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Turkey Tourist Visa Process with Affordable Tour Packages – Explore Turkey with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-4">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Turkey is a mesmerizing blend of ancient history, vibrant culture, and stunning landscapes that captivate travelers worldwide. From the bustling bazaars of Istanbul to the fairy chimneys of Cappadocia, the pristine beaches of Antalya, and the historic ruins of Ephesus, Turkey offers a rich travel experience. If you’re planning your Turkish adventure, <span className="text-orange-500">VJC Overseas</span> is here to assist you with the Turkey tourist visa process and provide affordable, tailor-made tourist packages to make your journey seamless and memorable.
          </p>
          
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/Cappadocia-Turkey-.jpg"
            alt="Explore Turkey - Travel with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>
      <p className="mb-3 ">
            As a trusted immigration consultancy, we ensure hassle-free visa approvals and travel arrangements so you can focus on exploring this beautiful country.
          </p>
      <h2 className="text-xl font-bold mb-3 text-[#00843D]">What is a Turkey Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        To visit Turkey for tourism, Indian citizens need a Turkey Tourist Visa or e-Visa depending on their eligibility. The e-Visa is an electronic travel authorization that allows tourists to stay up to 90 days within a 180-day period.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we guide you through the entire visa process, whether you qualify for the quick and easy e-Visa or need to apply for a traditional sticker visa.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Turkey Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Valid passport with at least 6 months validity beyond the travel dates</li>
        <li>Completed visa application form (online or physical form)</li>
        <li>Recent passport-sized photographs meeting specifications</li>
        <li>Confirmed round-trip flight tickets</li>
        <li>Proof of accommodation (hotel bookings or invitation letter)</li>
        <li>Detailed travel itinerary</li>
        <li>Proof of financial means (bank statements, salary slips)</li>
        <li>Travel insurance covering the duration of stay</li>
        <li>Additional documents as per individual profile (employment proof, etc.)</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our visa experts at <span className="text-orange-500">VJC Overseas</span> assist you in preparing and submitting a complete and accurate application to minimize delays and maximize approval chances.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Step-by-Step Visa Assistance from VJC Overseas</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Free Initial Consultation to assess visa eligibility</li>
        <li>Personalized Documentation Guidance tailored to your profile</li>
        <li>Accurate Visa Application Filling & Submission</li>
        <li>Appointment Booking and Follow-up</li>
        <li>Travel Insurance & Currency Exchange Support</li>
        <li>Real-Time Application Tracking and Updates</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our comprehensive visa assistance service simplifies the process and ensures you get your visa on time.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Affordable Turkey Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Beyond visa assistance, <span className="text-orange-500">VJC Overseas</span> offers competitive and fully customizable Turkey travel packages suitable for families, honeymooners, solo travelers, and groups.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>International and domestic flight bookings</li>
        <li>Comfortable hotel accommodations (3-star to luxury options)</li>
        <li>Guided city tours of Istanbul, Cappadocia, Pamukkale, Antalya, and more</li>
        <li>Unique experiences like hot air balloon rides, Bosphorus cruises, and traditional Turkish baths</li>
        <li>Transportation and transfers within Turkey</li>
        <li>Detailed daily itineraries for sightseeing and cultural immersion</li>
        <li>Travel insurance and visa handling included</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        We design packages that fit your budget without compromising the quality of your Turkey experience.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Expert and personalized visa consultation</li>
        <li>High visa approval success rate</li>
        <li>Affordable and customizable travel packages</li>
        <li>Transparent pricing with no hidden fees</li>
        <li>Dedicated support from visa application to trip completion</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Start Your Turkish Adventure Now</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, the Turkey tourist visa process becomes effortless, and your trip becomes unforgettable. Let us help you explore the rich heritage and breathtaking beauty of Turkey with affordable packages designed just for you.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Contact us today to begin your visa application and get exclusive offers on Turkey tour packages!
      </p>
    </div>
  );
};

export default TurkeyTour;
