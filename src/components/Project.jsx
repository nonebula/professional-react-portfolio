import React from "react";
import project from "./assets/projects.js";

function Project({ projects }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3 col-sm-12 mb-3">
          <h2>Projects</h2>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="col-md-5 col-lg-5 mb-4">
            <div className="secondary-project project secondary-content">
              <img
                src={project.image}
                className="project-image img-fluid"
                alt={project.alt}
              />
              <div className="secondary-overlay">
                <div className="secondary-text-heading">
                  <h4>{project.name}</h4>
                  <div className="secondary-overlay-text">
                    {project.description}
                    <br />
                    <b>Skills:</b> {project.skills.join(", ")}
                  </div>
                  <div className="secondary-buttons">
                    <a className="visit-page-btn" href={project.link}>
                      Visit Page
                    </a>
                    {project.repo && (
                      <a className="visit-repo-btn" href={project.repo}>
                        Visit Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Project;
