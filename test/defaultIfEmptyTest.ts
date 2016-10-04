import * as assert from 'assert';
import defaultIfEmpty from '../src/defaultIfEmpty';

describe('defaultIfEmpty()', () => {
    it('should returns the elements of the specified sequence', () => {
        assert.deepEqual(Array.from(defaultIfEmpty.call([1, 2, 3], 123)), [1, 2, 3]);
    });

    it('should returns the specified value in a singleton collection if the sequence is empty', () => {
        assert.deepEqual(Array.from(defaultIfEmpty.call([], 123)), [123]);
    });
});
