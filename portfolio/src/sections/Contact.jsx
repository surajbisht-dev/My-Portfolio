import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      setSubmitStatus("error");
      setErrorMsg("Please fill the form correctly.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMsg("Please fill all fields.");
      return;
    }

    setSubmitStatus(null);
    setErrorMsg("");

    try {
      const res = await axios.post(
        "https://my-portfolio-z5sh.onrender.com/api/contact",
        formData
      );

      if (res.data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMsg("Failed to send message, please try again.");
      }
    } catch (err) {
      console.error("Axios Error:", err);
      setSubmitStatus("error");
      setErrorMsg("Failed to send message, please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gray-800 text-white max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span>surajbisht1906@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-400 text-2xl" />
            <span>+91 7037228538</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
            <span>Almora, Uttarakhand, India</span>
          </div>
          <div className="flex items-center gap-6 text-3xl text-blue-400 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 flex flex-col gap-6 bg-gray-900 rounded-lg p-6 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none resize-none"
            required
          ></textarea>

          {submitStatus === "error" && (
            <p className="text-red-500 font-semibold text-center">{errorMsg}</p>
          )}

          {submitStatus === "success" && (
            <p className="text-green-500 font-semibold text-center">
              Message sent successfully!
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-600 transition text-gray-900 font-bold py-3 rounded shadow"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
