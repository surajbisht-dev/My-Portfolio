import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/surajbisht-dev",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/1sb19/",
    label: "LinkedIn",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // adjust offset for navbar height
        behavior: "smooth",
      });
    }
  };

  // Update active link based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 80;
      let current = "hero";

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos) {
          current = id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo or name */}
        <div
          className="text-2xl font-bold text-blue-400 cursor-pointer"
          onClick={() => handleScrollTo("hero")}
        >
          Suraj Bisht
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navLinks.map(({ id, label }) => (
            <li
              key={id}
              className={`cursor-pointer hover:text-blue-400 transition ${
                activeId === id ? "text-blue-400 font-semibold" : ""
              }`}
              onClick={() => handleScrollTo(id)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Social icons desktop */}
        <div className="hidden md:flex space-x-4 text-white text-xl">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-blue-400 transition"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 pb-6 space-y-6">
          <ul className="flex flex-col space-y-4 text-lg">
            {navLinks.map(({ id, label }) => (
              <li
                key={id}
                className={`cursor-pointer hover:text-blue-400 transition ${
                  activeId === id ? "text-blue-400 font-semibold" : ""
                }`}
                onClick={() => handleScrollTo(id)}
              >
                {label}
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 text-xl mt-4">
            {socialLinks.map(({ icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-blue-400 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
