import React from "react";

function Jumbotron() {
  return (
    <div class="container-fluid p-5 myhero text-center pt-5 pb-5">
      <h1 class="display-4">Otherworldly Web Design at Your Fingertips!</h1>
      <p class="lead">Actively Seeking Employment Opportunities</p>
      <hr class="my-4" />
      <p>
        Looking for out of this world Web Design? Click below to download my
        resume.
      </p>
      <a
        class="btn btn-primary btn-lg mt-4 jumboButton"
        href="./assets/downloads/cv.pdf"
        download
        role="button"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Jumbotron;
