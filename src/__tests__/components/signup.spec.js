/*global describe, it, expect*/

import React from 'react/addons';
import Signup from '../../components/Sessions/Signup';

describe('Signup Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const signup = TestUtils.renderIntoDocument(
         <Signup/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(signup, 'h4');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("Sign Up");
  });
});
