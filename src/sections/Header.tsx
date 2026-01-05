"use client";
import { useEffect, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-8 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <NavItem href="#home" active={activeLink === "#home"}>
          Home
        </NavItem>
        <NavItem href="#projects" active={activeLink === "#projects"}>
          Projects
        </NavItem>
        <NavItem href="#about" active={activeLink === "#about"}>
          About
        </NavItem>
        <NavItem href="#contact" active={activeLink === "#contact"}>
          Contact
        </NavItem>
      </nav>
    </div>
  );
};

const NavItem = ({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className={`nav-item ${active ? "bg-white text-gray-900" : ""}`}
  >
    {children}
  </a>
);
