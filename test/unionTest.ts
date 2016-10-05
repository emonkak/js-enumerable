import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('union()', () => {
    it('should produces the set union of two sequences', () => {
        assert.deepEqual(new Enumerable([1, 2, 3]).union([2, 3, 4]).toArray(), [2, 3]);
        assert.deepEqual(new Enumerable([1, 2, 3]).union([]).toArray(), []);
        assert.deepEqual(new Enumerable([]).union([2, 3, 4]).toArray(), []);
        assert.deepEqual(new Enumerable([]).union([]).toArray(), []);
    });
});
