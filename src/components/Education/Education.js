import React from "react";
import { Steps } from "antd";
import "../../GlobalStyle.css";
import "./Education.css";

const Education = () => {
  return (
    <div id="education" className="education-content">
      <h1 className="education-title">Education</h1>
      <Steps
        className="chronologie"
        progressDot
        direction="vertical"
        items={[
          {
            title: "2022-2025 - Polytech Grenoble",
            description: "Engineering school, IT formation",
          },
          {
            title: "2020-2022 - Polytech Clermont",
            description: "Polytech engineering school preparation",
          },
          {
            title: "2017-2020 - Lycée Lafayette Brioude",
            description: "Scientific baccalaureate",
          },
        ]}
      />
    </div>
  );
};

export default Education;
