import * as assert from 'assert';
import elementAt from '../src/elementAt';
import orderBy from '../src/orderBy';
import skip from '../src/skip';
import take from '../src/take';

describe('elementAt()', () => {
    it('should returns the element at a specified index in a sequence', () => {
        const xs = [1, 2, 3, 4];

        assert.strictEqual(elementAt.call(xs, 0), 1);
        assert.strictEqual(elementAt.call(xs, 1), 2);
        assert.strictEqual(elementAt.call(xs, 2), 3);
        assert.strictEqual(elementAt.call(xs, 3), 4);
    });

    it('should throws the exception if index is out of range', () => {
        const xs = [1, 2, 3, 4];

        assert.throws(() => elementAt.call(xs, 4));
    });

    it('should works with orderBy()', () => {
        const xs = [3, 2, 4, 1];

        assert.strictEqual(elementAt.call(orderBy.call(xs), 0), 1);
        assert.strictEqual(elementAt.call(orderBy.call(xs), 1), 2);
        assert.strictEqual(elementAt.call(orderBy.call(xs), 2), 3);
        assert.strictEqual(elementAt.call(orderBy.call(xs), 3), 4);
        assert.strictEqual(elementAt.call(take.call(orderBy.call(xs), 2), 0), 1);
        assert.strictEqual(elementAt.call(take.call(orderBy.call(xs), 2), 1), 2);
        assert.strictEqual(elementAt.call(skip.call(orderBy.call(xs), 2), 0), 3);
        assert.strictEqual(elementAt.call(skip.call(orderBy.call(xs), 2), 1), 4);
        assert.strictEqual(elementAt.call(skip.call(take.call(orderBy.call(xs), 2), 1), 0), 2);
        assert.strictEqual(elementAt.call(take.call(skip.call(orderBy.call(xs), 2), 1), 0), 3);

        assert.throws(() => elementAt.call(orderBy.call(xs), 4));
        assert.throws(() => elementAt.call(take.call(orderBy.call(xs), 2), 3));
        assert.throws(() => elementAt.call(skip.call(take.call(orderBy.call(xs), 2), 1), 1));
        assert.throws(() => elementAt.call(take.call(skip.call(orderBy.call(xs), 2), 1), 1));
    });
});
