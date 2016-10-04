import * as assert from 'assert';
import Enumerable from '../src';

describe('reverse()', () => {
    it('should inverts the order of the elements in a sequence', () => {
        assert.deepEqual(new Enumerable([]).reverse().toArray(), []);
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).reverse().toArray(), [1, 4, 2, 3]);
    });
});
