import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id='about'>
      <h2>About Me</h2>
      <p>I am currently learning the React JavaScript framework in an effort to improve my programming skills and knowlege.
       This website was built using React.</p>
      <img src={image} alt='I made this'></img>
    </div>
  );
}

export default About;
