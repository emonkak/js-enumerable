import assert from 'assert';
import skipWhile from '../dist/skipWhile';

describe('skipWhile()', () => {
    it('should skip elements in a sequence while a condition is true', () => {
        assert.deepEqual(Array.from([1, 2, 3, 4]::skipWhile(x => x % 2 === 0)), [1, 2, 3, 4]);
        assert.deepEqual(Array.from([4, 3, 2, 1]::skipWhile(x => x % 2 === 0)), [3, 2, 1]);
    });
});
