import * as assert from 'assert';
import Enumerable from '../bundle';

describe('concat()', () => {
    it('should concatenates two sequences', () => {
        assert.deepEqual(Enumerable.concat([], []).toArray(), []);
        assert.deepEqual(Enumerable.concat([1, 2, 3], [4, 5, 6]).toArray(), [1, 2, 3, 4, 5, 6]);
        assert.deepEqual(Enumerable.concat([1, 2, 3], [4, 5, 6], [7, 8, 9]).toArray(), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
