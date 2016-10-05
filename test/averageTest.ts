import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('average()', () => {
    it('should computes the average of a sequence of numbers', () => {
        assert.strictEqual(new Enumerable([0, 1, 2, 3, 4]).average(), 2);
        assert.strictEqual(new Enumerable([0, 1, 2, 3, 4]).average(n => n * 2), 4);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => new Enumerable([]).average(), Error);
        assert.throws(() => new Enumerable([]).average(n => n * 2), Error);
    });
});
