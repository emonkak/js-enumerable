import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('onErrorResumeNext()', () => {
    it('should creates a sequence that concatenates both given sequences', () => {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                throw new Error()
            }
        };
        const ys = [3, 4];
        assert.deepEqual(new Enumerable(xs).onErrorResumeNext(ys).toArray(), [1, 2, 3, 4]);
    });
});
