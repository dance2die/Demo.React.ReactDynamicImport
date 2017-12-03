import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const componentTypes = ["PushEvent", "PushEvent", "PushEvent", "ReleaseEvent", "StatusEvent", "BadEvent"];

ReactDOM.render(<App componentTypes={componentTypes} />, document.getElementById("root"));
registerServiceWorker();
