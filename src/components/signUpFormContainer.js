import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUpFormContainer extends Component {
  state = { emai: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    console.log("clicked");
    this.props.signUp(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signUp })(SignUpFormContainer);
