import * as assert from 'assert';
import Enumerable from '../../src/bundle';

describe('range()', () => {
    it('should generates a sequence of integral numbers within a specified range', () => {
        assert.deepEqual(Enumerable.range(1, 10).toArray(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(Enumerable.range(1, 10).take(5).toArray(), [1, 2, 3, 4, 5]);
        assert.deepEqual(Enumerable.range(1, 10).skip(5).toArray(), [6, 7, 8, 9, 10]);
        assert.strictEqual(Enumerable.range(1, 10).take(5).first(), 1);
        assert.strictEqual(Enumerable.range(1, 10).take(5).last(), 5);
        assert.strictEqual(Enumerable.range(1, 10).take(5).first(x => x % 2 === 0), 2);
        assert.strictEqual(Enumerable.range(1, 10).take(5).last(x => x % 2 === 0), 4);
        assert.strictEqual(Enumerable.range(1, 10).skip(5).first(), 6);
        assert.strictEqual(Enumerable.range(1, 10).skip(5).last(), 10);
        assert.strictEqual(Enumerable.range(1, 10).skip(10).firstOrDefault(null, 123), 123);
        assert.strictEqual(Enumerable.range(1, 10).skip(10).lastOrDefault(null, 123), 123);
        assert.strictEqual(Enumerable.range(1, 10).elementAt(5), 6);
        assert.strictEqual(Enumerable.range(1, 10).elementAtOrDefault(999, 123), 123);

        assert.throws(() => Enumerable.range(1, 10).skip(10).first());
        assert.throws(() => Enumerable.range(1, 10).skip(10).last());
        assert.throws(() => Enumerable.range(1, 10).elementAt(999));
    });
});
