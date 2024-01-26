import React from "react";

function Project() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 mb-3">
          <h2>Featured Project</h2>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
          <div className="primary-project primary-content">
            <div className="primary-project project-container">
              <img
                src="../images/project-screens/placeholder.png"
                className="main-project-image img-fluid"
                alt="Guardian Street Mapper screenshot"
              />
              <div className="primary-overlay">
                <div className="primary-overlay-heading">
                  <h1>Guardian Street Mapper</h1>
                  <div className="primary-overlay-text">
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
                  <div className="primary-buttons">
                    <a
                      className="visit-page-btn"
                      href="https://nonebula.github.io/GuardianStreetMapper/"
                    >
                      Visit Page
                    </a>
                    <a
                      className="visit-repo-btn"
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
