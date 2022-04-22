import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

// Import statement to indicate that the app need to bundle `./index.css`
import './index.scss';

// Main component
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Find the root of the app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
