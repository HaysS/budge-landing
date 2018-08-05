import React, { Component } from "react";
import "./PageImage.css";

class PageImage extends Component {
  render() {
    const { imageUrl } = this.props;

    if(imageUrl)
	    return (
	      <div className="page-image">
	          <img src={imageUrl} alt="Example Gif" style={{maxWidth: "100%", height: "auto"}}/>
	      </div>
	    );
	else
		return null
  }
}

export default PageImage;
