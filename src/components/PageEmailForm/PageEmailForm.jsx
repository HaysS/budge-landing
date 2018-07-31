import React from "react";
import "./PageEmailForm.css";

class PageEmailForm extends React.Component {
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
          <form name="landing-page-emails" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        		{/*Hiddin inputs necessary for use with Netlify to use free form function*/}
            <input type="hidden" name="form-name" value="landing-page-emails" />
            <input type="hidden" name="bot-field" />
            <input required type="email" name="email" value={this.state.email} placeholder={"Email"} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default PageEmailForm;
