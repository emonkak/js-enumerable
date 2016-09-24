import assert from 'assert';
import defer from '../../dist/static/defer';

describe('defer()', () => {
    it('should creates an enumerable sequence based on an enumerable factory function', () => {
        let n = 5;

        const xs = {
            [Symbol.iterator]: function*() {
                while (n > 0) {
                    yield n--
                }
            }
        };

        assert.deepEqual(Array.from(xs), [5, 4, 3, 2, 1]);
        assert.deepEqual(Array.from(xs), []);
    });
});
