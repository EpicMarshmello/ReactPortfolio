import React, { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <a
          href="https://github.com/EpicMarshmello"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/bioteeradech/"
          target="_blank"
          rel="noopender noreferrer"
        >
          <i class="fab fa-facebook"></i>
        </a>
      </div>
    );
  }
}

export default Social;
