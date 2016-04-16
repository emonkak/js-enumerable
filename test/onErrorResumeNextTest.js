import assert from 'assert';
import onErrorResumeNext from '../dist/onErrorResumeNext';
import sinon from 'sinon';

describe('onErrorResumeNext()', function() {
    it('should creates a sequence that concatenates both given sequences', function() {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                throw new Error()
            }
        };
        const ys = [3, 4];
        assert.deepEqual(Array.from(xs::onErrorResumeNext(ys)), [1, 2, 3, 4]);
    });
});
