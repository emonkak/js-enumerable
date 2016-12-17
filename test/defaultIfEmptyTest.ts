import * as assert from 'assert';
import Enumerable from './bundle';

describe('defaultIfEmpty()', () => {
    it('should returns the elements of the specified sequence', () => {
        assert.deepEqual(new Enumerable([1, 2, 3]).defaultIfEmpty(123).toArray(), [1, 2, 3]);
    });

    it('should returns the specified value in a singleton collection if the sequence is empty', () => {
        assert.deepEqual(new Enumerable([] as number[]).defaultIfEmpty(123).toArray(), [123]);
    });
});
