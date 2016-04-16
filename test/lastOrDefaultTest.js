import assert from 'assert';
import lastOrDefault from '../dist/lastOrDefault';
import orderBy from '../dist/orderBy';
import skip from '../dist/skip';
import take from '../dist/take';

describe('lastOrDefault()', function() {
    it('should returns the last element of a sequence', function() {
        assert.strictEqual([1, 2, 3, 4]::lastOrDefault(), 4);
        assert.strictEqual([1, 2, 3, 4]::lastOrDefault(x => x % 2 === 1), 3);
    });

    it('should returns null if the sequence contains no elements', function() {
        assert.strictEqual([]::lastOrDefault(), null);
        assert.strictEqual([]::lastOrDefault(null, 123), 123);
        assert.strictEqual([1, 2, 3, 4]::lastOrDefault(x => x > 10), null);
        assert.strictEqual([1, 2, 3, 4]::lastOrDefault(x => x > 10, 123), 123);
    });

    it('should works with orderBy()', function() {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(xs::orderBy()::lastOrDefault(), 4);
        assert.strictEqual(xs::orderBy()::take(2)::lastOrDefault(), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::lastOrDefault(), 4);
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::lastOrDefault(), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::lastOrDefault(), 3);
    });
});
