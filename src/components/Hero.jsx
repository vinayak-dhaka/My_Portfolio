import React from "react";

const Hero = () => {
  return (
    <section id="home" className="About_dev">
      <div className="content">
        <div className="herotext">
          <h1>Full Stack Java & React Developer</h1>

          <p>
            Hi, I am <strong>Vinayak Dhaka</strong> 👋 — a Full Stack Developer
            skilled in Java, Spring Boot, and React, building modern and
            efficient web applications, based in Bangalore, Karnataka. 📍
          </p>

          <div className="hero-links">
            <a
              className="btnn"
              href="https://github.com/vinayak-dhaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C7.5 3.6 6.4 3.9 6.4 3.9a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 10.3c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path>
              </svg>
              GitHub
            </a>

            <a
              className="btnn"
              href="https://drive.google.com/file/d/1VLMo8Z9UKrSTi8F_okzLj7m3VcHpPhN0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              Resume
            </a>

            <a
              className="btnn"
              href="https://www.linkedin.com/in/vinayakdhaka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
              >
                <path d="M4 4h16v16H4z" stroke="none" />
                <path d="M8 11v5M8 8h.01M12 16v-5a2 2 0 1 1 4 0v5" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="heroimg">
          <img src="/Web_Photo_Editor.jpg" alt="Vinayak" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
