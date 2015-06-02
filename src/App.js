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

let onSetMeta = (name, content) => {
  // Remove and create a new <meta /> tag in order to make it work
  // with bookmarks in Safari
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element) => {
    if (element.getAttribute('name') === name) {
      element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

App.contextTypes: {
    onSetTitle: value => document.title = value,
    onSetMeta
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
