import React, { Component } from "react";
import workpic from "../img/consent.jpg";
import { NavLink } from "react-router-dom";

class Skills extends Component {
  myskill = ["HTML", "CSS", "JS", "ReactJS", "SQL"];

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <div className="conskills">
          <div className="skillicon">
            <img className='myicon' src={"./html.svg"} alt="" />
            <p>{this.myskill[0]}</p>
          </div>
          <div className="skillicon">
            <img className='myicon' src={"./css.svg"} alt="" />
            <p>{this.myskill[1]}</p>
          </div>
          <div className="skillicon">
            <img className='myicon' src={"./js.svg"} alt="" />
            <p>{this.myskill[2]}</p>
          </div>
          <div className="skillicon">
            <img className='myicon' src={"./react.svg"} alt="" />
            <p>{this.myskill[3]}</p>
          </div>
          <div className="skillicon">
            <img className='myicon' src={"./sql.svg"} alt="" />
            <p>{this.myskill[4]}</p>
          </div>
        </div>
        <div className="example">
          <NavLink
            to={{
              pathname: `${"https://epicmarshmello.github.io/project-nuvel/"}`,
            }}
            target="_blank"
            className="flex flex-col"
          >
            <img src={workpic} alt="" />
          </NavLink>
          <div>
            <h4 className="secondtext">
              This is my website class project ! A responsive campaign website
              about sexual consent using HTML and CSS with Google Analytic !
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
