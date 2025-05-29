import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Import local images from assets folder
import healthcareImg from "../assets/healthcare.png";
import ecommerceImg from "../assets/ecommerce.png";
import gogetwellImg from "../assets/gogetwell.png";

const projects = [
  {
    title: "Healthcare & Consulting Website",
    description:
      "A web platform for doctor consultations with admin panel, appointment booking, and Razorpay payment integration.",
    imageUrl: healthcareImg,
    liveUrl: "https://online-healthcare-checkup-1.onrender.com",
    githubUrl:
      "https://github.com/surajbisht-dev/Online_Healthcare_Checkup.git",
  },
  {
    title: "E-Commerce Store",
    description:
      "A simple e-commerce platform with product listing, cart functionality, and sorting by category or price.",
    imageUrl: ecommerceImg,
    liveUrl: "https://shopping-app-5no3.onrender.com",
    githubUrl: "https://github.com/surajbisht-dev/Shopping-App.git",
  },
  {
    title: "GoGetWell Webpage",
    description:
      "GoGetWell landing page with modern design, featuring login, registration, and clear call-to-action elements.",
    imageUrl: gogetwellImg,
    liveUrl: "https://gogetwell.onrender.com",
    githubUrl: "https://github.com/surajbisht-dev/GoGetWell.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-gray-800 text-white max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ title, description, imageUrl, liveUrl, githubUrl }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              {/* Fixed height with object-contain to avoid cropping */}
              <div className="w-full h-60 bg-black flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={title}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{description}</p>

                <div className="flex justify-between items-center">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 font-semibold transition"
                    aria-label={`Live demo of ${title}`}
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-200 transition text-xl"
                    aria-label={`GitHub repository of ${title}`}
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
