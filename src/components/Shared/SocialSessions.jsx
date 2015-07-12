import React from 'react';
import BaseComponent from '../BaseComponent';
import Auth from '../../services/AuthService';

export default class SocialSessions extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('facebook','twitter','google');
  }
  
  facebook(e){
    Auth.thirdPartyLogin('facebook')
    .then(function() {
      
    })
    .catch(function(err) {
    console.error(err);
    })
  }
  twitter(e){
    Auth.thirdPartyLogin('twitter')
    .then(function() {
      
    })
    .catch(function(err) {
      console.error(err);
    })
  }
  google(e){
    Auth.thirdPartyLogin('google')
    .then(function() {
      
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  render() {
    return (
        <div className="social">
          <a href="#" className="facebook" onClick={this.facebook} >
            <i className="fa fa-facebook" /> &nbsp; {this.props.SessionType} with Facebook</a>
          <a href="#" className="twitter"  onClick={this.twitter} >
            <i className="fa fa-twitter" /> &nbsp;{this.props.SessionType} with Twitter</a>
          <a href="#" className="google-plus" onClick={this.google}>
            <i className="fa fa-google-plus" /> &nbsp;{this.props.SessionType}  with Google Plus</a>
        </div>
    );
  }
};

