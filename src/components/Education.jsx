import React from "react";

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">Education</h2>

      <div className="education-card">
        <div className="education-item">
          <p className="edu-degree">
            <strong>Bachelor of Engineering</strong> — Information Science
            Engineering
          </p>
          <p className="edu-detail">REVA University (2022 – 2026)</p>
        </div>

        <div className="education-item">
          <p className="edu-degree">
            <strong>High School</strong> — Class 10th & 12th
          </p>
          <p className="edu-detail">
            {" "}
            Saint Angels Public School (2020 – 2022)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
