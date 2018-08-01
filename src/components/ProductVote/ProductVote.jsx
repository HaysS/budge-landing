import React from "react";
import "./ProductVote.css";

class ProductVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()

    this.setState({[e.target.name]: e.target.value});
  }

  render() {
  	const { text } = this.props;

    return(
      <div>
        <div>
          <h1 className={"title"}>Which idea do you want to build the most?</h1>
          <form name="landing-page-emails" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        		{/*Hiddin inputs necessary for use with Netlify hosting to use free form function*/}
            <input type="hidden" name="form-name" value="landing-page-emails" />
            <input type="hidden" name="bot-field" />
            <label>Mobile app 1 </label><input required type="radio" name="vote" value="1" /><br />
            <label>Mobile app 2 </label><input required type="radio" name="vote" value="2" /><br />
            <label>Mobile app 3 </label><input required type="radio" name="vote" value="3" /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default ProductVote;
