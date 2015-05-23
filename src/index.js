import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer';
import Modernizr from './assets/vendor/modernizr';
import './components/preloader.jsx';
import Pace from './assets/vendor/pace';

RouterContainer.set(Router);
RouterContainer.set(Router.create({ routes }));
Pace.once('hide', function() {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
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

//if(Modernizr.history){
  //Router.run(routes, ReactRouter.HistoryLocation, RouterInit);
//}else{
  //Router.run(routes, RouterInit);
//}

