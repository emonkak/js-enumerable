import * as assert from 'assert';
import Enumerable from './bundle';

describe('maxBy()', () => {
    it('should returns the elements with the minimum key value by using the default comparer to compare key values', () => {
        assert.deepEqual(new Enumerable([3, 2, 1, 2, 3]).maxBy(x => x).toArray(), [3, 3]);
        assert.deepEqual(new Enumerable(['ab', 'abc', 'ab', 'a', 'ab', 'abc', 'ab']).maxBy(s => s.length).toArray(), ['abc', 'abc']);
    });
});
