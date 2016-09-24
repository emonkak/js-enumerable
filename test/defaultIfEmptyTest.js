import assert from 'assert';
import defaultIfEmpty from '../dist/defaultIfEmpty';

describe('defaultIfEmpty()', () => {
    it('should returns the elements of the specified sequence', () => {
        assert.deepEqual(Array.from([1, 2, 3]::defaultIfEmpty(123)), [1, 2, 3]);
    });

    it('should returns the specified value in a singleton collection if the sequence is empty', () => {
        assert.deepEqual(Array.from([]::defaultIfEmpty(123)), [123]);
    });
});
