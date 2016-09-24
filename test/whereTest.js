import assert from 'assert';
import where from '../dist/where';

describe('where()', () => {
    it('should filters a sequence of values based on a predicate', () => {
        assert.deepEqual(Array.from([1, 2, 3, 4]::where(x => x % 2 == 0)), [2, 4]);
    });
});
