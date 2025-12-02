import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      {/* Navbar should be outside Routes so it shows on all pages */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Analytics />
    </>
  );
};

export default App;
