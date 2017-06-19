import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('any()', () => {
    it('should determines whether a sequence contains any elements', () => {
        assert.strictEqual(new Enumerable([0, 1, 2, 3, 4]).any(), true);
        assert.strictEqual(new Enumerable([1, 2, 3, 4]).any(n => n % 2 === 0), true);
        assert.strictEqual(new Enumerable([0]).any(), false);
        assert.strictEqual(new Enumerable([1, 3]).any(n => n % 2 === 0), false);
        assert.strictEqual(new Enumerable([]).any(), false);
        assert.strictEqual(new Enumerable([] as number[]).any(n => n % 2 === 0), false);
    });
});
