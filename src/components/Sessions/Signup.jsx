import React from 'react/addons';
import BaseComponent from '../BaseComponent';
import ReactMixin from 'react-mixin';
import {RaisedButton,Checkbox} from 'material-ui';
import SocialSessions from '../Shared/SocialSessions';
import _ from 'lodash';
import Input from '../Shared/Input';

export default class Signup extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind(
    'handlePasswordInput',
    'handleConfirmPasswordInput',
    'handleEmailInput',
    'handleCompanyInput',
    'isConfirmedPassword',
    'validateEmail',
    'signup'
    );
    this.state = {
      email: null,
      password: null,
      confirmPassword: null,
      forbiddenWords: ["password", "user", "username"]
    };
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
    })
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
      var data = {
        email: this.state.email
      };
     console.log("LOGGED IN " + this.state.email);
    // Here, we call an external AuthService. We’ll create it in the next step
    //Auth.login(this.state.email, this.state.password)
    //.catch(function(err) {
    //console.log('Error logging in', err);
    //});
    } else {
      this.refs.email.isValid();
      this.refs.password.isValid();
      this.refs.passwordConfirm.isValid();
    }
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
          <h3 className="text-center">Sign Up</h3>
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
            <RaisedButton type="submit" className="button" label="Sign Up" onClick={this.signup}/>
            <RaisedButton className="button" label="Login" />
          </form>
          <SocialSessions/>
        </div>
      </div>
    </div>
    );
  }
}


// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
