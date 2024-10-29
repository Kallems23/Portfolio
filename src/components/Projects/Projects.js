import React from "react";
import "../../GlobalStyle.css";
import "./Projects.css";

import {
  SiAngular,
  SiAngularHex,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJupyter,
  SiNotion,
  SiOpengl,
  SiOpenjdk,
  SiPython,
  SiPytorch,
  SiReact,
  SiTypescript,
  SiWebgl,
} from "@icons-pack/react-simple-icons";
import ECOMImage from "./ECOM.png";
import {
  SiAzuredevops,
  SiAzurepipelines,
  SiMicrosoftazure,
} from "react-icons/si";

const ECOM = () => {
  return (
    <div className="projects-zone">
      <h1>E-commerce website project</h1>
      <div className="logo-inline">
        <span> Sept. 24 - Today</span>
        <SiAngular className="tech-icon" size={50} />
        <SiDocker className="tech-icon" size={50} />
        <SiMicrosoftazure className="tech-icon" size={50} />
        <SiGit className="tech-icon" size={50} />
        <SiGithub className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        The pedagogical objective of the eCOM course is project-based learning
        to design, develop, and deploy ergonomic Internet services (e-commerce,
        service exchanges, social networks, etc.) as a team. The service theme
        is renewed each year and is proposed by an external "client" to Polytech
        Grenoble. Technologies cover frontend SPA components, backend, and
        databases. Microservices architecture is advocated. Each team organizes
        development and operations (DevOps) by applying the SCRUM method. The
        MVP of the service is deployed with an IaaS cloud host. Other aspects
        considered include code quality, vulnerability, GDPR compliance,
        resilience, and more
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Manage a 6 people agile process (SCRUM Master)</li>
        <li>Work with a real client</li>
        <li>Work on the front-end part of the website</li>
      </ul>
    </div>
  );
};

const DeepLearning = () => {
  return (
    <div className="projects-zone">
      <h1>DeepLearning: Image classifier</h1>
      <div className="logo-inline">
        <span> March 2024</span>
        <SiPython className="tech-icon" size={50} />
        <SiPytorch className="tech-icon" size={50} />
        <SiJupyter className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        Creation of a simple image sorter using a neural network. Who, with a
        given image, gives the animal he has on it from a given list
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Construct a database with usefull image</li>
        <li>Create a neuronal network</li>
        <li>Learn independently</li>
      </ul>
    </div>
  );
};

const Gantt = () => {
  return (
    <div className="projects-zone">
      <h1>Gantt chart in TypeScript and OpenGL</h1>
      <div className="logo-inline">
        <span> Jan. 24 - April 24</span>
        <SiTypescript className="tech-icon" size={50} />
        <SiOpengl className="tech-icon" size={50} />
        <SiWebgl className="tech-icon" size={50} />
        <SiGit className="tech-icon" size={50} />
        <SiNotion className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        In this project we want to adapt the interactive Speedscope viewer
        initially intended for application performance profiles, to visualize
        traces of task and resource managers, in particular those used in the
        Evalys project. First, it will be a question of defining a specific
        format, secondly, it will be a question of adding information dedicated
        to the interface. Finally, we can also consider the problem of
        visualizing the activity of a manager in real time.
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Reverse-engeneering an project without documentation</li>
        <li>
          Transform a monitoring application into an application displaying a
          gantt chart
        </li>
      </ul>
    </div>
  );
};

const Potipipi = () => {
  return (
    <div className="projects-zone">
      <h1>Full Game Engine + Game : PTPP</h1>
      <div className="logo-inline">
        <span> Oct. 23 - Nov. 23</span>
        <SiOpenjdk className="tech-icon" size={50} />
        <SiGit className="tech-icon" size={50} />
        <SiGitlab className="tech-icon" size={50} />
        <SiNotion className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        Not being fully satisfied with the work done on the team project: Game
        Engine + Game : Nightmare Monster Attack, I wanted to take on a similar
        project, this time working independently. More precisely, rebuild the
        game engine from a completely blank project and not from a project given
        by the professors.
        https://www.youtube.com/watch?v=lYp3QB-LROg&ab_channel=NoahCherblanc
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Deep conception</li>
        <li>Learn independently</li>
      </ul>
    </div>
  );
};

const RPG = () => {
  return (
    <div className="projects-zone">
      <h1>Game Engine + Game : Nightmare Monster Attack</h1>
      <div className="logo-inline">
        <span> May 23 - June 23</span>
        <SiOpenjdk className="tech-icon" size={50} />
        <SiGit className="tech-icon" size={50} />
        <SiGitlab className="tech-icon" size={50} />
        <SiNotion className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        The project consists in creating a game engine based on automata and
        using it to create a game. - ALL game entities have a behavior defined
        by an automaton - The game parses a file at startup, which indicates the
        behavior of the game entities, so it's totally customizable. - In
        particular, your game will feature two player entities controlled by
        keyboard, mouse or joystick via automata Bots whose behavior is defined
        by automata - borderless universes (in at least one dimension)
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Manage 7 people work (Project Manager)</li>
        <li>Using Automate to manage the game AI</li>
        <li>Organizing large-scale code (MVC)</li>
      </ul>
    </div>
  );
};

const NDLINFO23 = () => {
  return (
    <div className="projects-zone">
      <h1>Nuit de l'info 2023</h1>
      <div className="logo-inline">
        <span> Dec. 23</span>
        <SiReact className="tech-icon" size={50} />
        <SiGit className="tech-icon" size={50} />
        <SiGithub className="tech-icon" size={50} />
      </div>
      <h2>Presentation</h2>
      <span>
        The Nuit de l’Info is a national competition that brings together
        students, teachers and companies to work together on the development of
        a web application. The Night takes place every year, from the first
        Thursday of December, sunset, until sunrise the next morning.
        Participants have one night to propose, implement and package a Web 2.0
        application.
      </span>
      <h2>Related skills</h2>
      <ul>
        <li>Manage 7 people work (Project Manager)</li>
        <li>Learn new tools in a very quick time</li>
      </ul>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="content-projects">
      <h1 className="global-title">My Projects</h1>
      <ECOM />
      <DeepLearning />
      <Gantt />
      <NDLINFO23 />
      <Potipipi />
      <RPG />
    </div>
  );
};

export default Projects;
