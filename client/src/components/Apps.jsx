// Apps.js
import React from "react";

const Apps = () => {
  const companyLogos = [
    "slack",
    "framer",
    "netflix",
    "google",
    "linkedin",
    "instagram",
    "facebook",
  ];

  return (
    <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none py-6 pt-5">
      {/* Inline styles for marquee animation */}
      <style>{`
        .marquee-inner {
          display: flex;
          will-change: transform;
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner img {
          height: 60px;
          margin: 0 24px;
          object-fit: contain;
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .marquee-inner img {
            height: 40px; /* larger on mobile */
            margin: 0 12px;
          }
        }
      `}</style>

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Marquee */}
      <div
        className="marquee-inner min-w-[100%]"
        style={{ animationDuration: "15s" }}
      >
        <div className="flex">
          {[...companyLogos, ...companyLogos].map((company, index) => (
            <img
              key={index}
              src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
              alt={company}
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default Apps;
