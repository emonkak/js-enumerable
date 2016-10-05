import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('elementAt()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).elementAt(1), 2);
        assert.strictEqual(new Enumerable(xs).elementAt(2), 3);
        assert.strictEqual(new Enumerable(xs).elementAt(3), 4);
    });

    it('should throws the exception if index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.throws(() => new Enumerable(xs).elementAt(4));
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(1), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(2), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAt(3), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAt(1), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAt(0), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAt(1), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAt(0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAt(0), 3);

        assert.throws(() => new Enumerable(xs).orderBy().elementAt(4));
        assert.throws(() => new Enumerable(xs).orderBy().take(2).elementAt(3));
        assert.throws(() => new Enumerable(xs).orderBy().take(2).skip(1).elementAt(1));
        assert.throws(() => new Enumerable(xs).orderBy().skip(2).take(1).elementAt(1));
    });
});
