import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "NPM", icon: <FaNpm className="text-red-400" /> },
  { name: "Database", icon: <FaDatabase className="text-purple-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 bg-gray-900 text-white max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="text-4xl mb-3">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
