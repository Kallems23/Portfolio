import React from "react";
import "../../GlobalStyle.css";


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

import { Card, CardContent, Typography, Stack, List, ListItem, ListItemText } from "@mui/material";


const ECOM = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
          E-commerce website project
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        Sept. 24 - Today
        </Typography>

        <SiAngular className="tech-icon" size={40} />
        <SiDocker className="tech-icon" size={40} />
        <SiGit className="tech-icon" size={40} />
        <SiGithub className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
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
        </Typography>
       
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Manage a 6 people agile process (SCRUM Master)</li>
        <li>Work with a real client</li>
        <li>Work on the front-end part of the website</li>
      </ul>
          </CardContent>
    </Card>
  );
};

const DeepLearning = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
        DeepLearning: Image classifier
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        March 2024
        </Typography>

        <SiPython className="tech-icon" size={40} />
        <SiPytorch className="tech-icon" size={40} />
        <SiJupyter className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
        Creation of a simple image sorter using a neural network. Who, with a given image, gives the animal he has on it from a given list
        </Typography>
       
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Construct a database with usefull image</li>
        <li>Create a neuronal network</li>
        <li>Learn independently</li>
      </ul>
          </CardContent>
    </Card>
  );
};

const Gantt = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
        Gantt chart in TypeScript and OpenGL
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        Jan. 24 - April 24
        </Typography>

        <SiTypescript className="tech-icon" size={40} />
        <SiOpengl className="tech-icon" size={40} />
        <SiWebgl className="tech-icon" size={40} />
        <SiGit className="tech-icon" size={40} />
        <SiNotion className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
        In this project we want to adapt the interactive Speedscope viewer initially intended for application performance profiles, to visualize traces of task and resource managers, in particular those used in the Evalys project. First, it will be a question of defining a specific format, secondly, it will be a question of adding information dedicated to the interface. Finally, we can also consider the problem of visualizing the activity of a manager in real time.
        </Typography>
       
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Reverse-engeneering an project without documentation</li>
        <li>
          Transform a monitoring application into an application displaying a
          gantt chart
        </li>
      </ul>
          </CardContent>
    </Card>
  );
};

const Potipipi = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
        Full Game Engine + Game : PTPP
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        Oct. 23 - Nov. 23
        </Typography>

        <SiOpenjdk className="tech-icon" size={40} />
        <SiGit className="tech-icon" size={40} />
        <SiGitlab className="tech-icon" size={40} />
        <SiNotion className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
        Not being fully satisfied with the work done on the team project: Game Engine + Game : Nightmare Monster Attack, I wanted to take on a similar project, this time working independently. More precisely, rebuild the game engine from a completely blank project and not from a project given by the professors.       
        </Typography>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Deep conception</li>
        <li>Learn independently</li>
      </ul>
          </CardContent>
    </Card>
  );
};

const RPG = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
        Game Engine + Game : Nightmare Monster Attack
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        May 23 - June 23
        </Typography>

        <SiOpenjdk className="tech-icon" size={40} />
        <SiGit className="tech-icon" size={40} />
        <SiGitlab className="tech-icon" size={40} />
        <SiNotion className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
        The project consists in creating a game engine based on automata and using it to create a game. - ALL game entities have a behavior defined by an automaton - The game parses a file at startup, which indicates the behavior of the game entities, so it's totally customizable. - In particular, your game will feature two player entities controlled by keyboard, mouse or joystick via automata Bots whose behavior is defined by automata - borderless universes (in at least one dimension)        </Typography>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Manage 7 people work (Project Manager)</li>
        <li>Using Automate to manage the game AI</li>
        <li>Organizing large-scale code (MVC)</li>
      </ul>
          </CardContent>
    </Card>
  );
};

const NDLINFO23 = () => {
  return (
    <Card>
      <CardContent>
      <Stack spacing={2}>
        <Typography variant="h4" component="div"  sx={{ fontWeight: 'bold' }}>
        Nuit de l'info 2023
        </Typography>
        <Stack spacing={2} direction="row" sx={{
        
        justifyContent: "flex-start",
        alignItems: "center",
        }}>
        <Typography variant="h7" component="div">
        Dec. 23
        </Typography>

        <SiOpenjdk className="tech-icon" size={40} />
        <SiGit className="tech-icon" size={40} />
        <SiGitlab className="tech-icon" size={40} />
        <SiNotion className="tech-icon" size={40} />
        </Stack>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Presentation
        </Typography>
        <Typography variant="body" >
        The Nuit de l’Info is a national competition that brings together students, teachers and companies to work together on the development of a web application. The Night takes place every year, from the first Thursday of December, sunset, until sunrise the next morning. Participants have one night to propose, implement and package a Web 2.0 application.
            </Typography>
        <Typography variant="h5" component="div"  sx={{ fontWeight: 'bold' }} >
        Related skills
        </Typography>
        </Stack>
        <ul>
        <li>Manage 7 people work (Project Manager)</li>
        <li>Learn new tools in a very quick time</li>
      </ul>
          </CardContent>
    </Card>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="content-projects">
      <h1 className="global-title">My Projects</h1>
      <Stack spacing={2}>
      <ECOM />
      <DeepLearning />
      <Gantt />
      <NDLINFO23 />
      <Potipipi />
      <RPG />
      </Stack>
    </div>
  );
};

export default Projects;
