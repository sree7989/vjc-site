'use client';
import React from 'react';
import Image from 'next/image';

const MaldivesTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Maldives Tourist Visa Process with Affordable Tour Packages – Discover Maldives with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            The Maldives, a tropical paradise famous for its turquoise waters, white sandy beaches, and luxurious overwater villas, is the ultimate dream destination for travelers worldwide. Whether you want to unwind in serene surroundings, indulge in water sports, or explore vibrant coral reefs, the Maldives offers an unmatched experience. Planning your trip? <span className="text-orange-500">VJC Overseas</span> is here to assist you with the Maldives tourist visa process and offer affordable and customizable tourist packages tailored to your budget and preferences.
          </p>
          <p className="mt-0">
            As a trusted immigration consultancy, we streamline your visa application and travel planning, making your Maldives vacation seamless and unforgettable.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/maldives-best-places.jpg"
            alt="Maldives Tour by VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is the Maldives Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        The Maldives offers a free tourist visa on arrival for visitors from most countries, including Indian nationals. This visa is typically valid for 30 days and can be extended up to 90 days. While the visa process is straightforward, certain requirements must be fulfilled at entry to ensure a smooth arrival.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we provide expert guidance on visa policies, documentation, and travel preparations to make your Maldives trip hassle-free.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Maldives Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>A valid passport with at least six months validity from the date of arrival</li>
        <li>Confirmed return or onward flight tickets</li>
        <li>Proof of confirmed accommodation in the Maldives</li>
        <li>Sufficient funds to cover your stay</li>
        <li>Completed health declaration form if applicable</li>
        <li>Compliance with COVID-19 protocols or other government advisories</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our team at <span className="text-orange-500">VJC Overseas</span> helps you prepare all necessary documents and ensure compliance with Maldives immigration rules, making your arrival smooth and stress-free.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">How VJC Overseas Simplifies Your Maldives Visa and Travel Process</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Comprehensive consultation to explain visa rules and travel options</li>
        <li>Support with documentation and travel itinerary planning</li>
        <li>Booking assistance for flights, accommodation, and transfers</li>
        <li>Travel insurance guidance and forex exchange assistance</li>
        <li>Real-time updates on travel advisories and health protocols</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        With our end-to-end support, your Maldives tourist visa experience becomes effortless.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Maldives Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        In addition to visa assistance, <span className="text-orange-500">VJC Overseas</span> offers affordable and customizable Maldives tour packages designed to showcase the best of this island paradise without straining your budget.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Flight bookings and airport transfers</li>
        <li>Accommodation options ranging from budget guesthouses to luxury resorts</li>
        <li>Guided tours including island hopping, snorkeling, scuba diving, and sunset cruises</li>
        <li>Romantic packages, honeymoon specials, and family-friendly itineraries</li>
        <li>Personalized day-wise travel plans tailored to your preferences</li>
        <li>Visa and travel insurance support included</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you want a budget escape or a luxury retreat, our packages are crafted to meet your needs.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Experienced and reliable immigration consultancy</li>
        <li>Complete travel solutions from visa to vacation planning</li>
        <li>Transparent pricing with no hidden fees</li>
        <li>Tailored packages for solo travelers, couples, and families</li>
        <li>Dedicated customer support for a smooth travel journey</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Begin Your Maldives Adventure Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, the Maldives tourist visa process is simple, and your travel plans are expertly handled. Contact us now to start your visa preparations and explore our affordable Maldives tour packages designed just for you.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Get in touch today and turn your Maldives dream holiday into reality!
      </p>
    </div>
  );
};

export default MaldivesTour;
