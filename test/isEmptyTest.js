import assert from 'assert';
import isEmpty from '../dist/isEmpty';

describe('isEmpty()', function() {
    it('should determines whether an enumerable sequence is empty', function() {
        assert.strictEqual([]::isEmpty(), true);
        assert.strictEqual([1, 2, 3]::isEmpty(), false);
    });
});
