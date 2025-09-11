import React from "react";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800 overflow-x-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Logo"
          className="h-12 mb-4"
        />
        <p className="max-w-xl text-sm font-normal leading-relaxed">
          Video creations widely used across brands and platforms. We help bring your vision to life with professional editing and creative storytelling.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            S.A. Studio
          </a>{" "}
          ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
