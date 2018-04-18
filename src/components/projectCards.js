import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectCards = () => {
  return (
    <Card.Group itemsPerRow={2}>
      <Card>
        <img
          src="https://farm1.staticflickr.com/927/40791453164_0bb16074fb_n.jpg"
          width="340"
          height="162"
          alt="Showspotter"
        />
        <Card.Content>
          <Card.Header>ShowSpotter</Card.Header>
          <Card.Meta>React, Redux, Ruby on Rails</Card.Meta>
          <Card.Description>
            Final Project at Flatiron School made using the Spotify and Songkick
            API's to recommend concerts you might want to see based on your top
            streamed Spotify artists.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="video play" />
            Link to YouTube Tutorial
          </a>
        </Card.Content>
      </Card>
      <Card>
        <img
          src="https://farm1.staticflickr.com/799/26634649417_1f57819f52_n.jpg"
          width="340"
          height="159"
          alt="DuelingDemons"
        />
        <Card.Content>
          <Card.Header>Dueling Demons</Card.Header>
          <Card.Meta>Javascript, Ruby on Rails</Card.Meta>
          <Card.Description>
            Game style project from Flatiron School made using vanilla
            Javascript with a Ruby on Rails server. Players choose a character
            and try to beat as many monsters as possible.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a
            href="https://jisho23.github.io/mod_3_final_project_js/"
            target="_blank"
          >
            <Icon name="gamepad" />
            Link to Play!
          </a>
        </Card.Content>
      </Card>
      <Card>
        <img
          src="https://farm1.staticflickr.com/863/41463398042_aea46e914b_n.jpg"
          width="340"
          height="161"
          alt="LinkUp"
        />
        <Card.Content>
          <Card.Header>LinkUp</Card.Header>
          <Card.Meta>Ruby on Rails</Card.Meta>
          <Card.Description>
            Project from Flatiron School made using Ruby on Rails to give users
            an opportunity to find events going on in their city and connect
            with others going to the event beforehand.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://groupies-assemble.herokuapp.com/" target="_blank">
            <Icon name="beer" />
            Link to Site
          </a>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Description>More coming soon...</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};

export default ProjectCards;
