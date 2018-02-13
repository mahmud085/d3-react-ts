import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import data from "./data";
// import data from "./dummy";
ReactDOM.render(
  <App
    width={window.screen.availWidth}
    height={window.screen.availHeight}
    graph={data}
  />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
