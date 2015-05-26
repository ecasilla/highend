import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer';
import Pace from './assets/vendor/pace';
require('./assets/styles/pace/pace.css');

RouterContainer.set(Router);
RouterContainer.set(Router.create({ routes }));

function RouterInit(Handler){
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
      'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }
  Pace.restart();
  React.render(<Handler/>, document.getElementById('app'));
}

Router.run(routes, RouterInit);
