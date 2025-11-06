import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Chatbox from "./components/Chatbox";
import React, { useEffect } from "react";
import "./index.css";

function App() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Chatbox />
      <Footer />
    </>
  );
}

export default App;
