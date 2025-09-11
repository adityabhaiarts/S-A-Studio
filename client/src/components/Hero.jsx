import React, { useState, useEffect } from "react";
import q from '../assets/1.png'
import w from '../assets/2.png'
import e from '../assets/3.png'
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience of Newly Editions by Saksham Arya Studio",
      offer: "Limited Time Offer: 30% Off",
      buttonText1: "Contact us",
      buttonText2: "Find More",
      imgSrc: q,
    },
    {
      id: 2,
      title: "Next-Level Edition Starts Here - Discover Creativity 5 Today!",
      offer: "Hurry Up! Only Few Left!",
      buttonText1: "Contact us",
      buttonText2: "Explore Editions",
      imgSrc: w,
    },
    {
      id: 3,
      title: "Power Meets Elegance - S.A. Studio is Here for You!",
      offer: "Exclusive Deal: 40% Off",
      buttonText1: "Contact us",
      buttonText2: "Learn More",
      imgSrc: e,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden mt-30">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#F1F3F8] py-8 px-5 md:px-14 rounded-xl min-w-full"
          >
            {/* Text Section */}
            <div className="md:pl-8 mt-8 md:mt-0 text-center md:text-left max-w-lg">
              <p className="text-orange-600 text-sm md:text-base font-medium mb-2">
                {slide.offer}
              </p>
              <h1 className="text-2xl md:text-[40px] md:leading-[48px] font-semibold">
                {slide.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6 justify-center md:justify-start">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 hover:bg-orange-700 rounded-full text-white font-medium shadow-md transition-transform active:scale-95">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center justify-center gap-2 px-6 py-2.5 font-medium text-gray-700 hover:text-orange-600 transition">
                  {slide.buttonText2}
                 <ArrowRight/>
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center flex-1">
            <img
                className="w-40 sm:w-52 md:w-72 lg:w-80 max-w-full h-auto object-contain drop-shadow-lg"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
            />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex items-center justify-center gap-3 mt-5 md:mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-orange-600 scale-110"
                : "bg-gray-400/40 hover:bg-gray-500/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
