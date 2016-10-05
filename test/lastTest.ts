import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('last()', () => {
    it('should returns the last element of a sequence', () => {
        const xs = [1, 2, 3, 4];
        assert.strictEqual(new Enumerable(xs).last(), 4);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).last(), 4);
        assert.strictEqual(new Enumerable(xs).last(x => x % 2 === 1), 3);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => new Enumerable([]).last());
        assert.throws(() => new Enumerable([1, 2, 3, 4]).last(x => x > 10));
    });
});
