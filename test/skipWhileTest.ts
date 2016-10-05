import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('skipWhile()', () => {
    it('should skip elements in a sequence while a condition is true', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).skipWhile(x => x % 2 === 0).toArray(), [1, 2, 3, 4]);
        assert.deepEqual(new Enumerable([4, 3, 2, 1]).skipWhile(x => x % 2 === 0).toArray(), [3, 2, 1]);
    });
});
