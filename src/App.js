import "./App.css";
import React, { useState, useEffect } from 'react';
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { createTheme, ThemeProvider, CssBaseline, Switch, Stack } from '@mui/material';



function App() {

  const [darkMode, setDarkMode] = useState(false);

// Créer un thème personnalisé
const lightTheme = createTheme({  
  palette: {
    mode: 'light',
    primary: {
      main: '#197555', // couleur bleue
    },
    secondary: {
      main: '#dc004e', // couleur rose
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif', // Définir la police par défaut
  },
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  background: {
    default: '#fafafa', // Couleur de fond pour le mode clair
    paper: '#ffffff',   // Couleur de fond pour les éléments comme les cartes
  },
  text: {
    primary: '#000000', // Couleur du texte principal pour le mode clair
    secondary: '#555555', // Couleur du texte secondaire
  },
});

// Créer un thème personnalisé
const darkTheme = createTheme({
  
  palette: {
    mode: 'dark',  
    primary: {
      main: '#197555', // couleur bleue
    },
    secondary: {
      main: '#dc004e', // couleur rose
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif', // Définir la police par défaut
  },
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  background: {
    default: '#121212', // Couleur de fond pour le mode sombre
    paper: '#1d1d1d',   // Couleur de fond pour les éléments comme les cartes
  },
  text: {
    primary: '#ffffff', // Couleur du texte principal pour le mode sombre
    secondary: '#bbbbbb', // Couleur du texte secondaire
  },
});

  // Permet de basculer entre les modes clair et sombre avec un switch
  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Détecter automatiquement la préférence du système de l'utilisateur
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPreference);
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : darkTheme}>
    <CssBaseline />
    <div className="App">
      <Header />


      
        <Stack spacing={10} style={{ padding: '40px 16px' }}>
        <Home />
        <Intro />
        <Projects />
        <Resume />
        <Contact />
        </Stack>
    </div>
    </ThemeProvider>
  );
}

export default App;
