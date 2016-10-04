import * as assert from 'assert';
import elementAtOrDefault from '../src/elementAtOrDefault';
import orderBy from '../src/orderBy';
import skip from '../src/skip';
import take from '../src/take';

describe('elementAtOrDefault()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(elementAtOrDefault.call(xs, 0), 1);
        assert.strictEqual(elementAtOrDefault.call(xs, 1), 2);
        assert.strictEqual(elementAtOrDefault.call(xs, 2), 3);
        assert.strictEqual(elementAtOrDefault.call(xs, 3), 4);
    });

    it('should returns a default value if the index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(elementAtOrDefault.call(xs, 4, 123), 123);
        assert.strictEqual(elementAtOrDefault.call(xs, 4), null);
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(elementAtOrDefault.call(orderBy.call(xs), 0), 1);
        assert.strictEqual(elementAtOrDefault.call(orderBy.call(xs), 1), 2);
        assert.strictEqual(elementAtOrDefault.call(orderBy.call(xs), 2), 3);
        assert.strictEqual(elementAtOrDefault.call(orderBy.call(xs), 3), 4);
        assert.strictEqual(elementAtOrDefault.call(take.call(orderBy.call(xs), 2), 0), 1);
        assert.strictEqual(elementAtOrDefault.call(take.call(orderBy.call(xs), 2), 1), 2);
        assert.strictEqual(elementAtOrDefault.call(skip.call(orderBy.call(xs), 2), 0), 3);
        assert.strictEqual(elementAtOrDefault.call(skip.call(orderBy.call(xs), 2), 1), 4);
        assert.strictEqual(elementAtOrDefault.call(skip.call(take.call(orderBy.call(xs), 2), 1), 0), 2);
        assert.strictEqual(elementAtOrDefault.call(take.call(skip.call(orderBy.call(xs), 2), 1), 0), 3);

        assert.strictEqual(elementAtOrDefault.call(orderBy.call(xs), 4, 123), 123);
        assert.strictEqual(elementAtOrDefault.call(take.call(orderBy.call(xs), 2), 3, 123), 123);
        assert.strictEqual(elementAtOrDefault.call(skip.call(take.call(orderBy.call(xs), 2), 1), 1, 123), 123);
        assert.strictEqual(elementAtOrDefault.call(take.call(skip.call(orderBy.call(xs), 2), 1), 1, 123), 123);
    });
});
