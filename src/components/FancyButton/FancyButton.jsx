import React, { Component } from "react";
import "./FancyButton.css";

class FancyButton extends Component {
  render() {
    const { onClick, text } = this.props;

    const showText = function() {return text ? text : () => { return " " }}
    return (
      <a className="fancy-button" href="#menu" onClick={onClick ? onClick : () => { return null }}>
        <span className="word">{showText()}</span>
      </a>
    );
  }
}

export default FancyButton;
