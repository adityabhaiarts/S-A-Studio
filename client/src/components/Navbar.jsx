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
    <header className="w-full fixed top-0 left-0 z-50 shadow-lg bg-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-3 sm:py-4 text-gray-900">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <img
            src={logo}
            alt="Logo"
            width="130"
            height="35"
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 font-medium">
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
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-violet-500 to-[#E0724A] text-white font-medium px-5 sm:px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          Contact <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-block md:hidden p-2 rounded-md hover:bg-gray-100 transition z-50"
        >
          {isMenuOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
        </button>

      {/* Mobile Menu */}
<div
  className={`absolute top-full left-0 right-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
    isMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  <ul className="flex flex-col space-y-3 sm:space-y-4 p-5 text-base sm:text-lg font-medium overflow-x-hidden">
    {menuItems.map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="block w-full hover:text-violet-600 transition"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

      </nav>
    </header>
  );
};

export default Navbar;
