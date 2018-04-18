import React from "react";
import { Segment, Icon, Grid } from "semantic-ui-react";

const Footer = () => {
  return (
    <Grid>
      <Grid.Column width={4} />
      <Grid.Column width={8}>
        <Segment.Group horizontal>
          <Segment id="link" textAlign="center">
            <a href="https://github.com/mattcrowe5" target="_blank">
              <Icon name="github" /> Github
            </a>
          </Segment>
          <Segment id="link" textAlign="center">
            <a
              href="https://www.linkedin.com/in/matthew-crowe-b27a0197/"
              target="_blank"
            >
              <Icon name="github" /> LinkedIn
            </a>
          </Segment>
          <Segment id="link" textAlign="center">
            <a href="mailto:crowe.matthew5@gmail.com">
              <Icon name="mail" /> Email Me
            </a>
          </Segment>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column width={4} />
    </Grid>
  );
};

export default Footer;
