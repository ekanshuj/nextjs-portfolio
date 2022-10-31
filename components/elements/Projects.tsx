// https://codepen.io/katywellington91/pen/PoGVzwZ
// https://freefrontend.com/react-code-examples/

import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="w-full h-full grid place-items-center">
      PROJECTS
      <Tilt>
        <div className="h-[350px] w-[500px] bg-yellow-500 flex justify-center items-center">
          <h1>Chat-Application</h1>
          <p>MERN Project</p>
        </div>
      </Tilt>
      <Tilt>
        <div className="h-[350px] w-[500px] bg-yellow-500 flex justify-center items-center">
          <h1>Chat-Application</h1>
          <p>MERN Project</p>
        </div>
      </Tilt>
    </div>
  );
};

export default Projects;
