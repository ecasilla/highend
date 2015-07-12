import React from 'react';
import App from './App';
import {Route, NotFoundRoute} from 'react-router';
import Home from './components/Home/Home';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import NotFound from './components/Pages/not-found';
import Login from './components/Sessions/Login';
import Signup from './components/Sessions/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Portfolio from './components/Portfolio/gallery';
import Item from './components/Portfolio/item';


export default (
  <Route handler={App}>
    <Route name="index" path="/" handler={Home}/>
    <Route name="about" path="/about" handler={About}/>
    <Route name="contact" path="/contact" handler={Contact}/>
    //Session Routes
    <Route name="login" path="/login" handler={Login}/>
    <Route name="signup" path="/signup" handler={Signup}/>
    //Portfolio
    <Route name="portfolio" path="/portfolio" handler={Portfolio}/>
    <Route name="portfolio_item" path="/portfolio/:item" handler={Item}/>
    //Dashboard
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
    //404 Not Found
   <NotFoundRoute handler={NotFound} />
  </Route>
);
