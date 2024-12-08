import { Card, CardContent, Typography, Grid, Item, Stack } from '@mui/material';
import React from "react";
import { SiNotion, SiNotionHex, SiCss3, SiReact, SiHtml5, SiOpenjdk, SiJavascript, SiNodedotjs, SiPython, SiReactHex, SiHtml5Hex, SiOpenjdkHex, SiJavascriptHex, SiNodedotjsHex, SiPythonHex, SiCss3Hex} from '@icons-pack/react-simple-icons';






const Intro = () => {
  const skills = [
    { icon: <SiNotion size={40} color="#AAAAAA" />, label: 'Notion' },
    { icon: <SiCss3 size={40} color={SiCss3Hex} />, label: 'CSS3' },
    { icon: <SiReact size={40} color={SiReactHex} />, label: 'React.JS' },
    { icon: <SiHtml5 size={40} color={SiHtml5Hex} />, label: 'HTML' },
    { icon: <SiOpenjdk size={40} color={SiOpenjdkHex} />, label: 'Java' },
    { icon: <SiJavascript size={40} color={SiJavascriptHex} />, label: 'Javascript' },
    { icon: <SiNodedotjs size={40} color={SiNodedotjsHex} />, label: 'Node.JS' },
    { icon: <SiPython size={40} color={SiPythonHex} />, label: 'Python' },
  ];

  return (
  <Stack spacing={2}>
      <Typography variant="h4" align="center" gutterBottom>
        EXPERIENCE
      </Typography>
      <Grid container justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index} style={{ textAlign: 'center', marginTop: '40px' }}>
            {skill.icon}
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              {skill.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
export default Intro;
