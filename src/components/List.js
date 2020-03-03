import React, { Component } from "react";
import "./ListContainer";

export default class List extends Component {
  //console.log("he")
  render() {
    if (this.props.images) {
      return (
        <div>
          {this.props.images.map(image => (
            <div>
              <img src={image.url} />
              <h3>{image.title}</h3>
            </div>
          ))}
        </div>
      );
    } else {
      return <h1>Loading.....</h1>;
    }
  }
}
