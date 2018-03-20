import React from "react";
import { Tab } from "semantic-ui-react";
import Skills from "./skills";

const bio =
  "Matt got his first taste of programming during his senior year at the University of Michigan while obtaining his business degree.   He loved his introductory C++ class, and was drawn to problem solving and big data.  After a year at Oracle consulting small businesses on how software could help their problems, Matt decided he wanted to build products rather than selling them.  A graduate of the Flatiron School coding boot camp, he devotes his time to web development using Ruby, Rails, and JavaScript.";

const skills = <Skills />;

const panes = [
  { menuItem: "About Me", icon: "user", pane: bio },
  { menuItem: "Technical Skills", icon: "keyboard", pane: skills },
  { menuItem: "Projects", icon: "code", pane: "Tab 3 Content" }
];

const ContentTabs = () => <Tab panes={panes} renderActiveOnly={false} />;

export default ContentTabs;
