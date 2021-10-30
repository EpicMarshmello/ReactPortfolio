import React, { Component } from "react";
import Wildcard from "../component/Wildcard"
class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education history </h1>
        <Wildcard title="MilerDev Softweare Enginerring" where="University" from="2019" to="Current" />
        <Wildcard title="MilerDev" where="High school" from="2013" to="2019" />
      </div>
    );
  }
}

export default Education;
