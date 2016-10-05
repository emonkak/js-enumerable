import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('elementAtOrDefault()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(1), 2);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(2), 3);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(3), 4);
    });

    it('should returns a default value if the index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(4, 123), 123);
        assert.strictEqual(new Enumerable(xs).elementAtOrDefault(4), null);
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(1), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(2), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(3), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(0), 1);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(1), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAtOrDefault(0), 3);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).elementAtOrDefault(1), 4);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAtOrDefault(0), 2);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAtOrDefault(0), 3);

        assert.strictEqual(new Enumerable(xs).orderBy().elementAtOrDefault(4, 123), 123);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).elementAtOrDefault(3, 123), 123);
        assert.strictEqual(new Enumerable(xs).orderBy().take(2).skip(1).elementAtOrDefault(1, 123), 123);
        assert.strictEqual(new Enumerable(xs).orderBy().skip(2).take(1).elementAtOrDefault(1, 123), 123);
    });
});
