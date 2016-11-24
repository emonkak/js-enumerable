import * as assert from 'assert';
import Enumerable from '../src/';

describe('skipLast()', () => {
    it('should bypasses a specified number of contiguous elements from the end of the sequence', () => {
        assert.deepEqual(new Enumerable([]).skipLast(1).toArray(), []);
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4]).skipLast(0).toArray(), [0, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4]).skipLast(3).toArray(), [0, 1]);
    });
});
