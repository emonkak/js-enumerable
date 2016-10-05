import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('toArray()', () => {
    it('should creates a Array<T> from Iterable<T>', () => {
        assert.deepEqual(new Enumerable([]).toArray(), []);
        assert.deepEqual(new Enumerable([1, 2, 3]).toArray(), [1, 2, 3]);
        assert.deepEqual(new Enumerable([1, 2, 3][Symbol.iterator]()).toArray(), [1, 2, 3]);
    });
});
