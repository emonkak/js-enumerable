import * as assert from 'assert';
import retry from '../src/retry';

describe('retry()', () => {
    it('should creates a sequence that retries enumerating the source sequence as long as an error occurs.', () => {
        assert.deepEqual(Array.from(retry.call([1, 2, 3])), [1, 2, 3]);
        assert.deepEqual(Array.from(retry.call([1, 2, 3], 2)), [1, 2, 3]);

        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        };
        const iterator = retry.call(xs, 2)[Symbol.iterator]();
        assert.deepEqual(iterator.next(), { done: false, value: 1 });
        assert.deepEqual(iterator.next(), { done: false, value: 2 });
        assert.deepEqual(iterator.next(), { done: false, value: 3 });
        assert.deepEqual(iterator.next(), { done: false, value: 1 });
        assert.deepEqual(iterator.next(), { done: false, value: 2 });
        assert.deepEqual(iterator.next(), { done: false, value: 3 });
        assert.throws(() => iterator.next());
    });
});
