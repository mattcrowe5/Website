import React from "react";
import { Label, Image } from "semantic-ui-react";

const Skills = () => {
  return (
    <div>
      <h3>Technical Skills</h3>
      <Label.Group>
        <Label size="large" image>
          <Image src="http://2ality.com/2011/10/logo-js/js.jpg" />
          Javascript
        </Label>
        <Label size="large" image>
          <Image src="https://reactjs.org/logo-og.png" />
          React
        </Label>
        <Label size="large" image>
          <Image src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media" />
          Redux
        </Label>
        <Label size="large" image>
          <Image src="https://cdn-images-1.medium.com/max/300/1*-oIlwIWlt0BDN4b5a9rRCQ.png" />
          Ruby on Rails
        </Label>
        <Label size="large" image>
          <Image src="https://azure.microsoft.com/svghandler/sql-database?width=600&height=315" />
          SQL
        </Label>
      </Label.Group>
    </div>
  );
};

export default Skills;
