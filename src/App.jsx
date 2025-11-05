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
import "./index.css";

function App() {
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
