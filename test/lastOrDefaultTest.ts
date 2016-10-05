import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('lastOrDefault()', () => {
    it('should returns the last element of a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(), 4);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(x => x % 2 === 1), 3);
    });

    it('should returns null if the sequence contains no elements', () => {
        assert.strictEqual(new Enumerable([]).lastOrDefault(), null);
        assert.strictEqual(new Enumerable([]).lastOrDefault(null, 123), 123);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(x => x > 10), null);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).lastOrDefault(x => x > 10, 123), 123);
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(new Enumerable(xs).orderBy().lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().lastOrDefault(x => x % 2 === 1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).lastOrDefault(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).lastOrDefault(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).lastOrDefault(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).lastOrDefault(), 3);
    });
});
