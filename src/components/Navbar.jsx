import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="https://github.com/nonebula">
            Joe Higgs
          </a>
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-light"></span>
          </button>
          <div className="collapse navbar-collapse navbar-light" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  <i className="fas fa-user"></i>About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  <i className="fas fa-code"></i>Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#featured-project">
                  <i className="fas fa-folder-open"></i>Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <i className="fas fa-envelope"></i>Contact Me
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
