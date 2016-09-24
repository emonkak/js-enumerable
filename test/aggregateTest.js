import aggregate from '../dist/aggregate';
import assert from 'assert';

describe('aggregate()', () => {
    it('should applies an accumulator function over a sequence', () => {
        assert.strictEqual([1, 2, 3, 4]::aggregate(0, (total, n) => total + n), 10);
        assert.strictEqual([]::aggregate(2, (total, n) => total + n), 2);
    });
});
