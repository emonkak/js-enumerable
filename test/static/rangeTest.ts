import * as assert from 'assert';
import Enumerable from '../../src/';

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
        assert.strictEqual(Enumerable.range(1, 10).skip(10).skip(10).firstOrDefault(null, null), null);
        assert.strictEqual(Enumerable.range(1, 10).skip(10).take(10).lastOrDefault(null, null), null);
        assert.strictEqual(Enumerable.range(1, 10).skip(10).elementAtOrDefault(0, null), null);
        assert.strictEqual(Enumerable.range(1, 10).first(), 1);
        assert.strictEqual(Enumerable.range(1, 10).firstOrDefault(), 1);
        assert.strictEqual(Enumerable.range(1, 10).last(), 10);
        assert.strictEqual(Enumerable.range(1, 10).lastOrDefault(), 10);
        assert.strictEqual(Enumerable.range(1, 10).elementAt(0), 1);
        assert.strictEqual(Enumerable.range(1, 10).elementAt(1), 2);
        assert.strictEqual(Enumerable.range(1, 10).elementAt(9), 10);
        assert.strictEqual(Enumerable.range(1, 10).elementAtOrDefault(0), 1);
        assert.strictEqual(Enumerable.range(1, 10).elementAtOrDefault(1), 2);
        assert.strictEqual(Enumerable.range(1, 10).elementAtOrDefault(9), 10);
        assert.strictEqual(Enumerable.range(1, 10).elementAtOrDefault(999, null), null);

        assert.throws(() => Enumerable.range(1, 10).skip(10).skip(10).first());
        assert.throws(() => Enumerable.range(1, 10).skip(10).take(10).last());
        assert.throws(() => Enumerable.range(1, 10).elementAt(999));
    });
});
