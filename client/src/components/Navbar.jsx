import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg overflow-x-hidden">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-3 text-gray-900 w-full max-w-full">
        {/* Logo on the Left */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition shrink-0"
        >
          <img
            src={logo}
            alt="Logo"
            width="130"
            height="35"
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium flex-shrink-0">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="relative group transition-colors duration-200 hover:text-violet-600"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Contact Button */}
        <a
          href="https://wa.me/918468006792"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-500 to-[#E0724A] text-white font-medium px-5 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all flex-shrink-0"
        >
          Contact <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Toggle on Right */}
        <button
          aria-label="Toggle menu"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-block md:hidden p-2 rounded-md hover:bg-gray-100 transition z-50 flex-shrink-0"
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-gray-700" />
          ) : (
            <Menu className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Slide-down Menu */}
      <div
        className={`fixed top-[64px] right-0 left-0 z-40 bg-white shadow-2xl rounded-b-2xl transition-all duration-300 ease-in-out md:hidden w-full max-w-full overflow-x-hidden ${
          isMenuOpen ? "max-h-[80vh] opacity-100 py-4 overflow-y-auto overflow-x-hidden" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="block w-full py-3 px-4 rounded-lg text-gray-800 font-medium hover:bg-gradient-to-r hover:from-violet-500 hover:to-[#E0724A] hover:text-white transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
