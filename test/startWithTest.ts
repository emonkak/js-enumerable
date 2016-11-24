import * as assert from 'assert';
import Enumerable from '../src/';

describe('startWith()', () => {
    it('should returns the source sequence prefixed with the specified value', () => {
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4]).startWith(0).toArray(), [0, 0, 1, 2, 3, 4]);
    });
});
