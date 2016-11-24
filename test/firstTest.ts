import * as assert from 'assert';
import Enumerable from '../src/';

describe('first()', () => {
    it('should returns the first element of a sequence', () => {
        const xs = [1, 2, 3, 4];
        assert.strictEqual(new Enumerable(xs).first(), 1);
        assert.strictEqual(new Enumerable(xs).first(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).first(), 1);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => new Enumerable([]).first());
        assert.throws(() => new Enumerable([][Symbol.iterator]()).first());
        assert.throws(() => new Enumerable([1, 2, 3, 4]).first(x => x > 10));
    });
});
