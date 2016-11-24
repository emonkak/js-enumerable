import * as assert from 'assert';
import Enumerable from '../src/';

describe('min()', () => {
    it('should returns the minimum value in a sequence of values', () => {
        assert.strictEqual(new Enumerable([]).min(), Infinity);
        assert.strictEqual(new Enumerable([1, 2, 3, 2, 1]).min(), 1);
        assert.strictEqual(new Enumerable(['a', 'ab', 'abc', 'ab', 'a']).min(s => s.length), 1);
    });
});
