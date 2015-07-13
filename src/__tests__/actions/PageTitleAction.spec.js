import Dispatcher from '../../core/Dispatcher';
import sinon from 'sinon';

describe('PageTitleAction: ', () => {
  let PageTitleAction;
  let sandbox;

  beforeEach(function() {
    PageTitleAction = require('../../actions/PageTitleAction.js');
    sandbox = sinon.sandbox.create();
  });
  afterEach(function(){
    sandbox = sinon.sandox.restore();
  });

  it('should be defined', () => {
    expect(PageTitleAction).to.be.an('object');
  });
  it('should have a setTitle method', function(){
   expect(PageTitleAction.setTitle).to.be.an('function');
  });
});
