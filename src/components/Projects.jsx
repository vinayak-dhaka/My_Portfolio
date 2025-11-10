import React from "react";

const projects = [
  {
    title: "Far Away – AI Trip Packer",
    description:
      "Developed an AI-powered web application that generates smart packing list of items based on trip details with custom item support.",
    image: "/trip-ai.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Spring Boot",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=spring",
      },
      {
        name: "Spring AI",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=ai",
      },
      {
        name: "OpenAI API",
        color: "bg-purple-500/20 text-purple-400",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },
      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
      {
        name: "AWS",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=aws",
      },
    ],
    live: "https://faraaway.netlify.app/",
    code: "https://github.com/vinayak-dhaka/FarAway",
    video: "https://www.youtube.com/watch?v=fKmWAGtVqPo",
  },
  {
    title: "Shoe-Store",
    description:
      "Developed a complete Nike-themed online store supporting product browsing, cart management, and order placement with integrated APIs.",
    image: "/shoestore.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Redux",
        color: "bg-purple-400/20 text-purple-300",
        icon: "https://skillicons.dev/icons?i=redux",
      },
      {
        name: "React Router",
        color: "bg-pink-400/20 text-pink-300",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original-wordmark.svg",
      },

      {
        name: "Spring Boot",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=spring",
      },
      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
      {
        name: "Render",
        color: "bg-pink-400/20 text-pink-300",
        icon: "https://skillicons.dev/icons?i=remix",
      },
    ],
    frontend: "https://github.com/vinayak-dhaka/Nike-Frontend",
    backend: "https://github.com/vinayak-dhaka/Nike_Backend-",
    live: "https://nikeshoestoree.netlify.app/",
  },
  {
    title: "Cardio Map (Workout Tracking App)",
    description:
      "Built an interactive web app to log and visualize cardio workouts (running/cycling) on a real-time map using geolocation and Leaflet.js.",
    image: "/cardiomap.png",
    tech: [
      {
        name: "JavaScript",
        color: "bg-yellow-400/20 text-yellow-400",
        icon: "https://skillicons.dev/icons?i=javascript",
      },
      {
        name: "Leaflet.js",
        color: "bg-green-400/20 text-green-400",
        icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      },
      {
        name: "CSS",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=css",
      },
      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
    ],

    live: "https://67f2cfa3756bc245e176299a--dulcet-khapse-2a6172.netlify.app/",
    code: "https://github.com/vinayak-dhaka/Cardiomap",
  },
  {
    title: "Portfolio Website",
    description:
      "Developed a modern personal portfolio built with React and Spring AI for the personal assistant feature . Fully responsive with smooth animations and clean design.",
    image: "/portfolio.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "Spring Boot",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=spring",
      },
      {
        name: "Spring AI",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=ai",
      },
      {
        name: "OpenAI API",
        color: "bg-purple-500/20 text-purple-400",
        icon: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png",
      },

      {
        name: "Netlify",
        color: "bg-blue-400/20 text-blue-300",
        icon: "https://cdn.brandfetch.io/idoW6GB9ca/theme/dark/idTPYT6Fjj.svg?c=1bxid64Mup7aczewSAYMX&t=1746443892139",
      },
      {
        name: "AWS",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=aws",
      },
    ],
    live: "https://www.vinayakdev.in/",
    code: "https://github.com/vinayak-dhaka/My_Portfolio",
  },
  {
    title: "Dog Behavior Prediction ",
    description:
      "A CNN-based deep learning model that predicts dog emotions (happy, sad, angry) and detects aggression from real-world datasets.",
    image: "/dogpredict.png",
    tech: [
      {
        name: "Python",
        color: "bg-yellow-500/20 text-yellow-400",
        icon: "https://skillicons.dev/icons?i=python",
      },
      {
        name: "TensorFlow",
        color: "bg-orange-400/20 text-orange-300",
        icon: "https://skillicons.dev/icons?i=tensorflow",
      },
      {
        name: "VS Code",
        color: "bg-blue-500/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=vscode",
      },
    ],

    code: "https://github.com/vinayak-dhaka/Automated-behavioral-analysis-of-stray-dogs",
    tag: "Group Project",
  },
  {
    title: "Kubernetes Failure Predictor ",
    description:
      "An ML-based system predicting pod crashes and resource bottlenecks in Kubernetes clusters using real-time metrics and historical data.",
    image: "/kubernetes.png",
    tech: [
      {
        name: "React",
        color: "bg-blue-600/20 text-blue-300",
        icon: "https://skillicons.dev/icons?i=react",
      },
      {
        name: "FastAPI",
        color: "bg-green-600/20 text-green-400",
        icon: "https://skillicons.dev/icons?i=fastapi",
      },
      {
        name: "Docker",
        color: "bg-blue-500/20 text-blue-400",
        icon: "https://skillicons.dev/icons?i=docker",
      },
      {
        name: "AWS",
        color: "bg-orange-500/20 text-orange-300",
        icon: "https://skillicons.dev/icons?i=aws",
      },
    ],
    code: "https://github.com/vinayak-dhaka/Kubernetes_phase2",
    live: "https://68000d22b820d52237f84c7d--polite-dieffenbachia-accee2.netlify.app/",
    video: "https://www.youtube.com/watch?v=N3dZkDTH7Do",
    tag: "Group Project",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.live} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </a>

            <div className="project-content">
              <div className="flex justify-between items-center">
                <h3>{project.title}</h3>
                {project.tag && (
                  <span className="group-tag">{project.tag}</span>
                )}
              </div>

              <p>{project.description}</p>

              <div className="tech-badges">
                {project.tech.map((t, i) => (
                  <div key={i} className={`tech-pill ${t.color}`}>
                    <img src={t.icon} alt={t.name} />
                    <p>{t.name}</p>
                  </div>
                ))}
              </div>

              <div className="project-links">
                {project.frontend && (
                  <a
                    href={project.frontend}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Frontend Code
                  </a>
                )}
                {project.backend && (
                  <a
                    href={project.backend}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Backend Code
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Live Demo
                  </a>
                )}
                 {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noreferrer"
                    className="btnn"
                  >
                    Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
