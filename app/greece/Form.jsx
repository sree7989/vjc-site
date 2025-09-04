"use client"

import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [country, setCountry] = useState('');  // New state for Country
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [landingPage, setLandingPage] = useState('');
  // Capture current page URL
    useEffect(() => {
      if (typeof window !== 'undefined') {
        setLandingPage(window.location.href);
      }
    }, []);
  // Close the success popup after 4 seconds
  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        setPopupVisible(false);
      }, 4000);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [popupVisible]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true when form is being submitted

    const formData = {
      name,
      email,
      phone,
      age,
      experience,
      qualification,
      country,  // Include country in formData
      message,
      landingPage,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setName('');
        setEmail('');
        setPhone('');
        setAge('');
        setExperience('');
        setQualification('');
        setCountry('');  // Clear country
        setMessage('');
        setPopupVisible(true); // Show success popup
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setFormStatus('error');
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-gray-800 p-4 py-2 rounded-lg shadow-sm shadow-orange-300 mb-6 lg:mb-2 
        w-full max-w-4xl lg:w-[100%] xl:w-[37rem] h-auto mx-auto">
        <h2 className="text-2xl font-bold text-center uppercase text-white mt-0 lg:mt-3">
          Sign up & Get Free Assessment
        </h2>
  
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-3 mt-2 lg:mt-2">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full h-12 px-4 py-1 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full h-12 px-4 py-1 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="w-full h-12 px-4 py-1 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              pattern="\d*"
              title="Please enter a valid phone number"
              maxLength={10}
              minLength={10}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="country" className="sr-only">Your Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              className="w-full h-12 px-4 py-1 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="age" className="sr-only">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Your Age"
              className="w-full h-12 px-4 py-1 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="experience" className="sr-only">Experience</label>
            <select
              id="experience"
              name="experience"
              className="w-full h-12 px-4 py-1 border bg-gray-700 text-white border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select Experience</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-7 years">5-7 years</option>
              <option value="7+ years">7+ years</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="qualification" className="sr-only">Qualification</label>
            <select
              id="qualification"
              name="qualification"
              className="w-full h-12 px-4 py-1 border bg-gray-700 text-white border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option value="">Select your qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
              <option value="Master's Degree">Master&apos;s Degree</option>
              <option value="Ph.D.">Ph.D.</option>
              <option value="Diploma">Diploma</option>
            </select>
          </div>
  
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows="2"
              placeholder="Your Message"
              className="w-full h-20 px-4 py-2 border bg-gray-700 border-gray-700 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="w-full h-12 bg-orange-600 text-white py-2 rounded-lg font-semibold 
              hover:bg-saffron transition-all duration-200 shadow-lg"
            disabled={loading}
          >
            {formStatus === 'success' ? 'Form Submitted!' : loading ? 'Submitting...' : 'Submit for Free Assessment'}
          </button>
        </form>
  
        {popupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
              <p className="text-xl font-semibold">Submission received, we’ll get back to you shortly!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default Form;
