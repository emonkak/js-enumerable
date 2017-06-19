import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('memoize()', () => {
    it('should creates a buffer with a view over the source sequence', () => {
        let n = 0;
        const iterator = (function*() {
            for (let i = 0; i < 10; i++) {
                yield n++;
            }
        })();
        const memoized = new Enumerable(iterator).memoize();
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(Array.from(memoized), expected);
        assert.deepEqual(Array.from(memoized), expected);
    });

    it('should release iterator when the exception thrown', () => {
        let n = 0;
        const iterator = (function*() {
            for (let i = 0; i < 10; i++) {
                yield n++;
            }
            throw new Error();
        })();
        const memoized = new Enumerable(iterator).memoize();
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.throws(() => Array.from(memoized));
        assert.deepEqual(Array.from(memoized), expected);
        assert.deepEqual(Array.from(memoized), expected);
    });
});
