import Enumerable from '../../src';
import * as assert from 'assert';

describe('return()', () => {
    it('should returns a sequence with a single element.', () => {
        assert.deepEqual(Enumerable._return(123).toArray(), [123]);
    });
});
