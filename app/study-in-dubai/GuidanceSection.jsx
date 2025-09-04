'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import {
  FaGlobeAmericas,
  FaUniversity,
  FaChalkboardTeacher,
  FaHandshake,
} from 'react-icons/fa';
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
} from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function GlobalExposure() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const slides = [
    {
      icon: <FaGlobeAmericas size={40} className="text-blue-400" />,
      title: 'Global Business Hub',
      text: 'Dubai serves as a bridge between East and West, offering students unparalleled exposure to international business networks and multicultural environments.',
      imgSrc: '/studyindubai/global1.jpg',
    },
    {
      icon: <FaUniversity size={40} className="text-orange-500" />,
      title: 'World-Class Institutions',
      text: 'Dubai hosts branches of top global universities and innovative local institutions, providing internationally recognized degrees with a Middle Eastern perspective.',
      imgSrc: '/studyindubai/global2.jpeg',
    },
    {
      icon: <FaChalkboardTeacher size={40} className="text-green-400" />,
      title: 'Innovative Education',
      text: 'Dubai\'s education system focuses on future-ready skills with cutting-edge programs in business, technology, and hospitality tailored for the global market.',
      imgSrc: '/studyindubai/global3.jpg',
    },
    {
      icon: <FaHandshake size={40} className="text-red-500" />,
      title: 'Career Gateway',
      text: 'With its thriving economy and tax-free salaries, Dubai offers exceptional internship and job opportunities in sectors like finance, tourism, and technology.',
      imgSrc: '/studyindubai/global4.jpeg',
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
    cssEase: 'ease-in-out',
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
      style={{ backgroundImage: `url('/studyindubai/dubai-bg.jpg')` }}
    >
      {/* Heading */}
      <div className="text-center z-20 mb-4 md:mb-4 md:-mt-24">
        <h2
          className="text-2xl md:text-5xl font-bold bg-black text-transparent bg-clip-text"
          data-aos="fade-down"
        >
          Dubai Advantage
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
                    <h3 className="text-xl md:text-2xl font-semibold">{slide.title}</h3>
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
    width={500}  // Set appropriate width
    height={300} // Set appropriate height
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