import * as assert from 'assert';
import Enumerable from './bundle';

describe('zip()', () => {
    it('should applies a specified function to the corresponding elements of two sequences', () => {
        assert.deepEqual(new Enumerable([1, 3, 5, 7]).zip([2, 4, 6, 8], (x, y) => [x, y]).toArray(), [[1, 2], [3, 4], [5, 6], [7, 8]]);
        assert.deepEqual(new Enumerable([1, 3, 5, 7, 9]).zip([2, 4, 6, 8], (x, y) => [x, y]).toArray(), [[1, 2], [3, 4], [5, 6], [7, 8]]);
        assert.deepEqual(new Enumerable([1, 3, 5, 7]).zip([2, 4, 6, 8, 10], (x, y) => [x, y]).toArray(), [[1, 2], [3, 4], [5, 6], [7, 8]]);
        assert.deepEqual(new Enumerable([]).zip([], (x, y) => [x, y]).toArray(), []);
    });
});
