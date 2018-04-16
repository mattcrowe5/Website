import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-react";
import Head from "./components/header.js";
import ContentTabs from "./components/contentTabs.js";
import { Header, Grid } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Grid>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <ContentTabs />
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid>
      </div>
    );
  }
}

export default App;
