import React, { useState } from "react";

export default function ProjectModal({ project, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full sm:max-w-3xl max-w-full mx-4 sm:mx-0">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{project.title}</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-900 text-3xl sm:text-4xl">
            &times;
          </button>
        </div>
        <div className="p-4">
          <div className="relative w-full h-80 sm:h-96">
            <img src={`${process.env.PUBLIC_URL}${project.images[currentImageIndex]}`} alt={`${project.title} - Slide`} className="w-full h-full object-cover rounded-lg mb-4" />
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 rounded-full shadow-lg">&#8592;</button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 rounded-full shadow-lg">&#8594;</button>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Overview</h3>
          <p className="text-gray-700 mb-6">{project.detailedDescription.overview}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Features</h3>
          <ul className="list-disc pl-5 text-gray-700 mb-6">
            {project.detailedDescription.designFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Design Process</h3>
          <p className="text-gray-700 mb-6">{project.detailedDescription.process}</p>
          {project.detailedDescription.testimonials.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Feedback</h3>
              {project.detailedDescription.testimonials.map((quote, index) => (
                <blockquote key={index} className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-6">"{quote}"</blockquote>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
