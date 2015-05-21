import React from 'react';
import App from './App';
import {Route, NotFoundRoute} from 'react-router';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import NotFound from './components/not-found';
import Login from './components/Sessions/Login';
import Signup from './components/Sessions/Signup';

export default (
  <Route handler={App}>
    <Route name="index" path="/" handler={Home}/>
    <Route name="about" path="/about" handler={About}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    //Session Routes
    <Route name="login" path="login" handler={Login}/>
    <Route name="signup" path="signup" handler={Signup}/>
   <NotFoundRoute handler={NotFound} />
  </Route>
);
