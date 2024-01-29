import React from "react";
import skills from "./assets/skills.js";

function Skill({skills}) {
    return (
      <div className="col-lg-10 col-md-9 col-sm-12">
        <div className="skill-container">
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-3">
                <div className="skill-item">
                  <div className="skill-content">
                    <img
                      src={skill.image}
                      className="skill-logo img-fluid"
                      alt={skill.alt}
                    />
                    <div className="skill-overlay">
                      <div className="skill-text-heading">
                        <h3>{skill.name}</h3>
                        <div className="skill-overlay-text">
                          {skill.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
export default Skill;