import assert from 'assert';
import max from '../dist/max';

describe('max()', () => {
    it('should returns the maximum value in a sequence of values', () => {
        assert([]::max(), -Infinity);
        assert.strictEqual([1, 2, 3, 2, 1]::max(), 3);
        assert.strictEqual(['a', 'ab', 'abc', 'ab', 'a']::max(s => s.length), 3);
    });
});
