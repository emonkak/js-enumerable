import * as assert from 'assert';
import Enumerable from './bundle';

describe('isEmpty()', () => {
    it('should determines whether an enumerable sequence is empty', () => {
        assert.strictEqual(new Enumerable([]).isEmpty(), true);
        assert.strictEqual(new Enumerable([1, 2, 3]).isEmpty(), false);
    });
});
