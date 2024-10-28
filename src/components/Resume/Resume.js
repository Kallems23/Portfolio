import React from "react";
import "../../GlobalStyle.css";
import "./Resume.css";
import CVImage from "./CV.png";

const Resume = () => {
  return (
    <div id="resume" className="content-resume">
      <h1 className="global-alt-title">My Resume</h1>
      <img src={CVImage} alt="CV" style={{ maxWidth: "1000px", width: "90%" }} />
    </div>
  );
};

export default Resume;
