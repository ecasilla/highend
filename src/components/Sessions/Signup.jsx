import React from 'react/addons';
import ReactMixin from 'react-mixin';

export default class Signup extends React.Component {

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
    console.log('Error logging in', err);
  }

  render() {
    return (
  <h3 class="text-center">Sign In</h3>
    );
  }
}

// We’re using the mixin `LinkStateMixin` to have two-way databinding between our component and the HTML.
reactMixin(Signup.prototype, React.addons.LinkedStateMixin);

