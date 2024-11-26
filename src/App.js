"use client";

import React, { useState } from "react";


export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const openModal = (project) => {
    setActiveProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveProject(null);
    setModalOpen(false);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + 1) % activeProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + activeProject.images.length) %
        activeProject.images.length
    );
  };


  const projects = [
    {
      id: 1,
      title: "Urban House",
      description: "A modern residential design featuring sustainable materials and open spaces.",
      images: ["/images/project1.jpg", "/images/project2.jpg"],
      detailedDescription: {
        overview: "Urban House redefines contemporary living with an emphasis on sustainable architecture...",
        designFeatures: [
          "Solar panels for energy efficiency",
          "Rainwater harvesting systems",
          "Open and airy layouts maximizing natural light",
          "Sustainable materials throughout the build"
        ],
        process: "The design process involved initial client consultation, followed by schematic designs, and final construction...",
        testimonials: [
          "The Urban House has exceeded our expectations in terms of design, sustainability, and comfort."
        ]
      }
    },
    {
      id: 2,
      title: "City Skyscraper",
      description: "An innovative skyscraper with a focus on energy efficiency and urban integration.",
      images: ["/images/project3.jpg", "/images/project5.jpg"],
      detailedDescription: {
        overview: "The City Skyscraper stands as a beacon of modernity and sustainability, featuring cutting-edge architectural elements...",
        designFeatures: [
          "Smart glass windows for energy conservation",
          "Green rooftop gardens",
          "Integration with public transportation systems"
        ],
        process: "The project began with feasibility studies, followed by extensive design workshops with stakeholders...",
        testimonials: [
          "An exceptional structure that integrates seamlessly with the urban environment while promoting sustainability."
        ]
      }
    },
    // More projects
  ];
  
  
  return (
    <div>
      {/* Header Section */}
      <header className="bg-transparent text-white py-6">
        <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <a href="/" className="text-2xl font-semibold tracking-tight hover:text-gray-400">[Architect Name]</a>
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-lg font-semibold hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#portfolio" className="text-lg font-semibold hover:text-gray-400">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-semibold hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/background.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Innovative Architectural Designs</h1>
            <p className="text-lg text-white mb-8">Explore inspiring architecture and creative design solutions.</p>
            <a href="#portfolio" className="px-6 py-3 bg-white text-gray-900 font-semibold text-lg rounded-md hover:bg-gray-100 transition duration-300">View Portfolio</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-full md:w-1/3">
              <img
                src="/images/bio.jpg"
                alt="Architect Portrait"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-2/3 text-left">
              <p className="text-lg text-gray-700 mb-6">
                I’m [Architect Name], a passionate architect with a focus on creating
                functional, sustainable, and aesthetically pleasing spaces. With over
                [X] years of experience in designing residential and commercial
                buildings, my work focuses on blending innovation with tradition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My design philosophy revolves around the idea that architecture should
                serve not only the immediate needs of its users but also positively
                impact the environment and community. I work closely with my clients to
                understand their needs and aspirations, ensuring that each project is a
                reflection of their values and vision.
              </p>
              <a href="#portfolio" className="text-lg text-gray-900 font-semibold hover:text-gray-600 transition duration-300">
                Discover My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]} // Show the first image as the preview
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-6">Interested in collaborating or learning more about my work? Let’s talk!</p>
          <a href="mailto:contact@architect.com" className="text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg">Contact Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 Architect Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/architect" className="text-white hover:text-gray-400 mx-3">LinkedIn</a>
          <a href="https://www.instagram.com/architect" className="text-white hover:text-gray-400 mx-3">Instagram</a>
        </div>
      </footer>

      {isModalOpen && activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            // Close the modal when clicking on the backdrop (outside the modal content)
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold">{activeProject.title}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-900 text-3xl">
                &times;
              </button>
            </div>

            {/* Slideshow */}
            <div className="p-4">
              <div className="relative w-full h-80">
                {/* Image */}
                <img
                  src={activeProject.images[currentImageIndex]}
                  alt={`${activeProject.title} - Slide ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg mb-4 image-quality"
                />
                {/* Previous Button */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 rounded-full shadow-lg"
                >
                  &#8592;
                </button>
                {/* Next Button */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 rounded-full shadow-lg"
                >
                  &#8594;
                </button>
              </div>
            </div>

            {/* Structured Description */}
            <div className="px-4 pb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Overview</h3>
              <p className="text-gray-700 mb-6">{activeProject.detailedDescription.overview}</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Features</h3>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                {activeProject.detailedDescription.designFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Process</h3>
              <p className="text-gray-700 mb-6">{activeProject.detailedDescription.process}</p>

              {activeProject.detailedDescription.testimonials.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Feedback</h3>
                  {activeProject.detailedDescription.testimonials.map((quote, index) => (
                    <blockquote key={index} className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-6">
                      "{quote}"
                    </blockquote>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
