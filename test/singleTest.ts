import * as assert from 'assert';
import Enumerable from '../src';

describe('single()', () => {
    it('should returns the only element of a sequence', () => {
        assert.strictEqual(new Enumerable([1]).single(), 1);
        assert.strictEqual(new Enumerable([1, 2]).single(x => x % 2 === 0), 2);
    });

    it('should throws an exception if there is not exactly one element in the sequence', () => {
        assert.throws(() => new Enumerable([]).single());
        assert.throws(() => new Enumerable([1, 2]).single());
        assert.throws(() => new Enumerable([1, 2, 3, 4]).single(x => x > 0));
        assert.throws(() => new Enumerable([1, 2, 3, 4]).single(x => x > 10));
    });
});
