import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <nav>
        <ul>
          <li><a href="/#">Home</a></li>
          <li><a href="/#About">About</a></li>
          <li><a href="/#Contact">Contact</a></li>
          <li><a href="/#Portfolio">Portfolio</a></li>
          <li><a href="/#Dashboard">Dashboard</a></li>
          <li><a href="/#login">login</a></li>
          <li><a href="/#signup">Register</a></li>
        </ul>
      </nav>
    );
  }
};
