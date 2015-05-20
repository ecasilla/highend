import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './Services/RouterContainer';

RouterContainer.set(Router);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
