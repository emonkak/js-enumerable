import assert from 'assert';
import singleOrDefault from '../dist/singleOrDefault';

describe('singleOrDefault()', () => {
    it('should returns the only element of a sequence', () => {
        assert.strictEqual([1]::singleOrDefault(), 1);
        assert.strictEqual([1, 2]::singleOrDefault(x => x % 2 === 0), 2);
    });

    it('should returns a default value if the sequence is empty', () => {
        assert.strictEqual([]::singleOrDefault(null, 123), 123);
        assert.strictEqual([1, 2]::singleOrDefault(null, 123), 123);
        assert.strictEqual([1, 2, 3, 4]::singleOrDefault(x => x > 0, 123), 123);
        assert.strictEqual([1, 2, 3, 4]::singleOrDefault(x => x > 10, 123), 123);
        assert.strictEqual([]::singleOrDefault(), null);
        assert.strictEqual([1, 2]::singleOrDefault(), null);
        assert.strictEqual([1, 2, 3, 4]::singleOrDefault(x => x > 0), null);
        assert.strictEqual([1, 2, 3, 4]::singleOrDefault(x => x > 10), null);
    });
});
