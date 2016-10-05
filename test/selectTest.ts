import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('select()', () => {
    it('should projects each element of a sequence', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).select(x => x * 2).toArray(), [2, 4, 6, 8]);
    });
});
