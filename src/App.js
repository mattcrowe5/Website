import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-react";
import Head from "./components/header.js";
import { Header, Icon, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
      </div>
    );
  }
}

export default App;
