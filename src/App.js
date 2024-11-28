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
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
    {
      id: 6,
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
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      <Portfolio projects={projects} openModal={openModal} />
      {/* <Contact /> */}
      <Footer />
      {isModalOpen && activeProject && (
        <Slideshow project={activeProject} closeModal={closeModal} />
      )}
    </div>
  );
}
