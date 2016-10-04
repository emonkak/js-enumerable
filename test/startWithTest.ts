import * as assert from 'assert';
import startWith from '../src/startWith';

describe('startWith()', () => {
    it('should returns the source sequence prefixed with the specified value', () => {
        assert.deepEqual(Array.from(startWith.call([0, 1, 2, 3, 4], 0)), [0, 0, 1, 2, 3, 4]);
    });
});
