import React from "react";

export default function Portfolio({ projects, openModal }) {
  return (
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
              <img src={`${process.env.PUBLIC_URL}${project.images[0]}`} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
