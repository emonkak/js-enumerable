import assert from 'assert';
import toArray from '../dist/toArray';

describe('toArray()', function() {
    it('should creates a Array<T> from Iterable<T>', function() {
        assert.deepEqual([]::toArray(), []);
        assert.deepEqual([1, 2, 3]::toArray(), [1, 2, 3]);
        assert.deepEqual([1, 2, 3][Symbol.iterator]()::toArray(), [1, 2, 3]);
    });
});
