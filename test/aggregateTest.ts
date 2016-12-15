import * as assert from 'assert';
import Enumerable from './bundle';

describe('aggregate()', () => {
    it('should applies an accumulator function over a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).aggregate(0, (total, n) => total + n), 10);
        assert.strictEqual(new Enumerable([]).aggregate(2, (total, n) => total + n), 2);
    });
});
