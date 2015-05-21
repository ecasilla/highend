import 'babel/polyfill';
import React from 'react';
import {RouteHandler} from 'react-router';
import FastClick from 'fastclick';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
    <div>
      <nav>
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/#About">About</a></li>
          <li><a href="/#Contact">Contact</a></li>
          <li><a href="/#Portfolio">Portfolio</a></li>
          <li><a href="/#login">login</a></li>
          <li><a href="/#signup">Register</a></li>
        </ul>
      </nav>
      <RouteHandler/>
    </div>
    );
  }
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(console.log('APP READY'));
