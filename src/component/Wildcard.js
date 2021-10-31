import React, { Component } from "react";
import { NavLink } from "react-router-dom";



class Wildcard extends Component {
  render() {
    return (
      <div className="wildcard">
        <NavLink
          to={{
            pathname: `${this.props.link}`,
          }}
          target="_blank"
          className="flex flex-col"
        >
          <div className="wild-con">
            <img src={this.props.imgsrc} alt="" />
            <h3>{this.props.title}</h3>
            <h4 className="secondtext">{this.props.where}</h4>
            <h4 className="secondtext">
              {this.props.from} - {this.props.to}
            </h4>
            <li>{this.props.detail[0]}</li>
            <li>{this.props.detail[1]}</li>
            <li>{this.props.detail[2]}</li>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Wildcard;
