import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import ListContainer from "./components/ListContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hello World</h1>
          <ListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
