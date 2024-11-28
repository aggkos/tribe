import React, { useRef } from "react";
import Hero from "./Hero"; // Importing Hero component

export default function Portfolio({ projects, openModal }) {
  const portfolioRef = useRef(null);  // Create a reference to the portfolio section

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({
      behavior: "smooth", // Smooth scroll effect
      block: "start", // Align the top of the section with the viewport
    });
  };

  return (
    <div>
      <Hero scrollToPortfolio={scrollToPortfolio} />  {/* Pass scroll function to Hero */}

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative bg-gray-100 overflow-hidden shadow-xl transform scale-150 hover:scale-110 transition duration-300 cursor-pointer group"
                onClick={() => openModal(project)}
              >
                {/* Image with grayscale filter and hover effect */}
                <img
                  src={`${process.env.PUBLIC_URL}${project.images[0]}`}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                />

                {/* Overlay for title and description */}
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="px-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
