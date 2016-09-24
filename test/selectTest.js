import assert from 'assert';
import select from '../dist/select';

describe('select()', () => {
    it('should projects each element of a sequence', () => {
        assert.deepEqual(Array.from([1, 2, 3, 4]::select(x => x * 2)), [2, 4, 6, 8]);
    });
});
