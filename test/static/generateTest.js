import assert from 'assert';
import generate from '../../dist/static/generate';

describe('generate()', function() {
    it('should generates a sequence by mimicking a for loop', function() {
        assert.deepEqual(Array.from(generate(0, x => x < 5, x => x + 1, x => x * x)), [0, 1, 4, 9, 16]);
    });
});
