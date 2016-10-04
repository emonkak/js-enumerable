import * as assert from 'assert';
import isEmpty from '../src/isEmpty';

describe('isEmpty()', () => {
    it('should determines whether an enumerable sequence is empty', () => {
        assert.strictEqual(isEmpty.call([]), true);
        assert.strictEqual(isEmpty.call([1, 2, 3]), false);
    });
});
