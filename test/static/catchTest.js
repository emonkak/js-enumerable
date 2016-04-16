import _catch from '../../dist/static/catch';
import assert from 'assert';

describe('catch()', function() {
    it('should creates a sequence by concatenating source sequences until a source sequence completes successfully', function() {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        };
        const ys = [4, 5, 6];
        const zs = [7, 8, 9];
        assert.deepEqual(Array.from(_catch(xs, ys, zs)), [1, 2, 3, 4, 5, 6]);
    });

    it('should throw the exception if an error continues to occur', function() {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        };
        assert.throws(() => Array.from(_catch(xs, xs)));
    });
});
