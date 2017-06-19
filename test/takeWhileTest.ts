import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('takeWhile()', () => {
    it('should yield elements from a sequence while a condition is true', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).takeWhile(x => x % 2 === 0).toArray(), []);
        assert.deepEqual(new Enumerable([4, 3, 2, 1]).takeWhile(x => x % 2 === 0).toArray(), [4]);
    });
});
