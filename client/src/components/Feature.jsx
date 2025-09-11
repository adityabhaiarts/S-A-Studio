// Feature.js
import React from "react";
import { Video, Scissors, Wand2, Palette, Film, Layers } from "lucide-react";

const Feature = () => {
  const featuresData = [
    {
      icon: <Scissors className="w-10 h-10 text-purple-600" />,
      title: "Professional Video Editing",
      description: "Seamless cuts, smooth transitions, and storytelling that engages your audience.",
    },
    {
      icon: <Palette className="w-10 h-10 text-purple-600" />,
      title: "Color Grading",
      description: "Transform your raw footage into cinematic visuals with pro-level color grading.",
    },
    {
      icon: <Wand2 className="w-10 h-10 text-purple-600" />,
      title: "Motion Graphics",
      description: "Bring your videos to life with stunning animations and graphic overlays.",
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-600" />,
      title: "VFX & Compositing",
      description: "Add advanced effects and composite multiple scenes for breathtaking results.",
    },
    {
      icon: <Film className="w-10 h-10 text-purple-600" />,
      title: "Shorts & Reels Editing",
      description: "Perfectly optimized edits for YouTube Shorts, Instagram Reels & TikTok.",
    },
    {
      icon: <Video className="w-10 h-10 text-purple-600" />,
      title: "Full-length Productions",
      description: "End-to-end editing for documentaries, ads, and cinematic videos.",
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-purple-600 font-medium inline-block px-6 py-1.5 rounded-full bg-purple-100 border border-purple-300">
            Our Services
          </p>
          <h2 className="text-4xl font-bold mt-6">Video Editing Expertise</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A full suite of services designed to make your videos look professional and captivating.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-purple-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-white"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 group-hover:bg-purple-600 transition-colors duration-500">
                <div className="text-purple-600 group-hover:text-white transition-colors duration-500">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-500">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
                {feature.description}
              </p>

              {/* Hover underline */}
              <span className="absolute bottom-4 left-8 w-0 h-0.5 bg-purple-600 transition-all duration-500 group-hover:w-1/2"></span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
