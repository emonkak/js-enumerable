import assert from 'assert';
import maxBy from '../dist/maxBy';

describe('maxBy()', () => {
    it('should returns the elements with the minimum key value by using the default comparer to compare key values', () => {
        assert.deepEqual([]::maxBy(), []);
        assert.deepEqual([3, 2, 1, 2, 3]::maxBy(x => x), [3, 3]);
        assert.deepEqual(['abc', 'ab', 'a', 'ab', 'abc']::maxBy(s => s.length), ['abc', 'abc']);
    });
});
