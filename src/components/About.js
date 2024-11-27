import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/3">
            <img
              src={`${process.env.PUBLIC_URL}/images/bio.jpg`}
              alt="Architect Portrait"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-2/3 text-left">
            <p className="text-lg text-gray-700 mb-6">
              I’m [Architect Name], a passionate architect with a focus on
              creating functional, sustainable, and aesthetically pleasing
              spaces...
            </p>
            <a
              href="#portfolio"
              className="text-lg text-gray-900 font-semibold hover:text-gray-600 transition duration-300"
            >
              Discover My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
