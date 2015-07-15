import CONSTANTS from '../../core/Constants';
import sinon from 'sinon';

describe('LoginStore: ', () => {
  let store;
  let sandbox;
  beforeEach(() => {
    store = require('../../stores/LoginStore.js');
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    store = null;
    sandbox = sinon.sandbox.restore();
  });
  it('should be defined', () => {
    expect(store).to.be.an('object');
  });
  it('should not have a user defined initially',() => {
   expect(store._user).to.equal(null);
  });
  it('should inherit a subscribe method',() => {
   expect(store.subscribe).to.be.an('function');
  });
  it('should not have a logged in user',() => {
    expect(store.isLoggedIn()).to.equal(false);
  });
  it('should have a logged in user',() => {
    var user = {name:'subject'};
    store._user = user;
    expect(store.isLoggedIn()).to.equal(true);
  });
  it('should set the user when a Login action is recevied',() => {
   var testAction = {action:{actionType:CONSTANTS.ActionTypes.LOGIN,user:{name:'subject'}}};
   var emitSpy = sandbox.spy(store,'emitChange');
   store._registerToActions(testAction);
   expect(store.user.name).to.be.equal('subject');
   expect(emitSpy.called).to.be.equal(true);
  });
  it('should set the user when a Signup action is recevied',() => {
   var testAction = {action:{actionType:CONSTANTS.ActionTypes.SIGN_UP,user:{name:'subject'}}};
   var emitSpy = sandbox.spy(store,'emitChange');
   store._registerToActions(testAction);
   expect(store.user.name).to.be.equal('subject');
   expect(emitSpy.called).to.be.equal(true);
  });
  it('should remove the user when a Logout action is recevied',() => {
   var testAction = {action:{actionType:CONSTANTS.ActionTypes.LOGOUT,user:{name:'subject'}}};
   var emitSpy = sandbox.spy(store,'emitChange');
   store._registerToActions(testAction);
   expect(emitSpy.called).to.be.equal(true);
   expect(store._user).to.equal(null);
  });
});
