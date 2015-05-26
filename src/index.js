import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer';
import './components/preloader.jsx';
import Pace from './assets/vendor/pace';

RouterContainer.set(Router);
RouterContainer.set(Router.create({ routes }));
Pace.once('hide', function() {
  document.getElementById('#pace-loader').classList.remove('pace-big').className('pace-small');
});

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
