import React from 'react';

export default class SocialSessions extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <div className="social">
          <a href="#" className="facebook">
            <i className="fa fa-facebook" /> &nbsp; {this.props.SessionType} with Facebook</a>
          <a href="#" className="twitter">
            <i className="fa fa-twitter" /> &nbsp;{this.props.SessionType} with Twitter</a>
          <a href="#" className="google-plus">
            <i className="fa fa-google-plus" /> &nbsp;{this.props.SessionType} with Google Plus</a>
        </div>
    );
  }
};

