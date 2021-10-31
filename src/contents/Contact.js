import React, { Component } from "react";
import Social from "../component/Social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic"> Contact</h1>
        <h3>Address: Thung Khru, Thailand, 10140</h3>
        <h3>Phone: +66 98 987 9855</h3>
        <h3>E-mail: teeradech.53627@mail.kmutt.ac.th</h3>
        <h3>Personal E-mail: bioteeradej@gmail.com</h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
