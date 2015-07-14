import sinon from 'sinon';
import CONSTANTS from '../../core/Constants';

describe('AuthService: ', () => {
  let AuthService;
  let sandbox;
  beforeEach(() => {
    AuthService = require('../../services/AuthService.js');
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    AuthService = null;
    sandbox = sinon.sandbox.restore();
  });
  it('should be defined', () => {
    expect(AuthService).to.be.an('object');
  });
});
