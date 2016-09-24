import assert from 'assert';
import average from '../dist/average';

describe('average()', () => {
    it('should computes the average of a sequence of numbers', () => {
        assert.strictEqual([0, 1, 2, 3, 4]::average(), 2);
        assert.strictEqual([0, 1, 2, 3, 4]::average(n => n * 2), 4);
    });

    it('should throws the exception if the sequence contains no elements', () => {
        assert.throws(() => []::average(), Error);
        assert.throws(() => []::average(n => n * 2), Error);
    });
});
