import * as assert from 'assert';
import Enumerable from './bundle';

describe('count()', () => {
    it('should returns the number of elements in a sequence', () => {
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).count(), 4);
        assert.strictEqual(new Enumerable([1, 2, 3, 4][Symbol.iterator]()).count(), 4);
        assert.strictEqual(new Enumerable([]).count(), 0);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).count(n => n % 2 === 0), 2);
    });
});
