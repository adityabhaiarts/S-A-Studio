// About.js
import React from "react";
import { motion } from "framer-motion";
import {
  Film,
  Video,
  Palette,
  Music,
  UploadCloud,
  Cloud,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Film className="w-10 h-10 text-indigo-600" />,
      title: "Intuitive Timeline",
      desc: "Easily arrange clips, audio, and effects on a clear, drag-and-drop timeline.",
    },
    {
      icon: <Video className="w-10 h-10 text-indigo-600" />,
      title: "Powerful Editing Tools",
      desc: "Trim, split, merge, and adjust videos with professional-grade tools.",
    },
    {
      icon: <Palette className="w-10 h-10 text-indigo-600" />,
      title: "Custom Effects & Filters",
      desc: "Enhance your videos with a wide range of visual effects, color grading, and transitions.",
    },
    {
      icon: <Music className="w-10 h-10 text-indigo-600" />,
      title: "Audio Editing",
      desc: "Add music, sound effects, and voiceovers, and control audio levels easily.",
    },
    {
      icon: <UploadCloud className="w-10 h-10 text-indigo-600" />,
      title: "Fast Export",
      desc: "Export your videos in multiple resolutions and formats quickly and efficiently.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-indigo-600" />,
      title: "Cloud Integration",
      desc: "Save, share, and collaborate on your projects across devices effortlessly.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="relative py-20 bg-white">
        <h1 className="text-3xl font-semibold text-center mx-auto">
          About our Video Editor
        </h1>
        <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
          A visual collection of the features that make our Video Editor fast, powerful, and easy to use.
        </p>

        {/* Decorative blurred circle */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-[#FBFFE1] blur-[300px] -z-10"></div>

        {/* Grid */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-0 pt-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            >
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-full inline-flex">
                {item.icon}
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
