import assert from 'assert';
import orderBy from '../dist/orderBy';
import skip from '../dist/skip';
import take from '../dist/take';

describe('take()', () => {
    it('should returns a specified number of contiguous elements from the start of a sequence', () => {
        assert.deepEqual(Array.from([1, 2, 3, 4]::take(2)), [1, 2]);
        assert.deepEqual(Array.from([1, 2, 3, 4]::take(0)), []);
    });

    it('should works with orderBy()', () => {
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy()::take(2)), [1, 2]);
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy()::skip(2)), [3, 4]);
    });
});
