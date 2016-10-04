import * as assert from 'assert';
import takeLast from '../src/takeLast';

describe('takeLast()', () => {
    it('should returns a specified number of contiguous elements from the end of the sequence', () => {
        assert.deepEqual(Array.from(takeLast.call([1, 2, 3, 4, 5], 0)), []);
        assert.deepEqual(Array.from(takeLast.call([1, 2, 3, 4, 5], 5)), [1, 2, 3, 4, 5]);
        assert.deepEqual(Array.from(takeLast.call([1, 2, 3, 4, 5], 3)), [3, 4, 5]);
    });
});
