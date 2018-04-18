import React from "react";
import { Segment, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment.Group horizontal id="footer">
      <Segment>
        <a href="https://github.com/mattcrowe5">
          <Icon name="github" /> Github
        </a>
      </Segment>
      <Segment>
        <a href="https://www.linkedin.com/in/matthew-crowe-b27a0197/">
          <Icon name="github" /> LinkedIn
        </a>
      </Segment>
      <Segment>
        <a href="mailto:crowe.matthew5@gmail.com">
          <Icon name="mail" /> Email Me
        </a>
      </Segment>
    </Segment.Group>
  );
};

export default Footer;
