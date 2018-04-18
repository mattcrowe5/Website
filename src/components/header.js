import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

const Head = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center" id="head">
        <Image
          centered
          size="massive"
          src="https://media.licdn.com/dms/image/C4E03AQH9thueCLHc0Q/profile-displayphoto-shrink_200_200/0?e=1529092800&v=beta&t=AvtTKq_W8Lp14DnB9aUE1FmQ40TIAOeWahJbJ9EhYQU"
          circular
        />
        <Header.Content>Matt Crowe</Header.Content>
        <Header.Subheader id="head">Full Stack Web Developer </Header.Subheader>
      </Header>
    </div>
  );
};

export default Head;
