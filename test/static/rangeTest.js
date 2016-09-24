import assert from 'assert';
import elementAt from '../../dist/elementAt';
import elementAtOrDefault from '../../dist/elementAtOrDefault';
import first from '../../dist/first';
import firstOrDefault from '../../dist/firstOrDefault';
import last from '../../dist/last';
import lastOrDefault from '../../dist/lastOrDefault';
import range from '../../dist/static/range';
import skip from '../../dist/skip';
import take from '../../dist/take';

describe('range()', () => {
    it('should generates a sequence of integral numbers within a specified range', () => {
        assert.deepEqual(Array.from(range(1, 10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(Array.from(range(1, 10)::take(5)), [1, 2, 3, 4, 5]);
        assert.deepEqual(Array.from(range(1, 10)::skip(5)), [6, 7, 8, 9, 10]);
        assert.strictEqual(range(1, 10).length, 10);
        assert.strictEqual(range(1, 10)::take(5)::first(), 1);
        assert.strictEqual(range(1, 10)::take(5)::last(), 5);
        assert.strictEqual(range(1, 10)::take(5)::first(x => x % 2 === 0), 2);
        assert.strictEqual(range(1, 10)::take(5)::last(x => x % 2 === 0), 4);
        assert.strictEqual(range(1, 10)::skip(5)::first(), 6);
        assert.strictEqual(range(1, 10)::skip(5)::last(), 10);
        assert.strictEqual(range(1, 10)::skip(10)::firstOrDefault(null, 123), 123);
        assert.strictEqual(range(1, 10)::skip(10)::lastOrDefault(null, 123), 123);
        assert.strictEqual(range(1, 10)::elementAt(5), 6);
        assert.strictEqual(range(1, 10)::elementAtOrDefault(999, 123), 123);

        assert.throws(() => range(1, 10)::skip(10)::first());
        assert.throws(() => range(1, 10)::skip(10)::last());
        assert.throws(() => range(1, 10)::elementAt(999));
    });
});
