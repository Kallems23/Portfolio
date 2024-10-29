import React from "react";
import "../../GlobalStyle.css";
import "./Resume.css";
import CVImage from "./CV.png";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "CV_NoahCherblanc.pdf"; // Spécifiez le chemin vers votre fichier
    link.download = "CV_NoahCherblanc.pdf"; // Spécifiez le nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="all-resume">
      <div id="resume" className="content-resume">
        <h1 className="global-alt-title">My Resume</h1>
        <img
          src={CVImage}
          alt="CV"
          style={{ maxWidth: "1000px", width: "90%" }}
        />
      </div>
      <button className="global-button" onClick={handleDownload}>Télécharger le PDF</button>
    </div>
  );
};

export default Resume;
