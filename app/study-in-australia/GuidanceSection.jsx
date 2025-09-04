"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import {
  FaGlobeAmericas,
  FaUniversity,
  FaChalkboardTeacher,
  FaHandshake,
} from "react-icons/fa";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GlobalExposureAustralia() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const slides = [
    {
      icon: <FaGlobeAmericas size={40} className="text-blue-400" />,
      title: "Globally Respected Degrees",
      text: "Australian universities offer internationally recognized degrees, giving students a strong edge in the global job market.",
      imgSrc: "/studyindubai/global1.jpg",
    },
    {
      icon: <FaUniversity size={40} className="text-orange-500" />,
      title: "Top Ranked Universities",
      text: "Home to several universities in the QS World Rankings, Australia is a destination for academic excellence and research.",
      imgSrc: "/studyindubai/global2.jpeg",
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-green-400" />,
      title: "Innovative Learning",
      text: "Australia’s education system emphasizes critical thinking, creativity, and industry-ready skills tailored to real-world demands.",
      imgSrc: "/studyindubai/global3.jpg",
    },
    {
      icon: <FaHandshake size={40} className="text-red-500" />,
      title: "Post-Study Work Opportunities",
      text: "Australia offers generous post-study work visas and a strong job market in IT, healthcare, engineering, and more.",
      imgSrc: "/Australia-s-General-Skilled-Migration-Program.webp",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: true,
    cssEase: "ease-in-out",
    beforeChange: () => AOS.refresh(),
    prevArrow: (
      <div className="custom-prev-arrow text-3xl text-orange-500 cursor-pointer absolute z-30 left-[-35px] top-[45%] hover:scale-110 transition duration-300">
        <BsArrowLeftCircleFill />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow text-3xl text-orange-500 cursor-pointer absolute z-30 right-[-35px] top-[45%] hover:scale-110 transition duration-300">
        <BsArrowRightCircleFill />
      </div>
    ),
  };

  return (
    <section
      className="relative h-auto md:h-[75vh] w-full bg-cover bg-center bg-no-repeat px-4 pt-8 md:pt-4 pb-8 md:pb-6 flex flex-col justify-center"
      style={{ backgroundImage: `url('/studyinaustralia/australia-bg.jpg')` }}
    >
      {/* Heading */}
      <div className="text-center z-20 mb-4 md:mb-4 md:-mt-24">
        <h2
          className="text-2xl md:text-5xl font-bold bg-black text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          Australia Advantage
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto w-full mt-6 md:mt-14">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="group animate-slideInRight bg-white bg-opacity-80 shadow-lg rounded-xl p-4 sm:p-6 md:p-10 md:-mb-18 hover:shadow-xl transition text-black"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                {/* Text */}
                <div
                  className="flex-1 text-left"
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-offset="100"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-2 md:p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition">
                      {slide.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {slide.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-black leading-relaxed">
                    {slide.text}
                  </p>
                </div>

                {/* Image */}
                <div
                  className="flex-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                >
                  <Image
                    src={slide.imgSrc}
                    alt={slide.title}
                    width={500}
                    height={300}
                    className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg mx-auto transition-transform duration-500 group-hover:scale-105"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
