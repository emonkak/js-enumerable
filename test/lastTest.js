import assert from 'assert';
import last from '../dist/last';
import orderBy from '../dist/orderBy';
import skip from '../dist/skip';
import take from '../dist/take';

describe('last()', function() {
    it('should returns the last element of a sequence', function() {
        assert.strictEqual([1, 2, 3, 4]::last(), 4);
        assert.strictEqual([1, 2, 3, 4]::last(x => x % 2 === 1), 3);
    });

    it('should throws the exception if the sequence contains no elements', function() {
        assert.throws(() => []::last());
        assert.throws(() => [1, 2, 3, 4]::last(x => x > 10));
    });

    it('should works with orderBy()', function() {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(xs::orderBy()::last(), 4);
        assert.strictEqual(xs::orderBy()::take(2)::last(), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::last(), 4);
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::last(), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::last(), 3);
    });
});
