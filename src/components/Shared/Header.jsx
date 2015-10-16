import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <header className="nav nav-top">
      <div className="logo">
        <a href="/?lpos=Header:1">
         </a>
        </div>
        <nav>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/#About">About Us</a></li>
            <li><a href="/#Contact">Contact Us</a></li>
            <li><a href="/#Login">Login</a></li>
            <li><a href="/#Signup">Sign up</a></li>
          </ul>
        </nav>
      </header>
    );
  }
};
