import React from 'react';
import Router from 'react-router';
import routes from './routes';
import RouterContainer from './services/RouterContainer';

RouterContainer.set(Router);
RouterContainer.set(Router.create({ routes }));

Router.run(routes,function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
