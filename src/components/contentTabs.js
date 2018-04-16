import React from "react";
import { Tab, Label, Image, Icon } from "semantic-ui-react";
import ProjectCards from "./projectCards";

const bio =
  "I got my first taste of programming during my senior year at the University of Michigan while obtaining my business degree.  I loved my introductory C++ class, and was drawn to problem solving and big data.  After a year at Oracle consulting small businesses on how software could help their problems, I decided I wanted to build products rather than selling them.  A graduate of the Flatiron School coding boot camp, I now devote my time to web development using Ruby, Rails, and JavaScript.";

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

const panes = [
  {
    menuItem: { key: "me", icon: "user", content: "About Me" },
    render: () => (
      <div>
        <br />
        {bio}
      </div>
    )
  },
  {
    menuItem: { key: "skills", icon: "keyboard", content: "Technical Skills" },
    render: () => (
      <div>
        <br />
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
        <br />
        <p>
          During my time at Flatiron School, I primarily focused on learning
          Ruby on Rails and Javascript libraries such as React and Redux. To
          continue my education, I've started teaching myself Node.js as well. I
          try to take any opportunity I can to continue to learn new
          technologies!{" "}
        </p>
      </div>
    )
  },
  {
    menuItem: { key: "projects", icon: "code", content: "Projects" },
    render: () => (
      <div>
        <br />
        <ProjectCards />
      </div>
    )
  }
];

// const panes = [
//   { menuItem: "About Me", icon: "user", pane: bio },
//   { menuItem: "Technical Skills", icon: "keyboard", pane: Skills },
//   { menuItem: "Projects", icon: "code", pane: "Tab 3 Content" }
// ];

const ContentTabs = () => <Tab panes={panes} />;

export default ContentTabs;
