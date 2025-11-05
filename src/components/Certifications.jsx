import React from "react";

const certs = [
  {
    name: "Blockchain",
    provider: "NPTEL",
    logo: "NPTEL.jpg",
    link: "https://drive.google.com/file/d/1ehqiGSyb-fHVIaKjm7ya8-gzo8AxvgQa/view?usp=sharing",
  },
  {
    name: "Agile & DevOps",
    provider: "Infosys Springboard",
    logo: "Springboard.png",
    link: "https://drive.google.com/file/d/1fqAaWx9U3bulbK8mH1iYGZ0-g3BCMZht/view?usp=sharing",
  },
  {
    name: "Cloud Computing",
    provider: "Infosys Springboard",
    logo: "Springboard.png",
    link: "https://drive.google.com/file/d/1A5kXy9pZGYP8PhgigQZGv-72I5TGl-an/view?usp=sharing",
  },
  {
    name: "React",
    provider: "Udemy",
    logo: "Udemy.png",
    link: "https://drive.google.com/file/d/1Q-YAGtgLzTDMso2tMvmxrrMMxaAk3zTw/view?usp=sharing",
  },
  {
    name: "Agentforce Specialist",
    provider: "Salesforce",
    logo: "Salesforce.webp",
    link: "https://drive.google.com/file/d/1E1ur4UsBXAaL9g1E7XzG6CO_zAT13NJb/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section className="certs-section" id="certifications">
      <h2 className="certs-heading">Certifications</h2>

      <div className="certs-grid">
        {certs.map((c, idx) => (
          <div key={idx} className="cert-card">
            <div className="cert-top">
              <img
                src={c.logo}
                alt={`${c.provider} logo`}
                className="cert-logo"
              />
              <div className="cert-meta">
                <p className="cert-name">{c.name}</p>
                <p className="cert-provider">{c.provider}</p>
              </div>
            </div>

            <div className="cert-actions">
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
                aria-label={`View ${c.name} certificate`}
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
