import {
  SiAngular,
  SiCplusplus,
  SiCplusplusHex,
  SiCss3,
  SiCss3Hex,
  SiGit,
  SiGitHex,
  SiGithub,
  SiHtml5,
  SiHtml5Hex,
  SiJavascript,
  SiJavascriptHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNotion,
  SiOpengl,
  SiOpenglHex,
  SiOpenjdk,
  SiPython,
  SiPythonHex,
  SiPytorch,
  SiPytorchHex,
  SiQt,
  SiQtHex,
  SiReact,
  SiReactHex,
} from "@icons-pack/react-simple-icons";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  const skills = [
    { icon: <SiHtml5 size={40} color={SiHtml5Hex} />, label: "HTML" },

    { icon: <SiCss3 size={40} color={SiCss3Hex} />, label: "CSS3" },
    {
      icon: <SiJavascript size={40} color={SiJavascriptHex} />,
      label: "Javascript",
    },
    { icon: <SiReact size={40} color={SiReactHex} />, label: "React.JS" },
    { icon: <SiOpenjdk size={40} color="#AAAAAA" />, label: "Java" },
    
    {
      icon: <SiNodedotjs size={40} color={SiNodedotjsHex} />,
      label: "Node.JS",
    },
    { icon: <SiPython size={40} color={SiPythonHex} />, label: "Python" },
    { icon: <SiAngular size={40} color="#AAAAAA" />, label: "Angular" },
    { icon: <SiCplusplus size={40} color={SiCplusplusHex} />, label: "C++" },
    { icon: <SiGithub size={40} color="#AAAAAA" />, label: "Github" },
    { icon: <SiGit size={40} color={SiGitHex} />, label: "Git" },
    { icon: <SiPython size={40} color={SiPythonHex} />, label: "Python" },
    { icon: <SiQt size={40} color={SiQtHex} />, label: "Qt" },
    { icon: <SiOpengl size={40} color={SiOpenglHex} />, label: "OpenGL" },
    { icon: <SiPytorch size={40} color={SiPytorchHex} />, label: "Pytorch" },
    { icon: <SiNotion size={40} color="#AAAAAA" />, label: "Notion" },

  ];

  return (
    <Stack spacing={2}>
      <Typography variant="h4" align="center" gutterBottom>
        EXPERIENCE
      </Typography>
      <Grid container justifyContent="center">
        {skills.map((skill, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={index}
            style={{ textAlign: "center", marginTop: "40px" }}
          >
            {skill.icon}
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              {skill.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
export default Intro;
