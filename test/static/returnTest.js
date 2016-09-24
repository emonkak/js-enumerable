import _return from '../../dist/static/return';
import assert from 'assert';

describe('return()', () => {
    it('should returns a sequence with a single element.', () => {
        assert.deepEqual(Array.from(_return(123)), [123]);
    });
});
