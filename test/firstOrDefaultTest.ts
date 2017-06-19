import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('firstOrDefault()', () => {
    it('should returns the first element of a sequence', () => {
        const xs = [1, 2, 3, 4];
        assert.strictEqual(new Enumerable(xs).firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).firstOrDefault(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).firstOrDefault(), 1);
    });

    it('should returns a default value if the sequence contains no elements', () => {
        assert.strictEqual(new Enumerable([]).firstOrDefault(), null);
        assert.strictEqual(new Enumerable([] as number[]).firstOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([][Symbol.iterator]()).firstOrDefault(), null);
        assert.strictEqual(new Enumerable(([] as number[])[Symbol.iterator]()).firstOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(x => x > 10), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(x => x > 10, 123), 123);
    });
});
