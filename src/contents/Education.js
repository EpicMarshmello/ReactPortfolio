import React, { Component } from "react";
import Wildcard from "../component/Wildcard";

var schoolDetail = [
  "Member of SK Cheer club",
  "Course Completed: Mathematic & Science",
  "GPA 3.4",
];
var uniDetail = [
  " Continuing education in Digital Application Production",
  "Relevant Coursework: Programming & Web Technology",
  "GPA 3.4",
];

class Education extends Component {

  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education history </h1>
        <div className="carddiv">
          <Wildcard
            imgsrc="./uni.jpg"
            link="https://www.sit.kmutt.ac.th/"
            title="BA in Digital Service Innovation"
            where="King Mongkut's University of Technology Thonburi"
            from="2019"
            to="Current"
            detail={uniDetail}
          />
          <Wildcard
            imgsrc="./school.jpg"
            link="http://www.sk.ac.th/"
            title="High school diaploma"
            where="Suankularb wittayalai school"
            from="2013"
            to="2019"
            detail={schoolDetail}
          />
        </div>
      </div>
    );
  }
}

export default Education;
