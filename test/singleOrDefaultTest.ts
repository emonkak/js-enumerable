import * as assert from 'assert';
import Enumerable from './bundle';

describe('singleOrDefault()', () => {
    it('should returns the only element of a sequence', () => {
        assert.strictEqual(new Enumerable([1]).singleOrDefault(), 1);
        assert.strictEqual(new Enumerable([1][Symbol.iterator]()).singleOrDefault(), 1);
        assert.strictEqual(new Enumerable([1, 2]).singleOrDefault(x => x % 2 === 0), 2);
    });

    it('should returns a default value if the sequence is empty', () => {
        assert.strictEqual(new Enumerable([]).singleOrDefault(), null);
        assert.strictEqual(new Enumerable([] as number[]).singleOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([][Symbol.iterator]()).singleOrDefault(), null);
        assert.strictEqual(new Enumerable(([] as number[])[Symbol.iterator]()).singleOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2]).singleOrDefault(), null);
        assert.strictEqual(new Enumerable([1, 2]).singleOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2][Symbol.iterator]()).singleOrDefault(), null);
        assert.strictEqual(new Enumerable([1, 2][Symbol.iterator]()).singleOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).singleOrDefault(x => x > 0), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).singleOrDefault(x => x > 0, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).singleOrDefault(x => x > 10), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).singleOrDefault(x => x > 10, 123), 123);
    });
});
