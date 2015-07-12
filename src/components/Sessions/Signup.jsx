import React from 'react/addons';
import ReactMixin from 'react-mixin';
import {Checkbox} from 'material-ui';
import _ from 'lodash';
import debug from 'debug';
import PageActions from '../../actions/PageTitleAction';
import BaseComponent from '../BaseComponent';
import SocialSessions from '../Shared/SocialSessions';
import Input from '../Shared/Input';
import Auth from '../../services/AuthService';

export default class Signup extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
    'handlePasswordInput',
    'handleConfirmPasswordInput',
    'handleEmailInput',
    'handleNameInput',
    'handleCompanyInput',
    'isConfirmedPassword',
    'validateEmail',
    'login',
    'signup'
    );
    this.state = {
      email: null,
      password: null,
      companyName:null,
      fullName:null,
      confirmPassword: null,
      forbiddenWords: ["password", "user", "username"]
    };
  }
  componentWillMount(){
      window.document.body.classList.add('session-background');
  }
  componentDidMount(){
    PageActions.setTitle("Sign Up");
  }
  componentWillUnmount(){
      window.document.body.classList.remove('session-background');
  }

  handlePasswordInput (event) {
    if(!_.isEmpty(this.state.confirmPassword)){
      this.refs.passwordConfirm.isValid();
    }
    this.refs.passwordConfirm.hideError();
    this.setState({
      password: event.target.value
    });
  }
  handleCompanyInput(event) {
    this.setState({
      companyName: event.target.value
    });
  }

  handleNameInput(event) {
    this.setState({
      fullName: event.target.value
    });
  }
  handleConfirmPasswordInput (event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  signup (e) {
    e.preventDefault();

    var canProceed = this.validateEmail(this.state.email) && this.refs.password.isValid() && this.refs.passwordConfirm.isValid();

    if(canProceed) {
    debug('dev')('Signing Up user',this.state);
    Auth.createUserAndLogin(_.omit(this.state,'forbiddenWords'))
    .then(function(){
      this.context.router.transitionTo('/dashboard');
    })
    .catch(function(err) {
      console.log('Error logging in', err);
    });
    } else {
      this.refs.email.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
  }

  login(event) {
    event.preventDefault();
    this.context.router.transitionTo('/login');
  }

  isConfirmedPassword (event) {
    return (event == this.state.password);
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
    <div className="session-container">
      <div className="session">
        {/* Login Form */}
        <div className="ui-form">
          <h4 className="text-center">Sign Up</h4>
          <form  onSubmit={this.signup}>
            {/* Email */}
            <div className="form-group">
              <Input 
              text="Email" 
              type="email"
              defaultValue={this.state.email} 
              validate={this.validateEmail}
              value={this.state.email}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email can't be empty"
              errorVisible={this.state.showEmailError}
              />
            </div>
            <Input 
              text="Company Name" 
              ref="companyName"
              validate={this.isEmpty}
              value={this.state.companyName}
              onChange={this.handleCompanyInput} 
              emptyMessage="Company name can't be empty"
            /> 
            <Input 
              text="Full Name" 
              ref="fullName"
              validate={this.isEmpty}
              value={this.state.fullName}
              onChange={this.handleNameInput} 
              emptyMessage="Full name can't be empty"
            /> 
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
            <div className="form-group">
              <Input 
              text="Confirm password" 
              ref="passwordConfirm"
              type="password"
              validate={this.isConfirmedPassword}
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput} 
              emptyMessage="Please confirm your password"
              errorMessage="Passwords don't match"
              /> 
            </div>

            <div className="checkbox">
              <label> <Checkbox name="Remember Me" label="Remember Me"/> </label>
            </div>
            <button className="button" onClick={this.login} label="Login">Login</button>
            <button type="submit" className="button" label="Sign Up" onClick={this.signup} >Sign In</button>
          </form>
          <SocialSessions SessionType="Signup"/>
        </div>
      </div>
    </div>
    );
  }
}

Signup.contextTypes = {
  router: React.PropTypes.func
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
