import assert from 'assert';
import elementAtOrDefault from '../dist/elementAtOrDefault';
import orderBy from '../dist/orderBy';
import skip from '../dist/skip';
import take from '../dist/take';

describe('elementAtOrDefault()', function() {
    it('should returns the element at a specified index in a sequence', function() {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(xs::elementAtOrDefault(0), 1);
        assert.strictEqual(xs::elementAtOrDefault(1), 2);
        assert.strictEqual(xs::elementAtOrDefault(2), 3);
        assert.strictEqual(xs::elementAtOrDefault(3), 4);
    });

    it('should returns a default value if the index is out of range', function() {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(xs::elementAtOrDefault(4, 123), 123);
        assert.strictEqual(xs::elementAtOrDefault(4), null);
    });

    it('should works with orderBy()', function() {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(xs::orderBy()::elementAtOrDefault(0), 1);
        assert.strictEqual(xs::orderBy()::elementAtOrDefault(1), 2);
        assert.strictEqual(xs::orderBy()::elementAtOrDefault(2), 3);
        assert.strictEqual(xs::orderBy()::elementAtOrDefault(3), 4);
        assert.strictEqual(xs::orderBy()::take(2)::elementAtOrDefault(0), 1);
        assert.strictEqual(xs::orderBy()::take(2)::elementAtOrDefault(1), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::elementAtOrDefault(0), 3);
        assert.strictEqual(xs::orderBy()::skip(2)::elementAtOrDefault(1), 4);
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::elementAtOrDefault(0), 2);
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::elementAtOrDefault(0), 3);

        assert.strictEqual(xs::orderBy()::elementAtOrDefault(4, 123), 123);
        assert.strictEqual(xs::orderBy()::take(2)::elementAtOrDefault(3, 123), 123);
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::elementAtOrDefault(1, 123), 123);
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::elementAtOrDefault(1, 123), 123);
    });
});
