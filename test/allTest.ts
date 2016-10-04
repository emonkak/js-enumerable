import Enumerable from '../src';
import * as assert from 'assert';

describe('all()', () => {
    it('should determines whether all elements of a sequence satisfy a condition', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).all(), true);
        assert.strictEqual(new Enumerable([2, 4]).all(n => n % 2 === 0), true);
        assert.strictEqual(new Enumerable([0, 1, 2, 3]).all(n => n % 2 === 0), false);
        assert.strictEqual(new Enumerable([0, 1, 2, 3]).all(), false);
        assert.strictEqual(new Enumerable([]).all(), true);
        assert.strictEqual(new Enumerable([]).all(n => n % 2 === 0), true);
    });
});
