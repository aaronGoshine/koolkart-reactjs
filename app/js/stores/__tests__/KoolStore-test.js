jest.dontMock('../../constants/KartConstants');
jest.dontMock('../KoolStore');
jest.dontMock('react/lib/merge');

describe('KoolStore', function() {
  beforeEach(function() {
    var AppDispatcher = require('../../dispatcher/AppDispatcher');
  });

  it('should register a callback with the dispatcher', function() {
    // TODO create test 
    expect(true).toBe(true);
  });

  it('should initialize with a collection of items', function() {
    // TODO create test
    expect(true).toBe(true);
  });

});