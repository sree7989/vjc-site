"use client";

import React from "react";
import Image from "next/image";

const Germany = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Germany Blue Card Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/germany-blue-card.jpg"
            alt="germany blue card Guidance by - VJC Overseas"
            width={700}
            height={400}
            className="w-full object-cover "
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify">
          <p className="mb-4 mt-4" style={{ wordSpacing: '0.35em' }}>
  Germany, a global leader in innovation, technology, and culture, attracts skilled professionals from around the world. The <strong>Germany Blue Card</strong> is a special residence permit designed for highly qualified workers who wish to live and work in Germany. If you are looking to advance your career, experience rich cultural heritage, and enjoy an excellent quality of life — this visa is your gateway. For guidance, consult the <a href="https://www.vjcoverseas.com" className="text-orange-500 font-semibold">Best Visa Immigration Consultants</a>.
</p>



        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 mt-4">What is the Germany Blue Card Visa?</h3>
      <p>
        The Germany Blue Card is a work and residence permit for highly skilled non-EU nationals. It’s tailored for professionals in engineering, IT, healthcare, research, and more. It also provides benefits like family reunification and a path to permanent residency in as little as 21–33 months. For applicants seeking guidance, <strong>Best Visa Immigration Consultants</strong> assist in navigating every step smoothly.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Key Benefits of the Germany Blue Card</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Work and Live in Germany:</strong> Enjoy high standards of living, infrastructure, and opportunities. <a href="https://www.vjcoverseas.com/work-abroad" className="text-orange-500 font-semibold">Work Abroad Opportunities</a></li>
        <li><strong>Family Reunification:</strong> Your spouse and children can join you under Blue Card provisions.</li>
        <li><strong>Pathway to Permanent Residency:</strong> Apply after 33 months, or just 21 months with German proficiency. <a href="https://www.vjcoverseas.com/pr-visas/germany-blue-card" className="text-orange-500 font-semibold">EU Blue Card Permanent Residency</a></li>
        <li><strong>Career Opportunities:</strong> Especially strong in engineering, IT, healthcare, and research fields.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Eligibility Criteria</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Job Offer:</strong> A valid job offer or contract relevant to your qualifications. <strong>Germany Skilled Worker Visa</strong></li>
        <li><strong>Higher Education Qualification:</strong> Recognized university degree or equivalent qualification.</li>
        <li><strong>Salary Requirement:</strong> Minimum salary is approx €56,400/year, or €43,992/year for shortage occupations (e.g., IT, engineering, healthcare).</li>
        <li><strong>Health Insurance:</strong> Proof of valid health insurance is mandatory.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Processing Time</h3>
      <p>
        Processing usually takes <strong>4 to 12 weeks</strong>, depending on application volume and personal circumstances. Apply early to avoid delays.
      </p>

      <h3 className="text-xl font-semibold mb-2 mt-4">Germany Blue Card Visa Fees</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Initial Application:</strong> Approx €100</li>
        <li><strong>Visa Extension:</strong> Typically around €100</li>
        <li><strong>Family Reunification:</strong> €75 to €100 per family member. Consult <a href="https://www.vjcoverseas.com/pr-visas" className="text-orange-500 font-semibold">PR Visa Consultants</a> for support.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Living Expenses in Germany</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Rent:</strong> €800–€1,500/month in major cities, lower in smaller towns</li>
        <li><strong>Utilities:</strong> €150–€250/month</li>
        <li><strong>Groceries:</strong> €200–€300/month</li>
        <li><strong>Transport:</strong> €70–€100/month (public transport)</li>
        <li><strong>Health Insurance:</strong> €100–€800/month depending on coverage</li>
        <li><strong>Miscellaneous:</strong> €200–€300/month (entertainment, dining, etc.)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">Lifestyle in Germany</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Work-Life Balance:</strong> Generous vacation days and strong employee rights</li>
        <li><strong>Education & Healthcare:</strong> High-quality and mostly free public services</li>
        <li><strong>Social Security:</strong> Access to pension, unemployment insurance, and more</li>
        <li><strong>Culture & Recreation:</strong> Museums, festivals, outdoor adventures, and more</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2 mt-4">
        How <span className="text-orange-600 font-semibold">VJC Overseas</span> Can Help
      </h3>
     <p>
  With years of experience and a team of experts, <a href="https://www.vjcoverseas.com" className="text-orange-600 font-semibold">VJC Overseas</a> simplifies your Germany Blue Card application. From document checks to submission and follow-ups, we offer end-to-end support.
</p>

    </div>
  );
};

export default Germany;