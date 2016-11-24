import * as assert from 'assert';
import Enumerable from '../src/';

describe('elementAtOrDefault()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(1), 2);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(2), 3);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(3), 4);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAtOrDefault(1), 2);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAtOrDefault(2), 3);
        assert.strictEqual(new Enumerable(xs[Symbol.iterator]()).elementAtOrDefault(3), 4);
    });

    it('should returns a default value if the index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(4, null), null);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(4), null);
    });
});
