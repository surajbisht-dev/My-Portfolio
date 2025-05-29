import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Grras Solutions Pvt. Ltd.",
    date: "June 2023",
    certificateUrl: "https://coursera.org/certificate/fullstackwebdev",
  },
  {
    title: "Front-End Web Development",
    issuer: "Remark Skill",
    date: "Jan 2022",
    certificateUrl:
      "https://university.mongodb.com/certificates/mongodb-developers",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Internshala",
    date: "Feb 2022",
    certificateUrl: "https://udemy.com/certificate/react-complete-guide",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-gray-900 text-white max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Certifications
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map(({ title, issuer, date, certificateUrl }, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 mb-1">
              <strong>Issuer:</strong> {issuer}
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Date:</strong> {date}
            </p>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-600 font-semibold transition"
              aria-label={`View certificate for ${title}`}
            >
              View Certificate <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
