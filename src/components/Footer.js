import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2024 Architect Portfolio. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://www.linkedin.com/in/architect" className="text-white hover:text-gray-400 mx-3">LinkedIn</a>
        <a href="https://www.instagram.com/architect" className="text-white hover:text-gray-400 mx-3">Instagram</a>
      </div>
    </footer>
  );
}
