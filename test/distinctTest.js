import assert from 'assert';
import distinct from '../dist/distinct';

describe('distinct()', () => {
    it('should returns distinct elements from a sequence', () => {
        assert.deepEqual(Array.from([1, 2, 1, 2]::distinct()), [1, 2]);
        assert.deepEqual(Array.from([1, 1, 2, 2]::distinct()), [1, 2]);
        assert.deepEqual(Array.from([1, 2, 3, 4]::distinct(x => x % 2 === 0)), [1, 2]);
        assert.deepEqual(Array.from([1, 3, 2, 4]::distinct(x => x % 2 === 0)), [1, 2]);
    });
});
