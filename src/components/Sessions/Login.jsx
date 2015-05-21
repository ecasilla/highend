import React from 'react/addons';
import ReactMixin from 'react-mixin';

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
    // Here, we call an external AuthService. We’ll create it in the next step
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log('Error logging in', err);
      });
  }

  render() {
    return (
      <h3 className="text-center">Login In</h3>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func
};

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Login.prototype, React.addons.LinkedStateMixin);
