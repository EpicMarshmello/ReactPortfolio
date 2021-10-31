import React, { Component } from "react";
import profilepic from "../img/dash.png";

class About extends Component {
  render() {
    return (
      <div className="condiv about">
        <h1 className="subtopic"> About me</h1>
        <img src={profilepic} alt="profile" className="profilepic" />
        <h3>Greeting! I'm Teeradech but you can call me Bio!</h3>
        <p>
          An independent and enthusiastic junior student at KMUTT. Searching for
          a Front End Developer’s position where my education and work
          experience will have valuable application and compatibility which
          maximizes efficiency and team work
        </p>
      </div>
    );
  }
}

export default About;
