import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4">Innovative Architectural Designs</h1>
          <p className="text-lg text-white mb-8">Explore inspiring architecture and creative design solutions.</p>
          <a href="#portfolio" className="px-6 py-3 bg-white text-gray-900 font-semibold text-lg rounded-md hover:bg-gray-100 transition duration-300">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}
