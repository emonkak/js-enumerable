import assert from 'assert';
import startWith from '../dist/startWith';

describe('startWith()', () => {
    it('should returns the source sequence prefixed with the specified value', () => {
        assert.deepEqual(Array.from([0, 1, 2, 3, 4]::startWith(0)), [0, 0, 1, 2, 3, 4]);
    });
});
