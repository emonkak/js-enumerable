import * as assert from 'assert';
import Enumerable from '../src/';

describe('minBy()', () => {
    it('should returns the elements with the maximum key value by using the default comparer to compare key values', () => {
        assert.deepEqual(new Enumerable([]).minBy(), []);
        assert.deepEqual(new Enumerable([1, 2, 3, 2, 1]).minBy(x => x), [1, 1]);
        assert.deepEqual(new Enumerable(['ab', 'a', 'ab', 'abc', 'ab', 'a', 'ab']).minBy(s => s.length), ['a', 'a']);
    });
});
