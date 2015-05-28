import React from 'react';

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
        <h1>Home?</h1>
      </div>
    );
  }
};

Home.contextTypes = {
   router: React.PropTypes.func
 }
