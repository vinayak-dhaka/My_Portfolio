import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav className="headertop">
        <div>
          <h1 className="nameele">vinayakdev.in</h1>
        </div>
        <div className="btn">
          <a href="#home" className="btn-1">
            Home
          </a>

          <a href="#projects" className="btn-1">
            Projects
          </a>
          <a href="#education" className="btn-1">
            Education
          </a>
          <a href="#contact" className="btn-1">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
