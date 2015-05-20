import React from 'react';
import App from './App';
import {Route} from 'react-router';
import Login from './components/Sessions/Login';
import Signup from './components/Sessions/Signup';

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="signup" handler={Signup}/>
  </Route>
);
