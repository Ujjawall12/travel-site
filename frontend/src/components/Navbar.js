import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">TravelSite</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          <a href="#about" className="hover:text-gray-200">About</a>
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-gray-200 hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-800">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-800">About</a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-800">Services</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-800">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
