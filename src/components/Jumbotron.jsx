import React from "react";

function Jumbotron() {
  return (
    <div className="container-fluid p-5 myhero text-center pt-5 pb-5">
      <h1 className="display-4">Otherworldly Web Design at Your Fingertips!</h1>
      <p className="lead">Actively Seeking Employment Opportunities</p>
      <hr className="my-4" />
      <p>
        Looking for out of this world Web Design? Click below to download my
        resume.
      </p>
      <a
        className="btn btn-primary btn-lg mt-4 jumboButton"
        href="./downloads/cv.pdf"
        download
        role="button"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Jumbotron;
