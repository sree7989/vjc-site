'use client';
import React from 'react';
import Image from 'next/image';

const FijiTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Fiji Island Tourist Visa Process with Affordable Tour Packages – Explore Fiji with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Fiji Islands, known for their crystal-clear waters, vibrant coral reefs, and warm hospitality, offer a breathtaking escape for travelers seeking tropical beauty and adventure. Whether you dream of lounging on pristine beaches, exploring underwater wonders, or immersing yourself in the rich local culture, Fiji promises an unforgettable experience. Planning your trip? <span className="text-orange-500">VJC Overseas</span> is your trusted partner for navigating the Fiji tourist visa process and providing affordable and customized tourist packages that fit your budget and preferences.
          </p>
          <p className="mt-0">
            As a leading immigration consultancy, we make your visa application and travel planning hassle-free, ensuring a smooth journey to this Pacific paradise.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/Nadi-Fiji.webp"
            alt="Fiji Island Tour by VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is the Fiji Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        For Indian nationals and many other countries, Fiji offers a visa-free entry or visa-on-arrival facility for short stays, primarily for tourism purposes. Typically, tourists can stay up to 4 months without a visa, but certain conditions must be met for entry. Understanding these requirements and preparing your documents correctly is crucial to a smooth trip.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we provide expert advice on eligibility, entry conditions, and help you prepare all necessary paperwork for a seamless travel experience.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Fiji Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>A valid passport with at least six months validity from the date of entry</li>
        <li>Proof of onward or return travel tickets</li>
        <li>Confirmed accommodation bookings for your stay</li>
        <li>Sufficient funds to support your visit</li>
        <li>Completed arrival and health declaration forms if applicable</li>
        <li>Compliance with any health or travel advisories, including COVID-19 protocols</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our experienced team at <span className="text-orange-500">VJC Overseas</span> ensures you meet all these requirements and provides detailed guidance to avoid any travel disruptions.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">How VJC Overseas Simplifies Your Fiji Tourist Visa and Travel Process</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Comprehensive consultation to assess your eligibility and travel plans</li>
        <li>Guidance on document preparation and submission</li>
        <li>Assistance with booking flights, accommodation, and airport transfers</li>
        <li>Travel insurance and forex exchange support</li>
        <li>Real-time updates on travel advisories and entry protocols</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our goal is to make your Fiji tourist visa experience smooth, stress-free, and fully supported from start to finish.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Fiji Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Besides visa assistance, <span className="text-orange-500">VJC Overseas</span> offers cost-effective and customizable Fiji tour packages designed to showcase the islands’ best attractions without exceeding your budget.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Flight reservations and convenient airport transfers</li>
        <li>Accommodation options from budget stays to luxury resorts</li>
        <li>Guided tours to popular destinations such as the Mamanuca and Yasawa Islands</li>
        <li>Activities like snorkeling, diving, island hopping, cultural village visits, and hiking</li>
        <li>Personalized itineraries tailored to your interests and budget</li>
        <li>Visa assistance and travel insurance bundled for your convenience</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you seek a romantic getaway, a family holiday, or a solo adventure, our Fiji packages cater to all travel styles.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Trusted immigration consultancy with proven expertise</li>
        <li>End-to-end support from visa application to trip planning</li>
        <li>Transparent and competitive pricing with no hidden fees</li>
        <li>Customized travel solutions for all types of travelers</li>
        <li>Dedicated customer service for smooth, worry-free travel</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Start Your Fiji Island Adventure Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, the Fiji tourist visa process is straightforward, and your travel plans are professionally managed. Contact us today to start your visa application and explore our affordable Fiji tourist packages tailored just for you.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Reach out now and make your dream Fiji holiday a reality!
      </p>
    </div>
  );
};

export default FijiTour;
