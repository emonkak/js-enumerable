import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('first()', () => {
    it('should returns the first element of a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).first(), 1);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).first(x => x % 2 === 0), 2);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => new Enumerable([]).first());
        assert.throws(() => new Enumerable([1, 2, 3, 4]).first(x => x > 10));
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];
        assert.strictEqual(new Enumerable(xs).orderBy().first(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().first(x => x % 2 === 0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).first(), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).first(), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).first(), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).first(), 3);
    });
});
