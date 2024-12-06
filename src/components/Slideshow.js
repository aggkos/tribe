import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function ProjectModal({ project, closeModal }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMapOpen, setIsMapOpen] = useState(false);

  // Hide scrollbar when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = ""; // Reset scrolling
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "Escape":
          if (isMapOpen) {
            closeMap();
          } else {
            closeModal();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMapOpen, currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
  };

  const openMap = () => setIsMapOpen(true);
  const closeMap = () => setIsMapOpen(false);

  const BackButton = ({ className }) => (
    <button
      onClick={closeModal}
      className={`text-black px-4 py-2 text-sm z-60 ${className}`}
    >
      &larr; Back
    </button>
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables swipe on desktop for testing
  });

  return (
    <div
      className="fixed inset-0 flex justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div
        className="bg-white flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
      >
        {/* Slideshow Section */}
        <div
          className="relative w-full lg:w-3/4 h-[50vh] lg:h-[95vh]"
          {...swipeHandlers} // Attach swipe handlers
        >
          <img
            src={`${process.env.PUBLIC_URL}${project.images[currentImageIndex]}`}
            alt={`${project.title} - Slide`}
            className="w-full h-full object-cover mb-4"
          />
          {/* Navigation Buttons */}
          <div
            onClick={prevImage}
            className="absolute inset-y-0 left-0 w-1/4 bg-transparent hover:bg-gray-900 hover:bg-opacity-0 cursor-pointer"
          ></div>
          <div
            onClick={nextImage}
            className="absolute inset-y-0 right-0 w-1/4 bg-transparent hover:bg-gray-900 hover:bg-opacity-0 cursor-pointer"
          ></div>
        </div>

        {/* Description Section */}
        <div className="px-4 pb-4 flex-1 overflow-y-auto">
          {/* Desktop Back Button */}
          <div className="mt-4">
            <BackButton />
          </div>

          <div className="flex justify-between items-center p-4">
            <div>
              <h2 className="text-xl font-bold font-whitman">
                {project.title}
                <span className="ml-2 text-sm text-black font-whitman">{project.year}</span>
              </h2>
              <div className="flex items-center mt-1">
                <button
                  onClick={openMap}
                  className="text-grey-500 hover:text-grey-700 flex items-center"
                  title="Open Map"
                >
                  <span className="material-icons">place</span>
                </button>
                <p className="text-gray-500 text-xs mr-2 font-whitman">{project.address}</p>
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="px-4 pb-4">
            <p className="text-xs text-gray-700 mb-6 font-whitman">
              {project.detailedDescription.overview}
            </p>

            <h3 className="text-sm font-semibold text-gray-800 mb-2 font-whitman">Design Features</h3>
            <ul className="list-disc pl-5 text-xs text-gray-700 mb-6 font-whitman">
              {project.detailedDescription.designFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-gray-800 mb-2 font-whitman">Design Process</h3>
            <p className="text-xs text-gray-700 mb-6 font-whitman">
              {project.detailedDescription.process}
            </p>

            {project.detailedDescription.testimonials.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2 font-whitman">Client Feedback</h3>
                {project.detailedDescription.testimonials.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="border-l-4 border-gray-400 pl-4 text-xs text-gray-700 italic mb-6 font-whitman"
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
