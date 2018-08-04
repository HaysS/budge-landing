import React, { Component } from "react";
import "./FancyButton.css";

class FancyButton extends Component {
  render() {
    const { onClick, text } = this.props;

    return (
      <a className="fancy-button" href="#menu" onClick={onClick ? onClick : () => { return null }}>
        <span className="word">Learn More</span>
      </a>
    );
  }
}

export default FancyButton;
