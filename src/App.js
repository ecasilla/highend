import 'babel/polyfill';
import React from 'react';
import {RouteHandler} from 'react-router';
import FastClick from 'fastclick';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';

require('./assets/styles/sass/app.scss');

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <RouteHandler/>
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
