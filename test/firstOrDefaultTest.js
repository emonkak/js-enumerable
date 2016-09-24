import assert from 'assert';
import firstOrDefault from '../dist/firstOrDefault';
import orderBy from '../dist/orderBy';
import skip from '../dist/skip';
import take from '../dist/take';

describe('firstOrDefault()', () => {
    it('should returns the first element of a sequence', () => {
        assert.strictEqual([1, 2, 3, 4]::firstOrDefault(), 1);
        assert.strictEqual([1, 2, 3, 4]::firstOrDefault(x => x % 2 === 0), 2);
    });

    it('should returns a default value if the sequence contains no elements', () => {
        assert.strictEqual([]::firstOrDefault(), null);
        assert.strictEqual([]::firstOrDefault(null, 123), 123);
        assert.strictEqual([1, 2, 3, 4]::firstOrDefault(x => x > 10), null);
        assert.strictEqual([1, 2, 3, 4]::firstOrDefault(x => x > 10, 123), 123);
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];
        assert.strictEqual(xs::orderBy()::firstOrDefault(), 1);
        assert.strictEqual(xs::orderBy()::take(2)::firstOrDefault(), 1);
        assert.strictEqual(xs::orderBy()::skip(2)::firstOrDefault(), 3);
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::firstOrDefault(), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::firstOrDefault(), 3);
    });
});
