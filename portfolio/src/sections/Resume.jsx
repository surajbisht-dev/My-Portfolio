import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-16 px-6 bg-gray-800 text-white max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400">Resume</h2>

      <p className="mb-6 text-gray-300">
        You can download my resume to learn more about my technical background,
        education, and project experience. I'm always looking for new challenges
        and opportunities!
      </p>

      <a
        href="/Suraj_Bisht_Resume.pdf" // ✅ Place your actual resume PDF in `public/` folder
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-blue-600 transition"
      >
        <FaDownload />
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
