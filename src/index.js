import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";
import Footer from "./components/footer.js";

const MyApp = () => <App />;

ReactDOM.render(<MyApp />, document.getElementById("root"));
registerServiceWorker();

ReactDOM.render(<Footer />, document.getElementById("foot"));
