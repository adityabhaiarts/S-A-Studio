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
    <div className="relative w-full overflow-hidden max-w-5xl mx-auto select-none py-6">
      {/* Inline styles for marquee animation */}
      <style>{`
        .marquee-inner {
          display: flex;
          flex-wrap: nowrap;
          will-change: transform;
          animation: marqueeScroll 15s linear infinite;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner img {
          height: 60px;
          margin: 0 24px;
          flex-shrink: 0;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .marquee-inner img {
            height: 40px; /* smaller on mobile */
            margin: 0 12px;
          }
        }
      `}</style>

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

      {/* Marquee */}
      <div className="marquee-inner">
        {[...companyLogos, ...companyLogos].map((company, index) => (
          <img
            key={index}
            src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
            alt={company}
            draggable={false}
          />
        ))}
      </div>

      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-16 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default Apps;
