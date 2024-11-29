import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#eeeeee] text-[#333333] py-6 text-center">
      <p>&copy; 2024 Architect Portfolio. All rights reserved.</p>
      <div className="mt-4">
        <a
          href="https://www.linkedin.com/in/architect"
          className="text-[#333333] hover:text-[#333333] hover:underline transition duration-300 mx-3"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/architect"
          className="text-[#333333] hover:text-[#333333] hover:underline transition duration-300 mx-3"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
