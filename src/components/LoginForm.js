import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    console.log(this.props.onSubmit);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <h3>Email</h3>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <h3>Password</h3>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={this.props.onChange}
            values={this.props.values}
          />
          <button onSubmit={this.props.onSubmit}>Login</button>
        </form>
      </div>
    );
  }
}
