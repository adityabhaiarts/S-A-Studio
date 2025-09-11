import React from "react";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <img
            alt="Logo"
            className="h-11"
            src={logo}
          />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Video Creations that are widely used in Brands, Platforms etc., It is sympathy to do edition to be your editor personality Impersonation.
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
