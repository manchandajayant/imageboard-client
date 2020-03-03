import React, { Component } from "react";

export default class CreateForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} />
        <h1>Title</h1>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <h1>URL</h1>
        <input
          type="text"
          name="url"
          placeholder="url"
          onChange={this.props.onChange}
          values={this.props.values}
        />
        <form />
        <button onClick={this.props.onSubmit}>Submit</button>
      </div>
    );
  }
}
