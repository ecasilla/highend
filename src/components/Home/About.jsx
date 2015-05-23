import React from 'react';
import {Paper,FlatButton} from 'material-ui';
require('../../assets/styles/material-ui/main.less');

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <FlatButton label="About" />
      </div>
    );
  }
};


