'use client';

import { useState } from 'react';
import JobCard from './components/JobCard';
import Main from './main';
const availableJobs = [
  {
    id: 1,
    title: "Student Counselor",
    type: "Full-time",
    location: "Bangalore",
    description: "Provide guidance to students for overseas education opportunities",
    skills: ["Counseling", "Education", "Communication"],
    salary: "₹35,000 - ₹45,000",
    details: [
      "Guide students for overseas education",
      "Provide university selection advice",
      "Assist with application process",
      "Support visa documentation",
      "Follow up with students post-application",
      "Strong communication required",
      "Target-driven approach expected"
    ]
  },
  {
    id: 2,
    title: "Immigration Counselor",
    type: "Full-time",
    location: "Bangalore",
    description: "Assist clients with visa and immigration processes",
    skills: ["Visa Processing", "Documentation", "Legal Knowledge"],
    salary: "₹40,000 - ₹50,000",
    details: [
      "Consultation for visa options",
      "Document verification and processing",
      "Stay updated with immigration rules",
      "Communicate with embassies",
      "CRM usage for tracking applications",
      "Coordinate with legal team",
      "Client handling with professionalism"
    ]
  },
  {
    id: 3,
    title: "Branch Manager",
    type: "Full-time",
    location: "Bangalore",
    description: "Oversee operations of our Bangalore branch",
    skills: ["Management", "Leadership", "Sales"],
    salary: "₹60,000 - ₹75,000",
    details: [
      "Lead and manage the branch team",
      "Achieve monthly sales targets",
      "Conduct performance reviews",
      "Ensure smooth operations",
      "Client relationship management",
      "Implement new strategies",
      "Coordinate with HO and regional teams"
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Executive (Freshers)",
    type: "Full-time",
    location: "Bangalore / Hyderabad",
    description: "Assist in managing social media, SEO, and online campaigns",
    skills: ["SEO", "Social Media", "Analytics", "Email Marketing"],
    salary: "₹20,000 - ₹25,000",
    details: [
      "Execute marketing tasks under guidance",
      "Basic SEO & ad optimization tasks",
      "Email campaign support",
      "Create and post social media content",
      "Monitor campaign metrics",
      "Reporting using basic analytics tools",
      "Freshers welcome, training provided"
    ]
  },
  {
    id: 5,
    title: "Sales Executive",
    type: "Full-time",
    location: "Bangalore / Hyderabad",
    description: "Promote and sell services related to study abroad consulting",
    skills: ["Sales", "CRM", "Target Achievement", "Client Handling"],
    salary: "₹30,000 - ₹40,000",
    details: [
      "Generate interest through calls and meetings",
      "Follow up on warm leads",
      "Achieve monthly sales targets",
      "Coordinate with counseling team",
      "Ensure top-notch customer service",
      "Prepare basic reports",
      "Prior sales experience is a plus"
    ]
  },
  {
    id: 6,
    title: "Immigration Sales Counselor",
    type: "Full-time",
    location: "Bangalore / Hyderabad",
    description: "Drive sales for immigration services through lead conversion and client follow-ups",
    skills: ["Sales", "Immigration Knowledge", "Lead Conversion", "CRM"],
    salary: "₹35,000 - ₹50,000",
    details: [
      "Convert incoming leads into sales",
      "Follow up on inquiries via calls and emails",
      "Provide accurate immigration service details",
      "Maintain records in CRM",
      "Achieve and exceed sales targets",
      "Coordinate with immigration team",
      "Report daily activities to manager"
    ]
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const filteredJobs = availableJobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const locationMatch = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
    return titleMatch && locationMatch;
  });

  return (
    <div className="min-h-screen mt-12 bg-gray-50">
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4"
        style={{ backgroundImage: "url('/hiring.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-6xl mx-auto text-center text-white z-10 px-2">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Career Opportunity</h1>
          <p className="text-lg md:text-2xl mb-8">Explore exciting roles and grow with us</p>
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-4 bg-white/80 p-4 md:p-6 rounded-xl shadow-md max-w-4xl mx-auto">
              <input
                type="text"
                placeholder="Job title or keyword"
                className="w-full md:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="w-full md:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-black"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="USA">USA</option>
              </select>
              <button
                className="w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-orange-500"
                onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
              >
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Current Openings</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {availableJobs.map(job => (
              <span key={job.id} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                {job.title}
              </span>
            ))}
          </div>
        </div>

        {filteredJobs.length > 0 ? (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
  {filteredJobs.map((job) => (
    <div key={job.id} className="w-full flex justify-center">
      <div className="w-[360px]">
        <JobCard job={job} />
      </div>
    </div>
  ))}
</div>

) : (

          <div className="text-center text-gray-500 py-20">
            <h3 className="text-xl font-semibold mb-2">😔 No jobs found</h3>
            <p>Try a different keyword or location.</p>
          </div>
        )}
      </div>
      <div className="pt-24 sm:pt-24 md:pt-12 lg:pt-12 xl:pt-12">
      <Main />
    </div>
    </div>
  );
}
