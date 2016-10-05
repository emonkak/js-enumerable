import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('lastOrDefault()', () => {
    it('should returns the last element of a sequence', () => {
        const xs = [1, 2, 3, 4];
        assert.strictEqual(new Enumerable(xs).lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs).lastOrDefault(x => x % 2 === 1), 3);
    });

    it('should returns null if the sequence contains no elements', () => {
        assert.strictEqual(new Enumerable([]).lastOrDefault(), null);
        assert.strictEqual(new Enumerable([]).lastOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([][Symbol.iterator]()).lastOrDefault(), null);
        assert.strictEqual(new Enumerable([][Symbol.iterator]()).lastOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(x => x > 10), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(x => x > 10, 123), 123);
    });
});
