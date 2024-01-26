import React from "react";

function Jumbotron() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 col-md-3">
          <h2>Contact Me</h2>
        </div>
        <div className="row text-center contact-item">
          <div className="col-md-6 col-lg-4 mb-4">
            <i className="fas fa-phone"></i>
            <a href="tel:+447753911825">07753911825</a>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <i className="fas fa-envelope"></i>
            <a href="mailto:joe.higgs@live.com">joe.higgs@live.com</a>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/joelloydhiggs/">LinkedIn</a>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <i className="fab fa-github"></i>
            <a href="https://github.com/nonebula">GitHub</a>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <i className="fab fa-twitter"></i>
            <a href="https://twitter.com/no_nebula_8421">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
