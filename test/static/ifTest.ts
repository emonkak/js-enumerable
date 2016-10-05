import * as assert from 'assert';
import Enumerable from '../../src/bundle';

describe('if()', () => {
    it('should returns an enumerable sequence based on the evaluation result of the given condition', () => {
        assert.deepEqual(Enumerable._if(() => true, [1, 2, 3], [4, 5, 6]).toArray(), [1, 2, 3]);
        assert.deepEqual(Enumerable._if(() => false, [1, 2, 3], [4, 5, 6]).toArray(), [4, 5, 6]);
    });
});
