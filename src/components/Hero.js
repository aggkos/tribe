import React, { useState, useEffect } from "react";

export default function Hero({ scrollToPortfolio }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState([false, false, false]);
  const [isSticky, setIsSticky] = useState(false); // State for sticky effect

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Make each list item appear after a delay
      menuItemsVisible.forEach((_, index) => {
        setTimeout(() => {
          setMenuItemsVisible(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 200 * (index + 1)); // Adjust delay timing here
      });
    } else {
      setMenuItemsVisible([false, false, false]); // Reset visibility when menu is closed
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#eeeeee]">
      {/* Fixed Hamburger Menu Button */}
      <div className="relative z-50">
        <button
          onClick={toggleMenu}
          className={`p-4 bg-[#eeeeee] text-[#333333] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50' : ''}`}
        >
          {/* Hamburger Icon with rotation transition */}
          <span
            className={`material-icons transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
          >
            menu
          </span>
        </button>

        {/* Fixed Menu Items (appear below the button when open) */}
        {isMenuOpen && (
          <div
            className={`fixed top-[60px] left-4 bg-[#eeeeee] w-48 z-40 transition-all duration-300 opacity-100`}
          >
            <ul className="flex flex-col">
              {["PORTFOLIO", "ABOUT", "CONTACT"].map((text, index) => (
                <li
                  key={text}
                  className={`p-2 font-whitman text-sm ${menuItemsVisible[index] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
                >
                  <button>{text}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          {/* Title */}
          <h1 className="text-5xl font-bold font-whitman text-[#333333] mb-4">
            TRIBE
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
