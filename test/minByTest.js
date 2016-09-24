import assert from 'assert';
import minBy from '../dist/minBy';

describe('minBy()', () => {
    it('should returns the elements with the maximum key value by using the default comparer to compare key values', () => {
        assert.deepEqual([]::minBy(), []);
        assert.deepEqual([1, 2, 3, 2, 1]::minBy(x => x), [1, 1]);
        assert.deepEqual(['a', 'ab', 'abc', 'ab', 'a']::minBy(s => s.length), ['a', 'a']);
    });
});
