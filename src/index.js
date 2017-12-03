import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GitHubEventApp from "./GitHubEventApp";
import registerServiceWorker from "./registerServiceWorker";

// const componentTypes = ["PushEvent", "PushEvent", "PushEvent", "ReleaseEvent", "StatusEvent", "BadEvent"];
// ReactDOM.render(<App componentTypes={componentTypes} />, document.getElementById("root"));

fetch(`https://api.github.com/users/dance2die/events/public`).then(
  response => {
    if (response.ok) {
      return response.json();
    } else {
      const events = [
        "PushEvent",
        "PushEvent",
        "PushEvent",
        "ReleaseEvent",
        "StatusEvent",
        "BadEvent"
      ];
      ReactDOM.render(
        <App events={events} />,
        document.getElementById("root")
      );
    }

    registerServiceWorker();
  }
).then(events => {
  console.log('index.js events', events);
  
        ReactDOM.render(
          <GitHubEventApp events={events} />,
          document.getElementById("root")
        );
  
});
