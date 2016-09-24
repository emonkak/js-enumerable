import assert from 'assert';
import count from '../dist/count';

describe('count()', () => {
    it('should returns the number of elements in a sequence', () => {
        assert.strictEqual([1, 2, 3, 4]::count(), 4);
        assert.strictEqual([1, 2, 3, 4][Symbol.iterator]()::count(), 4);
        assert.strictEqual([]::count(), 0);
        assert.strictEqual([1, 2, 3, 4]::count(n => n % 2 === 0), 2);
    });
});
