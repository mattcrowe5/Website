import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";

const Head = () => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Image
          centered
          size="massive"
          src="https://media.licdn.com/dms/image/C4E00AQH9thueCLHc0Q/profile-displayphoto-shrink_200_200/0?e=1521669600&v=alpha&t=1fcJhXa3zZ8gRTX18JNzHLrPjjafW7uHLh9iv3SmU6o"
          circular
        />
        <Header.Content>Matt Crowe</Header.Content>
        <Header.Subheader>Full Stack Web Developer </Header.Subheader>
      </Header>
    </div>
  );
};

export default Head;
