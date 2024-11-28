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
                className="relative bg-gray-100 overflow-hidden shadow-xl transform scale-150 group hover:scale-110 active:scale-110 transition duration-300 cursor-pointer group"
                onClick={() => openModal(project)}
              >
                {/* Image with grayscale filter and hover/active effect */}
                <img
                  src={`${process.env.PUBLIC_URL}${project.images[0]}`}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-300 filter grayscale group-hover:grayscale-0"
                />
              
                {/* Overlay for title and description */}
                <div className="absolute top-0 left-0 p-4 bg-opacity-30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-active:opacity-100">
                  <p 
                    className="text-lg font-light font-sans text-white mb-8" 
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Adding a shadow to the text
                    }}>
                    {project.title}
                  </p>
                </div>
              </div>
            
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
