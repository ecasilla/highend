import React from 'react';

export default class SocialSessions extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
          <div>
          <div className="text-center white">Social media...</div>
          <div className="social">
            <a href="#" className="facebook"><i className="fa fa-facebook" /> &nbsp; Login with Facebook</a>
            <a href="#" className="twitter"><i className="fa fa-twitter" /> &nbsp; Login with Twitter</a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus" /> &nbsp; Login with Google Plus</a>
          </div>
        </div>
    );
  }
};

