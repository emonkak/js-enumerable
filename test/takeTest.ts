import * as assert from 'assert';
import orderBy from '../src/orderBy';
import skip from '../src/skip';
import take from '../src/take';

describe('take()', () => {
    it('should returns a specified number of contiguous elements from the start of a sequence', () => {
        assert.deepEqual(Array.from(take.call([1, 2, 3, 4], 2)), [1, 2]);
        assert.deepEqual(Array.from(take.call([1, 2, 3, 4], 0)), []);
    });

    it('should works with orderBy()', () => {
        assert.deepEqual(Array.from(take.call(orderBy.call([3, 2, 4, 1]), 2)), [1, 2]);
        assert.deepEqual(Array.from(take.call(orderBy.call([]), 2)), []);
    });
});
