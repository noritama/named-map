const assert = require('assert');
const lib = require('../');

describe('genMap', () => {

  it('1digit', () => {
    const ary = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const result = lib(1, ary);
    assert(result['0'], 'a');
    assert(result['1'], 'b');
    assert(result['2'], 'c');
    assert(result['3'], 'd');
    assert(result['4'], 'e');
    assert(result['5'], 'f');
    assert(result['6'], 'g');
  });

  it('2digit', () => {
    const ary = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    for (let i = 0; i < 100; i++) {
      ary.push(i);
    }
    const result = lib(2, ary);
    assert.equal(result['00'], 'a');
    assert.equal(result['01'], 'b');
    assert.equal(result['02'], 'c');
    assert.equal(result['03'], 'd');
    assert.equal(result['04'], 'e');
    assert.equal(result['05'], 'f');
    assert.equal(result['06'], 'g');
    assert.equal(result['07'], 0);
    assert.equal(result['1I'], 99);
  });

});
