import React from "react";
import "./PageEmailForm.css";

class PageEmailForm extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return <h2 className="page-description">{text}</h2>;
    }
    return null;
  }
}

export default PageEmailForm;
