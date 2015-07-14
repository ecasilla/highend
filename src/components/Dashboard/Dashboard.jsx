import React from 'react';
import AuthComponent from '../Shared/AuthComponent';
import Header from '../Shared/Header'

export default AuthComponent(class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
});



