import React from 'react';
import Header from '../Shared/Header';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
    var body = document.getElementsByTagName('body')[0];
    body.style.background = 'none';
  }
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <div className="hero">
          <h1>Home Page goes Here!</h1>
         </div>
        </div>
      </div>
    );
  }
};

Home.contextTypes = {
   router: React.PropTypes.func
 }
