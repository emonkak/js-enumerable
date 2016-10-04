import * as assert from 'assert';
import Enumerable from '../src';

describe('distinctUntilChanged()', () => {
    it('should returns consecutive distinct elements', () => {
        assert.deepEqual(new Enumerable([1, 2, 1, 2]).distinctUntilChanged().toArray(), [1, 2, 1, 2]);
        assert.deepEqual(new Enumerable([1, 1, 2, 2]).distinctUntilChanged().toArray(), [1, 2]);
        assert.deepEqual(new Enumerable([1, 2, 3, 4]).distinctUntilChanged(x => x % 2 === 0).toArray(), [1, 2, 3, 4]);
        assert.deepEqual(new Enumerable([1, 3, 2, 4]).distinctUntilChanged(x => x % 2 === 0).toArray(), [1, 2]);
    });
});


