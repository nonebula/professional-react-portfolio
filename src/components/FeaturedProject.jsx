import React from "react";

function Project() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-2 col-md-3 col-sm-12 mb-3">
          <h2>Featured Project</h2>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
          <div class="primary-project primary-content">
            <div class="primary-project project-container">
              <img
                src="./assets/images/project-screens/placeholder.png"
                class="main-project-image img-fluid"
                alt="Guardian Street Mapper screenshot"
              />
              <div class="primary-overlay">
                <div class="primary-overlay-heading">
                  <h1>Guardian Street Mapper</h1>
                  <div class="primary-overlay-text">
                    An independent project developed to inform citizens and
                    track thefts and robberies. This project was developed after
                    I witnessed three phone thefts in the same area within a
                    two-week period. Too many phone thefts take place nowadays,
                    and many people have no idea how to respond to the
                    situation. This page contains information and advice, as
                    well as giving users the option to log an incident without
                    sharing personal information.
                    <br />
                    <b>Skills:</b> HTML, CSS. GitHub, JavaScript, DOM, API.
                  </div>
                  <div class="primary-buttons">
                    <a
                      class="visit-page-btn"
                      href="https://nonebula.github.io/GuardianStreetMapper/"
                    >
                      Visit Page
                    </a>
                    <a
                      class="visit-repo-btn"
                      href="https://github.com/nonebula/GuardianStreetMapper"
                    >
                      Visit Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
