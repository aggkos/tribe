import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-6">Interested in collaborating or learning more about my work? Let’s talk!</p>
        <a href="mailto:contact@architect.com" className="text-lg font-semibold text-white bg-gray-800 hover:bg-gray-700 py-3 px-6 rounded-lg">
          Contact Me
        </a>
      </div>
    </section>
  );
}
