import assert from 'assert';
import sum from '../dist/sum';

describe('sum()', function() {
    it('should computes the sum of a sequence of numeric values', function() {
        assert.strictEqual([1, 2, 3]::sum(), 6);
        assert.strictEqual([1, 2, 3]::sum(x => x * 2), 12);
    });
});
