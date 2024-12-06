import React, { useState, useEffect } from "react";

export default function Hero({ scrollToPortfolio }) {
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  // Function to handle scroll events
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true); // Add sticky class after scrolling 100px
    } else {
      setIsSticky(false); // Remove sticky class when back at top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Attach scroll event
    return () => window.removeEventListener("scroll", handleScroll); // Clean up on component unmount
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#eeeeee]">
      {/* Sticky Navbar */}
      <div
        className={`w-full ${isSticky ? 'fixed top-0 left-0 z-50 bg-[#eeeeee] shadow-lg' : 'relative'} transition-all duration-300`}
      >
        <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
          {/* Logo */}
          <h1 className="text-3xl font-bold font-whitman text-[#333333]">
            TRIBE.
          </h1>

          {/* Navigation Links */}
          <ul className="flex space-x-8">
            <li>
              <button className="font-whitman text-[#333333] text-lg">
                About
              </button>
            </li>
            <li>
              <button className="font-whitman text-[#333333] text-lg">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          {/* Title */}
          <h1 className="text-5xl font-bold font-whitman text-[#333333] mb-4">
            TRIBE.
          </h1>

          {/* Subtitle */}
          <p className="font-light font-whitman text-[#333333] mb-8">
            Architectural and Design Studios
          </p>

          {/* Minimal Button */}
          <button
            onClick={scrollToPortfolio}
            className="inline-block font-whitman text-[#333333] text-lg font-medium relative group transition duration-300 transform active:scale-95"
          >
            View Portfolio
            <span className="block w-0 h-[1px] bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
