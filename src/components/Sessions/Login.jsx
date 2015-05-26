import React from 'react/addons';
import ReactMixin from 'react-mixin';
import {RaisedButton,TextField,Checkbox} from 'material-ui';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };
  }

  // This will be called when the user clicks on the login button
  login(e) {
    e.preventDefault();
    console.log("Login Called!");
    // Here, we call an external AuthService. We’ll create it in the next step
    //Auth.login(this.state.user, this.state.password)
      //.catch(function(err) {
        //console.log('Error logging in', err);
      //});
  }


  render() {
    return (
    <div className="login-container">
    <div className="login">
        {/* Login Form */}
        <div className="ui-form">
          <h3 className="text-center">Sign In</h3>
          <form>
            {/* Email */}
            <div className="form-group">
              <TextField floatingLabelText="Email" type="email"/>
            </div>
            {/* Password */}
            <div className="form-group">
              <TextField floatingLabelText="Password" type="password" />
            </div>
            <div className="checkbox">
              <label>
                <Checkbox name="rememberMe" label="Remember Me" />
              </label>
            </div>
            <RaisedButton className="button" label="Login In" onClick={this.login} />
            <RaisedButton className="button" label="Sign Up"  onClick={this.login}/>
          </form>
          <div className="text-center white">Social media...</div>
          <div className="social">
            <a href="#" className="facebook"><i className="fa fa-facebook" /> &nbsp; Login with Facebook</a>
            <a href="#" className="twitter"><i className="fa fa-twitter" /> &nbsp; Login with Twitter</a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus" /> &nbsp; Login with Google Plus</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
ReactMixin(Login.prototype, React.addons.LinkedStateMixin);
