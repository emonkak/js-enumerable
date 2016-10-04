import * as assert from 'assert';
import onErrorResumeNext from '../src/onErrorResumeNext';

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
        assert.deepEqual(Array.from(onErrorResumeNext.call(xs, ys)), [1, 2, 3, 4]);
    });
});
