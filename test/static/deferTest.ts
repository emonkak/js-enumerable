import * as assert from 'assert';
import Enumerable from '../../src';

describe('defer()', () => {
    it('should creates an enumerable sequence based on an enumerable factory function', () => {
        let n = 0;

        const xs = Enumerable.defer(function*() {
            n++;
            for (let i = 0; i < n; i++) {
                yield i;
            }
        });

        assert.deepEqual(xs.toArray(), [0]);
        assert.deepEqual(xs.toArray(), [0, 1]);
        assert.deepEqual(xs.toArray(), [0, 1, 2]);
    });
});
