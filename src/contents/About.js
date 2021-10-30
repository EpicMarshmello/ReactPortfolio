import React, { Component } from "react";
import profilepic from "../img/dash.png";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic"> About me</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <h3>You can call me Bio!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut vitae
          saepe accusamus corporis dolore sint beatae ducimus esse et?
          Repudiandae dolor impedit sed eum facere nesciunt nostrum totam quod?
        </p>
      </div>
    );
  }
}

export default About;
