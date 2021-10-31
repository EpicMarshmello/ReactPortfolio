import React, { Component } from "react";
import Wildcard from "../component/Wildcard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Education history </h1>
        <div className="carddiv">
          <Wildcard
            imgsrc="https://campus.campus-star.com/app/uploads/2020/10/lx-bu.jpg"
            link="https://www.sit.kmutt.ac.th/"
            title="BA in Digital Service Innovation"
            where="King Mongkut's University of Technology Thonburi"
            from="2019"
            to="Current"
          />
          <Wildcard
            imgsrc="https://i.imgur.com/M3YpPvv.jpeg"
            link="http://www.sk.ac.th/"
            title="High school diaploma"
            where="Suankularb wittayalai school"
            from="2013"
            to="2019"
          />
        </div>
      </div>
    );
  }
}

export default Education;
