import * as assert from 'assert';
import Enumerable from '../src/';

describe('distinct()', () => {
    it('should returns distinct elements from a sequence', () => {
        assert.deepEqual(new Enumerable([1, 2, 1, 2]).distinct().toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([1, 1, 2, 2]).distinct().toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).distinct(x => x % 2 === 0).toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([1, 3, 2, 4]).distinct(x => x % 2 === 0).toArray(), [1, 2]);
    });
});
