import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

class Head extends React.Component {
  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="code" circular />
          <Header.Content>Matt Crowe</Header.Content>
        </Header>
        <Image centered size="large" src="" />
      </div>
    );
  }
}

export default Head;
