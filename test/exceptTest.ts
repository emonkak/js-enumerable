import * as assert from 'assert';
import except from '../src/except';

describe('except()', () => {
    it('should produces the set difference of two sequences', () => {
        assert.deepEqual(Array.from(except.call([], [])), []);
        assert.deepEqual(Array.from(except.call([1, 2, 3, 4, 5, 6], [2, 3, 4])), [1, 5, 6]);
        assert.deepEqual(Array.from(except.call([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6], [2, 3, 4])), [1, 5, 6]);
        assert.deepEqual(Array.from(except.call([2, 3, 4], [1, 2, 3, 4, 5, 6])), []);
    });
});
