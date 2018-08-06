import React, { Component } from "react";
import "./PageImage.css";

class PageImage extends Component {
  render() {
    const { imageUrl, width } = this.props;

	if(imageUrl && width)
	    return (
	      <div className="page-image">
	          <img src={imageUrl} alt="Example Gif" style={{width: width, height: "auto"}}/>
	      </div>
	    );
    else if(imageUrl)
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
