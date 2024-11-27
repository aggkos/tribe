import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-600 text-white py-6">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-semibold tracking-tight hover:text-gray-400">[Architect Name]</a>
        </div>
        <ul className="flex space-x-8">
          <li><a href="#about" className="text-lg font-semibold hover:text-gray-400">About</a></li>
          <li><a href="#portfolio" className="text-lg font-semibold hover:text-gray-400">Portfolio</a></li>
          <li><a href="#contact" className="text-lg font-semibold hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
