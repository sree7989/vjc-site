"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function MigrationPage() {
 
  return (
    <div className=" md:p-6 min-h-screen">
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-2xl font-bold text-center text-black">
          Migrate with Confidence: Your Journey Starts Here with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          At VJC Overseas, we understand that migration is more than just a
          relocation – it’s a life-changing decision that requires careful
          planning, expert advice, and seamless execution. Whether you’re
          seeking new opportunities for study, work, or a better quality of life
          in a new country, we are here to guide you every step of the way.
        </p>

        <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
          <Image
            src="/migrate/migrate.png"
            alt="Migrate - Apply Now"
            width={900}
            height={630}
            className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
            priority
            unoptimized
          />
        </div>

        <h2 className="text-xl font-semibold mt-6">
          Why Migrate with VJC Overseas?
        </h2>
        <p className="text-gray-700 mt-2">
          With years of expertise in immigration services, we have built a
          reputation for making the migration process as smooth and efficient as
          possible. We provide personalized solutions, keeping your individual
          goals and aspirations in mind. Our team of certified migration
          consultants is dedicated to providing accurate, up-to-date information
          and supporting you in achieving your dreams of a successful new life
          abroad.
        </p>

        <h2 className="text-xl font-semibold mt-6">Our Services Include:</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>
            <strong>Student Visa Assistance:</strong> We help you navigate the
            complex student visa process, ensuring you have everything you need
            to study at top universities around the world.
          </li>
          <li>
            <strong>Work Visa Support:</strong> Whether you’re looking for job
            opportunities or need a work visa to move abroad, we help you
            understand your options and guide you through the paperwork.
          </li>
          <li>
            <strong>Permanent Residency Applications:</strong> If you’re ready
            to make your move permanent, our experts will assist with securing a
            permanent residency visa tailored to your qualifications and future
            plans.
          </li>
          <li>
            <strong>Family Sponsorship:</strong> Reuniting with loved ones is a
            priority for many. We can help you navigate the family sponsorship
            process to bring your family members to join you in your new home.
          </li>
          <li>
            <strong>Citizenship Solutions:</strong> For those aiming for
            citizenship in their new country, we provide guidance on the
            eligibility requirements and help you prepare your application.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          Countries We Specialize In:
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>
            <Link
              href="/migrate/australia"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              Australia
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/canada"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              Canada
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/new-zealand"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              New Zealand
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/united-states"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              United States
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/united-kingdom"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              United Kingdom
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/germany"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              Germany
            </Link>
          </li>
          <li>
            <Link
              href="/migrate/uae"
              className="text-blue-600 underline hover:text-orange-500 transition underline-offset-2"
            >
              UAE
            </Link>
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">
          The VJC Overseas Process:
        </h2>
        <ol className="list-decimal list-inside text-gray-700 mt-2 space-y-2">
          <li>
            Initial Consultation: We start by understanding your migration
            goals, whether it’s studying, working, or reuniting with family.
          </li>
          <li>
            Personalized Advice: Based on your needs, we provide customized
            advice and a clear roadmap to achieve your migration objectives.
          </li>
          <li>
            Document Preparation & Submission: We assist in preparing all the
            required documents, ensuring they meet the requirements of
            immigration authorities.
          </li>
          <li>
            Application Management: From submitting your application to
            communicating with the relevant authorities, we take care of
            everything for you.
          </li>
          <li>
            Post-Approval Support: Once your visa is approved, we help with the
            next steps, such as relocation assistance, settling-in services, and
            even helping you understand local laws and culture.
          </li>
        </ol>

        <h2 className="text-xl font-semibold mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
          <li>
            <strong>Expert Guidance:</strong> Our team consists of certified
            immigration consultants with years of experience helping clients
            navigate the complexities of international immigration laws.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> We believe in a personalized
            approach, ensuring that every step of your migration journey is
            aligned with your specific needs and goals.
          </li>
          <li>
            <strong>Success Rate:</strong> We have a proven track record of
            successful migration cases, with hundreds of satisfied clients who
            have made their dreams of moving abroad a reality.
          </li>
          <li>
            <strong>Comprehensive Support:</strong> We offer not just visa
            services but a full suite of support, from job search assistance to
            housing guidance, ensuring your transition is as smooth as possible.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-center">
          Start Your Migration Journey Today
        </h2>
        <p className="text-gray-700 mt-2 text-center">
          At VJC Overseas, we’re committed to helping you achieve your migration
          dreams. Contact us today to schedule a consultation and take the first
          step toward a brighter future abroad.
        </p>
      </div>
     
    </div>
    
  );
}