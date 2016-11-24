import * as assert from 'assert';
import Enumerable from '../../src/';

describe('catch()', () => {
    it('should creates a sequence by concatenating source sequences until a source sequence completes successfully', () => {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1;
                yield 2;
                yield 3;
                throw new Error();
            }
        };
        const ys = [4, 5, 6];
        const zs = [7, 8, 9];
        assert.deepEqual(Enumerable._catch(xs, ys, zs).toArray(), [1, 2, 3, 4, 5, 6]);
    });

    it('should throw the exception if an error continues to occur', () => {
        const xs = {
            [Symbol.iterator]: function*() {
                yield 1;
                yield 2;
                yield 3;
                throw new Error();
            }
        };
        assert.throws(() => Enumerable._catch(xs, xs).toArray());
    });
});
