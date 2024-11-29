import React, { useState } from "react";

export default function ProjectModal({ project, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
  };

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="bg-white overflow-hidden shadow-lg max-w-[85rem] w-full max-h-[120vh] flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Slideshow Section */}
        <div className="relative w-3/4 h-[90vh]">
          <img
            src={`${process.env.PUBLIC_URL}${project.images[currentImageIndex]}`}
            alt={`${project.title} - Slide`}
            className="w-full h-full object-cover mb-4"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 shadow-lg"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white bg-opacity-75 hover:bg-opacity-100 transition duration-200 shadow-lg"
          >
            &#8594;
          </button>
        </div>

        <div className="px-4 pb-4 flex-1 overflow-y-auto">
          <div className="flex justify-between items-center p-4">
            <div>
              <h2 className="text-xl font-bold font-whitman">
                {project.title}
                <span className="ml-2 text-sm text-black font-whitman">{project.year}</span>
              </h2>
              <div className="flex items-center mt-1">
                <button
                  onClick={openMap}
                  className="text-grey-500 hover:text-grey-700 flex items-center "
                  title="Open Map"
                >
                  <span className="material-icons">place</span>
                </button>
                <p className="text-gray-500 text-sm mr-2 font-whitman">{project.address}</p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-900 text-3xl font-whitman"
            >
              &times;
            </button>
          </div>

          {/* Project Details Section */}
          <div className="px-4 pb-4 flex-1">
            <p className="text-sm text-gray-700 mb-6 font-whitman">
              {project.detailedDescription.overview}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-whitman">Design Features</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-6 font-whitman"> {/* Smaller text size here */}
              {project.detailedDescription.designFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-whitman">Design Process</h3>
            <p className="text-sm text-gray-700 mb-6 font-whitman"> {/* Smaller text size here */}
              {project.detailedDescription.process}
            </p>

            {project.detailedDescription.testimonials.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-whitman">Client Feedback</h3>
                {project.detailedDescription.testimonials.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-gray-400 pl-4 text-sm text-gray-700 italic mb-6 font-whitman"
                  >
                    "{quote}"
                  </blockquote>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Map Modal */}
        {isMapOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
            onClick={closeMap}
          >
            <div
              className="bg-white shadow-lg w-[90vw] h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${project.coordinates.lng},${project.coordinates.lat},${project.coordinates.lng},${project.coordinates.lat}&layer=mapnik&marker=${project.coordinates.lat},${project.coordinates.lng}`}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Project Map"
              ></iframe>
              <button
                onClick={closeMap}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
