import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('elementAt()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs).elementAt(1), 2);
        assert.strictEqual(new Enumerable(xs).elementAt(2), 3);
        assert.strictEqual(new Enumerable(xs).elementAt(3), 4);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAt(0), 1);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAt(1), 2);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAt(2), 3);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAt(3), 4);
    });

    it('should throws the exception if index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.throws(() => new Enumerable(xs).elementAt(4));
    });
});
