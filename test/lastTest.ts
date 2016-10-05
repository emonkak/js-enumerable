import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('last()', () => {
    it('should returns the last element of a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).last(), 4);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).last(x => x % 2 === 1), 3);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => new Enumerable([]).last());
        assert.throws(() => new Enumerable([1, 2, 3, 4]).last(x => x > 10));
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(new Enumerable(xs).orderBy().last(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().last(x => x % 2 === 1), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).last(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).last(), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).last(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).last(), 3);
    });
});
