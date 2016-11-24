import * as assert from 'assert';
import Enumerable from '../../src/';

describe('repeat()', () => {
    it('should generates a sequence by repeating the given value', () => {
        assert.deepEqual(Enumerable.repeat(123, 4).toArray(), [123, 123, 123, 123]);
        assert.deepEqual(Enumerable.repeat(123, 4).skip(4).toArray(), []);
        assert.deepEqual(Enumerable.repeat(123, 4).take(2).toArray(), [123, 123]);
        assert.deepEqual(Enumerable.repeat(123, 4).take(6).toArray(), [123, 123, 123, 123]);

        assert.strictEqual(Enumerable.repeat(123).skip(10).first(), 123);
        assert.strictEqual(Enumerable.repeat(123).take(10).last(), 123);
        assert.strictEqual(Enumerable.repeat(123).first(), 123);
        assert.strictEqual(Enumerable.repeat(123).firstOrDefault(), 123);
        assert.strictEqual(Enumerable.repeat(123).last(), 123);
        assert.strictEqual(Enumerable.repeat(123).lastOrDefault(), 123);
        assert.strictEqual(Enumerable.repeat(123).elementAt(0), 123);
        assert.strictEqual(Enumerable.repeat(123).elementAt(999), 123);
        assert.strictEqual(Enumerable.repeat(123).elementAtOrDefault(0), 123);
        assert.strictEqual(Enumerable.repeat(123).elementAtOrDefault(999), 123);
        assert.strictEqual(Enumerable.repeat(123, 0).firstOrDefault(null, null), null);
        assert.strictEqual(Enumerable.repeat(123, 0).lastOrDefault(null, null), null);
        assert.strictEqual(Enumerable.repeat(123, 0).elementAtOrDefault(999, null), null);
        assert.strictEqual(Enumerable.repeat(123, 1).elementAtOrDefault(999, null), null);

        assert.throws(() => Enumerable.repeat(123, -1));
        assert.throws(() => Enumerable.repeat(123, 0).first());
        assert.throws(() => Enumerable.repeat(123, 0).last());
        assert.throws(() => Enumerable.repeat(123, 0).elementAt(999));
        assert.throws(() => Enumerable.repeat(123, 1).elementAt(999));
    });
});
