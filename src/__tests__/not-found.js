/*global describe, it, expect*/

import React from 'react/addons';
import Notfound from '../components/not-found';

describe('404 Page', () => {
  it('displays the header', () => {
    const TestUtils = React.addons.TestUtils;
    const notfound = TestUtils.renderIntoDocument(
         <Notfound/>
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(notfound, 'h1');
    const labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal("404");
  });
});
