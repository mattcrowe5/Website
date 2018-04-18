import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-react";
import Head from "./components/header.js";
import ContentTabs from "./components/contentTabs.js";
import Footer from "./components/footer.js";
import { Header, Grid } from "semantic-ui-react";

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
        <Footer />
      </div>
    );
  }
}

export default App;
