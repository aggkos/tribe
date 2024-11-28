import React, { useRef } from "react";

export default function Hero({ scrollToPortfolio }) {
  return (
    <section className="relative w-full h-screen bg-[#ffffff]">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          {/* Title */}
          <h1 className="text-5xl font-bold font-sans text-[#333333] mb-4">
            Innovative Architectural Designs
          </h1>

          {/* Subtitle */}
          <p className="text-lg font-light font-sans text-[#333333] mb-8">
            Explore inspiring architecture and creative design solutions.
          </p>

          {/* Minimal Button */}
          <button
            onClick={scrollToPortfolio}
            className="inline-block text-[#333333] text-lg font-medium relative group transition duration-300 transform active:scale-95"
          >
            View Portfolio
            <span className="block w-0 h-[1px] bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
