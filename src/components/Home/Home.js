import React from "react";
import "./Home.css";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <span id="home" className="MainText fade-in">
        Hello, my name is Noah, a young student in the 5th year of computer
        engineering school. Currently, I am looking for a 22-week internship
        outside of France.
      </span>
      <div className="content-home">
        <span className="content-text">
          I have acquired solid skills in software development, both during my
          studies and through several academic and professional projects. I have
          worked in particular on the development of a game engine with a user
          interface in Java, and I am currently working on a project to create
          an e-commerce site for a real client, in a team of 6 people.
        </span>
      </div>
      <Banner />
    </div>
  );
};
export default Home;
