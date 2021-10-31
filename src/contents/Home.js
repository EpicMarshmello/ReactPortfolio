import React, { Component } from "react";
import Social from "../component/Social";
import profilepic from "../img/dash.png";
import ReactTypingEffect from "react-typing-effect";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="profile" className="profilepic" />
        <ReactTypingEffect text={['My name is Teeradech','I\'m looking for internship opportunity!']} speed={100} eraseDelay={600} typingDelay={1000} eraseSpeed={100} className="typingeffect" />
        <Social />
      </div>
    );
  }
}

export default Home;
