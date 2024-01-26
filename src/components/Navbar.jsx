import React from "react";

function Navbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">
          <a class="navbar-brand" href="https://github.com/nonebula">
            Joe Higgs
          </a>
          <button
            class="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon navbar-light"></span>
          </button>
          <div class="collapse navbar-collapse navbar-light" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#about">
                  <i class="fas fa-user"></i>About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills">
                  <i class="fas fa-code"></i>Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#featured-project">
                  <i class="fas fa-folder-open"></i>Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  <i class="fas fa-envelope"></i>Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
