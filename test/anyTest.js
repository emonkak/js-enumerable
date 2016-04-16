import any from '../dist/any';
import assert from 'assert';

describe('any()', function() {
    it('should determines whether a sequence contains any elements', function() {
        assert.strictEqual([0, 1, 2, 3, 4]::any(), true);
        assert.strictEqual([1, 2, 3, 4]::any(n => n % 2 === 0), true);
        assert.strictEqual([0]::any(), false);
        assert.strictEqual([1, 3]::any(n => n % 2 === 0), false);
        assert.strictEqual([]::any(), false);
        assert.strictEqual([]::any(n => n % 2, 0), false);
    });
});
