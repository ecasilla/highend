/*global describe, it, expect*/

import React from 'react/addons';
import Login from '../../components/Sessions/Login';

describe('Login Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const login = TestUtils.renderIntoDocument(
         <Login/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(login, 'h4');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("Login");
  });
});
