import React from "react";

function Jumbotron() {
  return (
    <footer class="custom-footer">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a href="#about" class="nav-link footer-link">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a href="#skills" class="nav-link footer-link">
            Skills
          </a>
        </li>
        <li class="nav-item">
          <a href="#projects" class="nav-link footer-link">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a href="./assets/downloads/cv.pdf" class="nav-link footer-link">
            Resume
          </a>
        </li>
      </ul>
      <p id="copyright">© 2023 Joe Higgs</p>
    </footer>
  );
}

export default Jumbotron;
