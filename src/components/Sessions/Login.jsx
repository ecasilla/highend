import React from 'react/addons';
import ReactMixin from 'react-mixin';
import {FlatButton} from 'material-ui';

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
              <input type="email" className="form-control" placeholder="Enter Email" />
            </div>
            {/* Password */}
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Enter Password" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <FlatButton label="Login In" primary={true} onClick={this.login} />
            <FlatButton label="Sign Up" primary={true}  onClick={this.login}/>
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
