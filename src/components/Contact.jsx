import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get In Touch</h2>

      <div className="contact-card">
        <div className="contact-links">
          <a
            href="mailto:vinayakdhaka94@gmail.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M12 12.713l11.985-8.713H0.015L12 12.713z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713l-12-8.713V19.5a2.5 2.5 0 002.5 2.5h19a2.5 2.5 0 002.5-2.5V3.999l-12 8.714z"
              />
              <path
                fill="#fff"
                d="M0 4.5l12 8.713L24 4.5v-.5a2 2 0 00-2-2H2a2 2 0 00-2 2v.5z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713L0 4.5v15a2 2 0 002 2h2V8.713l8 6z"
              />
              <path
                fill="#4285F4"
                d="M12 12.713l12-8.213v15a2 2 0 01-2 2h-2V8.713l-8 6z"
              />
            </svg>
            <span>Email: vinayakdhaka94@gmail.com</span>
          </a>

          <a href="tel:+918867988895" className="contact-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Phone: +91 88679 88895</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vinayakdhaka/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M8 11v5M8 8h.01M12 16v-5a2 2 0 1 1 4 0v5" />
            </svg>
            <span>LinkedIn: vinayakdhaka</span>
          </a>

          <a
            href="https://discord.com/users/vinayak060150"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="contact-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 16.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h.8l.2 1.5a1 1 0 0 0 1.6.7L9 18.5h6l1.4 1.2a1 1 0 0 0 1.6-.7L18.2 18h.8a2 2 0 0 0 2-1.5z" />
            </svg>
            <span>Discord: vinayak060150</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
