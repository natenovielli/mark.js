'use strict';
describe('basic mark with accuracy prefix', function() {
  var $ctx;
  beforeEach(function(done) {
    loadFixtures('basic/accuracy-prefix.html');

    $ctx = $('.basic-accuracy-prefix');
    new Mark($ctx[0]).mark('lorem', {
      'accuracy': 'prefix',
      'separateWordSearch': false,
      'done': done
    });
  });

  it('should wrap the right matches', function() {
    expect($ctx.find('mark')).toHaveLength(3);
    $ctx.find('mark').each(function() {
      expect($(this).text()).toBe('Lorem');
    });
  });
});
