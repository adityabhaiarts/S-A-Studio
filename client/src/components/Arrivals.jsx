// Arrivals.js
import React, { useState } from "react";
import { MessageCircle, Play, X } from "lucide-react";
import { motion } from "framer-motion";
import a from "../assets/gym.jpg";
import b from "../assets/col.jpeg";
import c from "../assets/Mus.webp";
import d from "../assets/lut.jpeg";

export default function Arrivals() {
  const [openImage, setOpenImage] = useState(null);

  const items = [
    { id: 1, title: "GYM Editings", description: "Experience professional GYM style edits for your projects.", src: a },
    { id: 2, title: "Color Grading", description: "Enhance visuals with professional color grading presets.", src: b },
    { id: 3, title: "Music Nation Edit", description: "Seamlessly synced edits with beats to create engaging storytelling of Nation.", src: c },
    { id: 4, title: "Image Editing", description: "Apply advanced LUTs and filters to achieve stunning cinematic tones.", src: d },
  ];

  const handleWhatsApp = (item) => {
    const phoneNumber = "918468006792";
    const message = `Hi, I liked "${item.title}". Description: ${item.description}. I want this type of editing.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-10 font-poppins overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 flex items-center justify-center gap-2">
        <Play className="w-7 h-7 text-indigo-600" /> 🎬 Our Latest Works
      </h1>
      <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
        Explore our latest collection of professional editing styles. Preview and directly connect with us on WhatsApp if you want the same type of editing.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition cursor-pointer flex flex-col"
          >
            {/* Image */}
            <div
              className="relative w-full pb-[56.25%] overflow-hidden rounded-t-2xl"
              onClick={() => setOpenImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
                  <Play className="w-5 h-5 text-indigo-500" /> {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsApp(item);
                }}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
              >
                <MessageCircle className="w-5 h-5" /> Want this style
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {openImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-6 overflow-x-hidden">
          <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Preview */}
            <div className="relative w-full pb-[56.25%]">
              <img
                src={openImage.src}
                alt={openImage.title}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>

            {/* Title & Description */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{openImage.title}</h2>
              <p className="text-gray-700 mb-4">{openImage.description}</p>
              <button
                onClick={() => handleWhatsApp(openImage)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
              >
                <MessageCircle className="w-5 h-5" /> Want this style
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
