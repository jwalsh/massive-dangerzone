(function() {

  module('window.dangerzone');
  
  test('Exists', function() {
    expect(1);
    strictEqual(typeof window.dangerzone, 'function', 'should be available');
  });

}());
