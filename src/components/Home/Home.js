import React from "react";
import "./Home.css";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="all-home">
      <span id="home" className="MainText fade-in">
        Hello, my name is Noah, a young student in the 5th year of computer
        engineering school. Currently, I am looking for a 22-week internship
        outside of France.
      </span>
      
      <Banner />
    </div>
  );
};
export default Home;
