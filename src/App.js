"use client";

import React, { useState } from "react";
import Hero from  "./components/Hero";
import About from  "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Slideshow from "./components/Slideshow";


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


  const projects = [
    {
      id: 1,
      title: "APARTMENT / MILAN",
      year: 2023,
      description: "A modern residential design featuring sustainable materials and open spaces.",
      address: "Via Monte Napoleone, Milan, Italy",
      coordinates: { lat: 40.785091, lng: -73.968285 },
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
      title: "CITY SKYSCRAPER / MILAN",
      year: 2023,
      description: "An innovative skyscraper with a focus on energy efficiency and urban integration.",
      address: "Piazza Gae Aulenti, Milan, Italy",
      coordinates: { lat: 40.785091, lng: -73.968285 },
      images: ["/images/project2.jpg", "/images/project5.jpg"],
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
    {
      id: 3,
      title: "GREEN TOWER / MILAN",
      year: 2023,
      description: "A high-rise designed with urban greenery and eco-friendly innovations.",
      address: "Corso Como, Milan, Italy",
      coordinates: { lat: 40.785091, lng: -73.968285 },
      images: ["/images/project3.jpg", "/images/project6.jpg"],
      detailedDescription: {
        overview: "Green Tower integrates nature into urban living with vertical gardens and energy-efficient systems...",
        designFeatures: [
          "Vertical gardens for air quality improvement",
          "Energy-saving lighting systems",
          "Eco-friendly construction materials"
        ],
        process: "The project was realized through a collaborative approach, involving architects, ecologists, and urban planners...",
        testimonials: [
          "Living here is like being in the middle of a green oasis within the city."
        ]
      }
    },
    {
      id: 4,
      title: "BEACH VILLA / SARDINIA",
      year: 2022,
      description: "A luxurious beachfront villa combining elegance with sustainability.",
      address: "Costa Smeralda, Sardinia, Italy",
      coordinates: { lat: 40.785091, lng: -73.968285 },
      images: ["/images/project4.jpg", "/images/project6.jpg"],
      detailedDescription: {
        overview: "This villa showcases a harmonious blend of modern design and natural beauty, providing unmatched views of the sea.",
        designFeatures: [
          "Infinity pool overlooking the coastline",
          "Natural stone and wood accents",
          "Solar water heating system"
        ],
        process: "Collaborative design sessions with the client led to a bespoke villa that balances luxury with eco-conscious choices...",
        testimonials: [
          "An unparalleled retreat that perfectly captures the essence of Sardinia."
        ]
      }
    },
    {
      id: 5,
      title: "MOUNTAIN LODGE / ALPS",
      year: 2022,
      description: "A cozy yet modern mountain retreat nestled in the Alps.",
      address: "Chamonix, French Alps",
      coordinates: { lat: 40.785091, lng: -73.968285 },
      images: ["/images/project5.jpg", "/images/project6.jpg"],
      detailedDescription: {
        overview: "A lodge designed for comfort and sustainability, featuring breathtaking views of the surrounding peaks.",
        designFeatures: [
          "Geothermal heating system",
          "Large panoramic windows",
          "Locally sourced timber construction"
        ],
        process: "From conception to completion, this project embraced the challenges of alpine construction to deliver an exceptional living space...",
        testimonials: [
          "The perfect escape for nature lovers and luxury seekers alike."
        ]
      }
    },
    {
      id: 6,
      title: "URBAN LOFT / BERLIN",
      year: 2023,
      description: "A chic urban loft designed for modern city living.",
      address: "Kreuzberg, Berlin, Germany",
      coordinates: { lat: 40.785091, lng: -73.968285 },
      images: ["/images/project6.jpg", "/images/project5.jpg"],
      detailedDescription: {
        overview: "This loft combines industrial aesthetics with cutting-edge technology to create a unique urban living experience.",
        designFeatures: [
          "Smart home automation",
          "Industrial-style exposed brick and steel",
          "Energy-efficient HVAC system"
        ],
        process: "Working closely with local artisans, the project reflects the vibrant and eclectic spirit of Berlin...",
        testimonials: [
          "An extraordinary living space that captures the heart of the city."
        ]
      }
    }
    // More projects
  ];
  
  
  return (
    <div>
      {/* Rest of the content */}
      <Portfolio projects={projects} openModal={openModal} />
      <Footer />
      {isModalOpen && activeProject && (
        <Slideshow project={activeProject} closeModal={closeModal} />
      )}
    </div>
  );
  
  
}
