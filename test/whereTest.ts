import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('where()', () => {
    it('should filters a sequence of values based on a predicate', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).where(x => x % 2 == 0).toArray(), [2, 4]);
    });
});
