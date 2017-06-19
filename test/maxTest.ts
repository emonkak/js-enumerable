import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('max()', () => {
    it('should returns the maximum value in a sequence of values', () => {
        assert.strictEqual(new Enumerable([]).max(), -Infinity);
        assert.strictEqual(new Enumerable([1, 2, 3, 2, 1]).max(), 3);
        assert.strictEqual(new Enumerable(['a', 'ab', 'abc', 'ab', 'a']).max(s => s.length), 3);
    });
});
