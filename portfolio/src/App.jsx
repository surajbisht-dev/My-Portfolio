import React from "react";

// Sections
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
// import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        {/* <Resume /> */}
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
