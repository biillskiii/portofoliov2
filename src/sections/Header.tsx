'use client'
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${activeLink === "#home" ? "bg-white text-gray-900" : ""}`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeLink === "#projects" ? "bg-white text-gray-900" : ""}`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${activeLink === "#about" ? "bg-white text-gray-900" : ""}`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeLink === "#contact" ? "bg-white text-gray-900" : ""}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
