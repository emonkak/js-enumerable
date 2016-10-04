import * as assert from 'assert';
import Enumerable from '../src/Enumerable';

describe('scan()', () => {
    it('should generates a sequence of accumulated values', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4, 5]).scan(0, (total, n) => total + n).toArray(), [1, 3, 6, 10, 15]);
        assert.deepEqual(new Enumerable([]).scan(0, (total, n) => total + n).toArray(), []);
    });
});
