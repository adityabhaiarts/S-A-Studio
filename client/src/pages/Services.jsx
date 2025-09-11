import React from "react";
import { Film, Scissors, Music, Star, Video, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Cinematic Editing",
    description:
      "Transform raw footage into cinematic masterpieces with advanced transitions, LUTs, and storytelling cuts.",
    icon: <Film className="w-10 h-10 text-violet-500" />,
  },
  {
    title: "Short-Form Content",
    description:
      "Engaging reels, shorts, and TikToks tailored for maximum social media impact and growth.",
    icon: <Scissors className="w-10 h-10 text-pink-500" />,
  },
  {
    title: "Music Video Editing",
    description:
      "Professional syncing, effects, and visual storytelling for artists, bands, and creators.",
    icon: <Music className="w-10 h-10 text-blue-500" />,
  },
  {
    title: "Corporate & Ads",
    description:
      "Sleek, high-quality promotional videos, product ads, and corporate explainers.",
    icon: <Star className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Event Highlights",
    description:
      "Capture weddings, birthdays, and special events with beautiful highlight reels.",
    icon: <Video className="w-10 h-10 text-green-500" />,
  },
  {
    title: "Custom Effects & VFX",
    description:
      "Motion graphics, green screen edits, and visual effects to bring imagination to life.",
    icon: <Sparkles className="w-10 h-10 text-purple-500" />,
  },
];

const whyChooseUs = [
  "10+ Years of Editing Experience",
  "Trusted by 500+ Clients Worldwide",
  "Fast Turnaround & On-Time Delivery",
  "Creative & Tailored Editing Styles",
];

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "300+", label: "Happy Clients" },
  { number: "10+", label: "Years Experience" },
];

const Services = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden mt-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-violet-600">Editing Services</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          From social media reels to cinematic films — we craft edits that
          inspire, engage, and leave a lasting impact.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-pink-100 rounded-xl mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h4 className="text-4xl font-extrabold text-violet-600">
              {stat.number}
            </h4>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-violet-600">Us?</span>
          </h3>
          <ul className="space-y-4">
            {whyChooseUs.map((point, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-violet-500" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-violet-200 to-pink-200 rounded-2xl p-10 shadow-lg"
        >
          <p className="text-lg text-gray-800 font-medium">
            “They completely transformed my wedding video into a cinematic film.
            Amazing editing skills, timely delivery, and truly professional work!”
          </p>
          <div className="mt-4 font-semibold text-gray-900">— Happy Client</div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Ready to Elevate Your Videos?
        </h3>
        <p className="text-gray-600 mt-3 mb-6">
          Let’s collaborate and create edits that capture attention and tell your story.
        </p>
        <a
          href="https://wa.me/918468006792"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-violet-500 to-pink-500 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
