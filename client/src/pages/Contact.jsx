import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918468006792";
    const text = `📩 New Inquiry from Video Editing Studio:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n💬 Message: ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 flex flex-col items-center p-8 mt-20">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold mb-10 text-gray-800 tracking-wide text-center"
      >
        Contact <span className="text-green-600">Our Studio</span>
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send us a message ✍️
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-4 p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-4 p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none transition h-36 resize-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white p-4 rounded-xl font-semibold text-lg shadow-md hover:bg-green-700 transition"
          >
            🚀 Send via WhatsApp
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Our Studio Info 📍
            </h2>

            <p className="flex items-center mb-4 text-gray-700">
              <MapPin className="mr-3 text-blue-600 w-6 h-6" />
              Shajadpur, Akbarpur, Ambedkar Nagar, India
            </p>
            <p className="flex items-center mb-4 text-gray-700">
              <Phone className="mr-3 text-green-600 w-6 h-6" /> +91 8468006792
            </p>
            <p className="flex items-center mb-4 text-gray-700">
              <Mail className="mr-3 text-red-500 w-6 h-6" /> studio@email.com
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="w-8 h-8 text-blue-700" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="w-8 h-8 text-pink-500" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="w-8 h-8 text-red-600" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
