describe('LoginStore: ', () => {
  let store;

  beforeEach(() => {
    store = require('../../stores/LoginStore.js');
  });
  afterEach(function(){
    store = null;
  });
  it('should be defined', () => {
    expect(store).to.be.an('object');
  });
});
