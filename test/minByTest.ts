import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('minBy()', () => {
    it('should returns the elements with the maximum key value by using the default comparer to compare key values', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 2, 1]).minBy(x => x).toArray(), [1, 1]);
        assert.deepEqual(new Enumerable(['ab', 'a', 'ab', 'abc', 'ab', 'a', 'ab']).minBy(s => s.length).toArray(), ['a', 'a']);
    });
});
