import assert from 'assert';
import reverse from '../dist/reverse';

describe('reverse()', function() {
    it('should inverts the order of the elements in a sequence', function() {
        assert.deepEqual(Array.from([]::reverse()), []);
        assert.deepEqual(Array.from([3, 2, 4, 1]::reverse(x => x)), [1, 4, 2, 3]);
    });
});
