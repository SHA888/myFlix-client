import React from "react";
import ReactDOM from "react-dom";
import { ManiView } from "./components/main-view/main-view"

// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <ManiView />
    )
  }
}

// Find the root of the application
const container = document.getElementsByClassName('app-container')[0];

// Tell React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);