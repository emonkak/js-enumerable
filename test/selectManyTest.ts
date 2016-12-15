import * as assert from 'assert';
import Enumerable from './bundle';

describe('selectMany()', () => {
    it('should projects each element of a sequence to a Iterable<T>', () => {
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).selectMany(x => [x, x * 2]).toArray(), [1, 2, 2, 4, 3, 6, 4, 8]);
    });
});
