import React from "react";

function Jumbotron() {
  return (
    <footer className="custom-footer">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a href="#about" className="nav-link footer-link">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link footer-link">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link footer-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="./assets/downloads/cv.pdf" className="nav-link footer-link">
            Resume
          </a>
        </li>
      </ul>
      <p id="copyright">© 2023 Joe Higgs</p>
    </footer>
  );
}

export default Jumbotron;
