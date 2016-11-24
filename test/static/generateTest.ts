import * as assert from 'assert';
import Enumerable from '../../src/';

describe('generate()', () => {
    it('should generates a sequence by mimicking a for loop', () => {
        assert.deepEqual(Enumerable.generate(0, x => x < 5, x => x + 1, x => x * x).toArray(), [0, 1, 4, 9, 16]);
    });
});
