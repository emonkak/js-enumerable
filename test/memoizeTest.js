import assert from 'assert';
import memoize from '../dist/memoize';

describe('memoize()', () => {
    it('should creates a buffer with a view over the source sequence', () => {
        let n = 0;
        const iterator = (function* () {
            for (let i = 0; i < 10; i++) yield n++
        })();
        const memoized = iterator::memoize();
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(Array.from(memoized), expected);
        assert.deepEqual(Array.from(memoized), expected);
    });
});
