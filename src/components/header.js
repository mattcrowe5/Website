import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

class Head extends React.Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          <Header.Content>Matt Crowe</Header.Content>
          <Header.Subheader>Full Stack Web Developer </Header.Subheader>
        </Header>
        <Image centered size="medium" src="" circular />
      </div>
    );
  }
}

export default Head;
