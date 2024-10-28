import React from "react";
import "./Header.css"; // si vous ajoutez un fichier CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Noah Cherblanc</div>
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
