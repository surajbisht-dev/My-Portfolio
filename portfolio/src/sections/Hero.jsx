import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

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
  {
    icon: <FaTwitter />,
    url: "https://x.com/SurajBisht10000",
    label: "Twitter",
  },
  {
    icon: <FaEnvelope />,
    url: "surajbisht1906@gmail.com",
    label: "Email",
  },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-blue-900 to-gray-900 text-white px-6"
    >
      {/* Overlay subtle animated circles */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I'm <span className="text-blue-400">Suraj Bisht</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-8 min-h-[3rem] text-blue-200">
          <Typewriter
            words={[
              "Full Stack Developer",
              "MERN Stack Specialist",
              "Expert in MongoDB, Express, React, Node.",
              "Crafting end-to-end web solutions.",
              "Tech Enthusiast",
              "Passionate about new technologies.",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <div className="flex justify-center gap-6 mb-10 text-3xl">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-blue-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <a
          href="/SurajBisht_Resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
          aria-label="Download Resume"
        >
          <FaFileDownload size={20} />
          Download Resume
        </a>
      </div>

      {/* Animations for blobs */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
