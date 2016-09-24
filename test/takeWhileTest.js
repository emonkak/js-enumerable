import assert from 'assert';
import takeWhile from '../dist/takeWhile';

describe('takeWhile()', () => {
    it('should yield elements from a sequence while a condition is true', () => {
        assert.deepEqual(Array.from([1, 2, 3, 4]::takeWhile(x => x % 2 === 0)), []);
        assert.deepEqual(Array.from([4, 3, 2, 1]::takeWhile(x => x % 2 === 0)), [4]);
    });
});
