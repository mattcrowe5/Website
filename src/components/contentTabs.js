import React from "react";
import { Tab, Label, Image, Icon } from "semantic-ui-react";
import ProjectCards from "./projectCards";
import Skills from "./skills";

const bio =
  "I got my first taste of programming during my senior year at the University of Michigan while obtaining my business degree.  I loved my introductory C++ class, and was drawn to problem solving and big data.  After a year at Oracle consulting small businesses on how software could help their problems, I decided I wanted to build products rather than selling them.  A graduate of the Flatiron School coding boot camp, I now devote my time to web development using Ruby, Rails, and JavaScript.";

const panes = [
  {
    menuItem: { key: "me", icon: "user", content: "About Me" },
    render: () => (
      <div>
        <br />
        {bio}
        <br />
      </div>
    )
  },
  {
    menuItem: { key: "skills", icon: "keyboard", content: "Technical Skills" },
    render: () => (
      <div>
        <Skills />
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

const ContentTabs = () => <Tab panes={panes} className="panes" />;

export default ContentTabs;
