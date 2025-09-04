'use client';
import React from 'react';
import Image from 'next/image';

const JapanTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      {/* Title */}
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Japan Tourist Visa Process with Affordable Tour Packages – Discover Japan with 
        <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Intro + Image */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Japan, the Land of the Rising Sun, is where timeless traditions meet futuristic innovation. 
            From the serene temples of Kyoto and vibrant streets of Tokyo to cherry blossoms, Mount Fuji, 
            and advanced bullet trains, Japan offers an unforgettable journey of culture and modernity. 
            Whether you are a history lover, foodie, anime enthusiast, or adventure seeker, Japan has 
            something for everyone.
          </p>
          <p className="mt-0">
            Planning your dream trip? <span className="text-orange-500">VJC Overseas</span> 
            is here to simplify your Japan tourist visa process and provide affordable and customizable 
            Japan tour packages designed for Indian travelers.
          </p>
        </div>
        <div className="md:w-1/2 rounded-lg overflow-hidden relative h-[280px] w-full">
  <Image
    src="/japan-tour.jpg"
    alt="Japan Tour by VJC Overseas"
    fill
    className="object-cover rounded-lg"
    priority
    unoptimized
  />
</div>

      </div>

      {/* Visa Info */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is the Japan Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        A Japan Tourist Visa is a short-term visa that allows travelers to visit Japan for leisure, sightseeing, 
        family visits, and cultural exploration. Indian citizens require a tourist visa before departure, 
        typically valid for stays up to 90 days. With the right documentation, the process is simple and efficient.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we provide step-by-step guidance to ensure your 
        Japan visa application is accurate, complete, and approved quickly.
      </p>

      {/* Requirements */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Japan Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Valid passport with at least 6 months validity</li>
        <li>Completed Japan visa application form</li>
        <li>Recent passport-sized photographs</li>
        <li>Confirmed flight tickets (round trip)</li>
        <li>Proof of accommodation (hotel booking or invitation letter)</li>
        <li>Bank statements and proof of sufficient funds</li>
        <li>Travel itinerary (day-wise plan)</li>
        <li>Travel insurance (recommended)</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        With our expertise, <span className="text-orange-500">VJC Overseas</span> ensures you are 
        fully prepared with all required documents, increasing your chances of quick visa approval.
      </p>

      {/* Simplification */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">
        How VJC Overseas Simplifies Your Japan Visa and Travel Process
      </h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>One-on-one consultation to explain visa rules</li>
        <li>Assistance with application form filling and document preparation</li>
        <li>Personalized Japan travel itineraries (Tokyo, Kyoto, Osaka, Hiroshima & more)</li>
        <li>Support with hotel bookings, JR Pass, and local transport</li>
        <li>Travel insurance & forex guidance</li>
        <li>Regular updates on Japan travel advisories and embassy requirements</li>
      </ul>

      {/* Packages */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Japan Tour Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        In addition to visa guidance, <span className="text-orange-500">VJC Overseas</span> offers 
        budget-friendly and luxury Japan tour packages that include cultural highlights, 
        modern experiences, and unforgettable memories.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Tokyo city tours – Shibuya, Shinjuku, Akihabara, and Tokyo Skytree</li>
        <li>Kyoto cultural tours – Temples, Geisha district, and tea ceremonies</li>
        <li>Mount Fuji and Hakone day trips</li>
        <li>Osaka nightlife and Universal Studios packages</li>
        <li>Cherry blossom (Sakura) & autumn foliage seasonal trips</li>
        <li>Anime & technology experiences (Ghibli Museum, Akihabara, TeamLab)</li>
      </ul>

      {/* Why VJC */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Trusted immigration consultancy with years of experience</li>
        <li>Complete support – from visa filing to travel planning</li>
        <li>Tailored packages for solo, family, or group travel</li>
        <li>Transparent pricing without hidden charges</li>
        <li>Dedicated team ensuring smooth communication with embassies</li>
      </ul>

      {/* Call to Action */}
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Begin Your Japan Journey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, your Japan tourist visa and 
        travel planning are stress-free. Contact us today to begin your application and discover 
        our curated Japan tour packages designed to suit every traveler’s dream.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Start your Japan adventure now – let <span className="text-orange-500">VJC Overseas</span> 
        turn your travel dreams into reality!
      </p>
    </div>
  );
};

export default JapanTour;
