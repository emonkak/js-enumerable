import * as assert from 'assert';
import Enumerable from '../src';

describe('sum()', () => {
    it('should computes the sum of a sequence of numeric values', () => {
        assert.strictEqual(new Enumerable([1, 2, 3]).sum(), 6);
        assert.strictEqual(new Enumerable([1, 2, 3]).sum(x => x * 2), 12);
    });
});
