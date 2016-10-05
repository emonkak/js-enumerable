import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('take()', () => {
    it('should returns a specified number of contiguous elements from the start of a sequence', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).take(2).toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).take(0).toArray(), []);
    });

    it('should works with orderBy()', () => {
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).orderBy().take(2).toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([]).orderBy().take(2).toArray(), []);
    });
});
