import * as assert from 'assert';
import Enumerable from '../src';

describe('firstOrDefault()', () => {
    it('should returns the first element of a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(), 1);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(x => x % 2 === 0), 2);
    });

    it('should returns a default value if the sequence contains no elements', () => {
        assert.strictEqual(new Enumerable([]).firstOrDefault(), null);
        assert.strictEqual(new Enumerable([]).firstOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(x => x > 10), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).firstOrDefault(x => x > 10, 123), 123);
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];
        assert.strictEqual(new Enumerable(xs).orderBy().firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().firstOrDefault(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).firstOrDefault(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).firstOrDefault(), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).firstOrDefault(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).firstOrDefault(), 3);
    });
});
