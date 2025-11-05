import React from "react";

const techStack = [
  { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
  //   { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
  //   { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "Maven", icon: "https://skillicons.dev/icons?i=maven" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Tech Stack</h2>

      <div className="skills-grid">
        {techStack.map((tech, index) => (
          <button
            key={index}
            type="button"
            className="skill-card group"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="skill-icon group-hover:-translate-y-1 transition-transform duration-300"
            />
            <p>{tech.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Skills;
