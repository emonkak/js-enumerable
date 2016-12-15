import * as assert from 'assert';
import Enumerable from './bundle';

describe('onErrorResumeNext()', () => {
    it('should creates a sequence that concatenates both given sequences', () => {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1;
                yield 2;
                throw new Error();
            }
        };
        const ys = {
            [Symbol.iterator]: function*() {
                yield 3;
                yield 4;
                throw new Error();
            }
        };
        assert.deepEqual(new Enumerable(xs).onErrorResumeNext(ys).toArray(), [1, 2, 3, 4]);
    });
});
