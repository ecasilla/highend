import React from 'react/addons';
import ReactMixin from 'react-mixin';
import {Checkbox} from 'material-ui';
import _ from 'lodash';
import debug from 'debug';
import Auth from '../../services/AuthService';
import PageActions from '../../actions/PageTitleAction';
import BaseComponent from '../BaseComponent';
import SocialSessions from '../Shared/SocialSessions';
import Input from '../Shared/Input';
import Header from '../Shared/Header';

export default class Login extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
      'handlePasswordInput',
      'handleEmailInput',
      'validateEmail',
      'login',
      'signup'
    );
    this.state = {
      email: null,
      password: null,
      forbiddenWords: ["password", "user", "username"]
    };
  }
  componentWillMount(){
//window.document.body.classList.add('session-background');
  }
  componentDidMount(){
    PageActions.setTitle("Login");
  }
  componentWillUnmount(){
//  window.document.body.classList.remove('session-background');
  }
  handlePasswordInput (event) {
    if(!_.isEmpty(this.state.password)){
      this.refs.password.isValid();
    }
    this.setState({
      password: event.target.value
    });
  }

  login (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email) && this.refs.password.isValid(); 

    if(canProceed) {
      var data = {
        email: this.state.email,
        password: this.state.password
      };
      debug('dev')("LOGGED IN " + this.state.email);
      // Here, we call an external AuthService. We’ll create it in the next step
      Auth.login(data)
      .then(function() {
        alert("Your logged In")
      })
      .catch(function(err) {
        debug('dev')('Error logging in', err);
      })
    } else {
      this.refs.email.isValid();
      this.refs.password.isValid();
    }
  }

  signup(event) {
    event.preventDefault();
    this.context.router.transitionTo('/signup');
  }

  handleEmailInput(event){
    this.setState({
      email: event.target.value
    });
  }

  validateEmail (event) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);
  }

  isEmpty (value) {
    return !_.isEmpty(value);
  }

  render() {
    return (
      <div>
      <Header/>
      <div className="session-container">
      <div className="session">
      {/* Login Form */}
      <div className="ui-form">
      <h4 className="text-center">Login</h4>
      <form onSubmit={this.login}>
      {/* Email */}
      <div className="form-group">
      <Input 
      text="Email" 
      type="email"
      ref="email"
      defaultValue={this.state.email} 
      validate={this.validateEmail}
      value={this.state.email}
      onChange={this.handleEmailInput} 
      errorMessage="Email is invalid"
      emptyMessage="Email can't be empty"
      errorVisible={this.state.showEmailError}
      />
      </div>
      {/* Password */}
      <div className="form-group">
      <Input 
      text="Password"
      type="password"
      ref="password"
      validator="true"
      minCharacters="8"
      requireCapitals="1"
      requireNumbers="1"
      forbiddenWords={this.state.forbiddenWords}
      value={this.state.passsword}
      emptyMessage="Password is invalid"
      onChange={this.handlePasswordInput}
      />
      </div>

      <div className="checkbox">
      <label><Checkbox name="Remember Me" label="Remember Me"/></label>
      </div>
      <button type="submit" className="button" onClick={this.login} label="Login">Login</button>
      <button className="button" label="Sign Up" onClick={this.signup} >Sign In</button>
      </form>
      <SocialSessions SessionType="Login"/>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
}
// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
ReactMixin(Login.prototype, React.addons.LinkedStateMixin);

